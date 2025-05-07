import { useNavigate } from 'react-router-dom';
import ArrowRight from '../../../../assets/images/icons/arrow-right';
import BigFinger from '../../../../assets/images/icons/bigFinger';
import Homes from '../../../../assets/images/icons/homes';
import { useEstateStyles } from './estate.style';
import { useEstate } from './action/estate.query';

const EstateComponent = () => {
    const classes=useEstateStyles()
    const navigate=useNavigate()
    const {data}=useEstate()
    console.log(data,"estate")
    const idParams=(id:number)=>{
        navigate(`/${id}`)
    }
    // const data=[
    //     {
    //         id:1,
    //         header:"Daşınmaz əmlak krediti",
    //         text:"Information about loan. Volutpat faucibus enim risus vulputate nisl sed sed. Facilisis pellentesque id tristique.",
    //         duration:"24-72",
    //         amount:"24 000 - 72 000",
    //         rate:"12-18",
    //         category:"home"


    //     },
    //     {
    //         id:2,
    //         header:"Magna feugiat morbi felis aliquam aenean.",
    //         text:"Information about loan. Volutpat faucibus enim risus vulputate nisl sed sed. Facilisis pellentesque id tristique.",
    //         duration:"24-72",
    //         amount:"24 000 - 72 000",
    //         rate:"12-18",
    //         category:"finger"
            
    //     },
    //     {
    //         id:3,
    //         header:"Posuere urna tellus port",
    //         text:"Information about loan. Volutpat faucibus enim risus vulputate nisl sed sed. Facilisis pellentesque id tristique.",
    //         duration:"24-72",
    //         amount:"24 000 - 72 000",
    //         rate:"12-18",
    //         category:"finger"
            
    //     }
    // ]
    return (
        <div className={classes.container}>
            {
                data?.map((e:any,key:number)=>{
                    return <div className={classes.estateBox} key={key}>
                            <div className={classes.estateMainBox}>
                                <div className={classes.textDiv}>
                                    <h1 className={classes.estateHeader}>
                                        {e.title}
                                    </h1>
                                    <p className={classes.estateText}>
                                        {e.description}
                                    </p>
                                </div>
                                <div className={classes.conditions}>
                                    <div className={classes.conditionsBox}>
                                        <p className={classes.conditionsText}>
                                            Müddət (Ay)
                                        </p>
                                        <span className={classes.conditionsValue}>
                                            {e.period}
                                        </span>
                                    </div>
                                    <div className={classes.conditionsBox}>
                                        <p className={classes.conditionsText}> 
                                        Məbləğ (AZN)
                                        </p>
                                        <span className={classes.conditionsValue}>
                                            {e.amount}
                                        </span>
                                    </div>
                                    <div className={classes.conditionsBox}>
                                        <p className={classes.conditionsText}>
                                        Faiz dərəcəsi (%)
                                        </p>
                                        <span className={classes.conditionsValue}>
                                            {e.comission}
                                        </span>
                                    </div>
                                </div>
                                <button onClick={()=>idParams(e.id)} className={classes.btn}>
                                    Apply loan
                                    <ArrowRight/>
                                </button>

                            </div>
                            <div className={classes.svgDiv}>
                                <img src={e.url} alt="" />
                                {/* {e.category==="home"?<Homes/>:<BigFinger/>} */}
                            </div>
                    </div>
                })
            }
        </div>
    );
}

export default EstateComponent;

import { useParams } from 'react-router-dom';
import ChevronRight from "../../../../assets/images/icons/chevron-right";
import Home from "../../../../assets/images/icons/home";
import Homes from '../../../../assets/images/icons/homes';
import BigFinger from '../../../../assets/images/icons/bigFinger';
import { useMainParamsStyles } from './paramas-main.styles';
import { useEstate } from '../../../products/components/estate/action/estate.query';

const mainParamsComponent = () => {
    const classes=useMainParamsStyles()
    const {id}=useParams()
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
    const {data}=useEstate()
    const params=data?.filter((e:any)=>e.id==id)
    return (
        <div className={`${classes.container}`}>

            {
                params?.map((e:any,key:number)=>{
                    return <div className={`centered-container container mx-auto ${classes.box}`} key={key}>
                                <div className={classes.mainContainer}> 
                                   <Home/>
                                   <ChevronRight/>
                                   <span className={classes.about}>
                                       Products
                                   </span>
                                   <ChevronRight/>
                                   <span className={classes.about}>
                                    {e.title}
                                   </span>
                                </div>
                                <div className={classes.mainDiv}>
                                    <div>
                                        <h1 className={classes.paramsHeader}>
                                            Title for Products or {e.title}
                                        </h1>
                                    </div>
                                    <div className={classes.paramsImg}>
                                        <img src={e.url} alt="" />
                                    </div>
                                </div>
                            </div> 
                })
            }

            
        </div>
    );
}

export default mainParamsComponent;

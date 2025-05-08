import Date from "../../../../assets/images/icons/date";
import Money from "../../../../assets/images/icons/money";
import Rate from "../../../../assets/images/icons/rate";
import { useParamsCreditStyles } from "./params-credit.styles";

const ParamsCreditComponent = () => {
    const classes=useParamsCreditStyles()
    const data=[
        {
            id:1,
            header:"Kreditin məbləği  (AZN)",
            text:"Min. 5 000 - max. 500 000",
            category:"money"
        },
        {
            id:2,
            header:"Kreditin ilkin ödənişi (%)",
            text:"Min. 15",
            category:"rate"
        },
        {
            id:3,
            header:"Kreditin faiz dərəcəsi  (%)",
            text:"Min. 10",
            category:"rate"
        },
        {
            id:4,
            header:"Kreditin müddəti  (ay)",
            text:"Min. 6 - max. 120",
            category:"time"
        },
        {
            id:5,
            header:"Kreditin rəsmiləşdirilməsi üçünkomissiya haqqı  (%)",
            text:"Min.1",
            category:"rate"
        }
    ]

    const iconMap: { [key: string]:any } = {
        money: <Money />,
        rate: <Rate />,
        time: <Date />,

    };
    return (
        <div className={`centered-container container mx-auto ${classes.container} row `}>
            {
                data.map((e,key)=>{
                    return <div className={`${classes.box} col-12 col-sm-6 col-md-4 col-lg-4 p-3 p-20`} key={key}>
                        <div className={classes.svgDiv}>
                        {iconMap[e.category]}
                        </div>
                        
                            <h1 className={classes.header}>
                                {e.header}
                            </h1>
                            <span className={classes.span}>
                                {e.text}
                            </span>
                        
                        <hr  className={classes.line}/>
                    </div>
                })
            }
        </div>
    );
}

export default ParamsCreditComponent;

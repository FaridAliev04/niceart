import Finger from '../../../../assets/images/icons/finger';
import finger from '../../../../assets/images/statics/finger.png'
import { useStrategy } from './action/strategy.query';
import { useStrategyStyles } from './strategy.styles';
const StrategyComponent = () => {
    const classes=useStrategyStyles()

    // const data=[
    //     {
    //         id:1,
    //         header:"Title",
    //         text:"Pulvinar amet ullamcorper nec nullam accumsan, iaculis risus. Feugiat nulla in imperdiet tellus sit lobortis. Cursus adipiscing aliquam dignissim.",
    //         img:finger
    //     },
    //     {
    //         id:2,
    //         header:"Title",
    //         text:"Pulvinar amet ullamcorper nec nullam accumsan, iaculis risus. Feugiat nulla in imperdiet tellus sit lobortis. Cursus adipiscing aliquam dignissim.",
    //         img:finger
    //     }
    // ]
    const {data}=useStrategy()
    return (
        <div className={classes.container}>
            
            <div className={classes.strategyDiv}>
                <p className={classes.strategy}>
                Strategiyamız
                </p>
                <h1 className={classes.strategyHeader}>
                Id duis id turpis mi 
                quisque. Nulla.
                </h1>
            </div>
            <div className={classes.fingerDiv}>
                <div>
                </div>
                    <div className={classes.fingerMainDiv}>
                    {
                        data?.map((e:any,key:number)=>{
                            return <div className={classes.fingerBox} key={key}>
                                <div className={classes.imgDiv}>
                                    <img src={e.url} alt="" />
                                </div>
                                <p className={classes.dataHeader}>
                                    {e.title}
                                </p>
                                <p className={classes.dataText}>
                                    {e.description}
                                </p>
                            </div>
                        })
                    }

                    </div>
            </div>
        </div>
    );
}

export default StrategyComponent;

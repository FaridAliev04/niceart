import { useCallback } from 'react';
import finger from '../../../../assets/images/statics/finger.png'
import { useGoalStyles } from './goal.styles';
import { usePurposes } from './action/goal.query';
const GoalComponent = ({data}:any) => {
    const dataFind=useCallback((data?.find((e:any)=>e.id==8)),[data])

    const classes=useGoalStyles()
    // const datas =[
    //     {
    //         id:1,
    //         header:"Adipiscing phasellus orci in dictumst faucibus ullamcorper odio faucibus. Nunc.",
    //         text:"Malesuada tortor fringilla ut faucibus. Urna tellus lectus platea turpis non. Tellus odio eu ante ",
    //         img:finger
    //     },
    //     {
    //         id:2,
    //         header:"Adipiscing phasellus orci in dictumst faucibus ullamcorper odio faucibus. Nunc.",
    //         text:"Malesuada tortor fringilla ut faucibus. Urna tellus lectus platea turpis non. Tellus odio eu ante ",
    //         img:finger
    //     },
    //     {
    //         id:3,
    //         header:"Adipiscing phasellus orci in dictumst faucibus ullamcorper odio faucibus. Nunc.",
    //         text:"Malesuada tortor fringilla ut faucibus. Urna tellus lectus platea turpis non. Tellus odio eu ante ",
    //         img:finger
    //     }
    // ]
    const {data:purposes}=usePurposes()

    return (
        <div className={classes.container}>
            <div className={classes.goalDiv}>
                <p className={classes.goal}>
                {dataFind?.tag}
                </p>
                <h1 className={classes.goalHeader}>
                {dataFind?.heading}
                </h1>
                <p className={classes.goalText}>
                {dataFind?.description}
                </p>
            </div>

            <div className={classes.backgroundDiv}></div>
            <div className={classes.goalData}>
                {
                    purposes?.map((e:any,key:number)=>{
                        return <div className={e.id%2?classes.goalDataBox:classes.goalDataBoxPair} key={key}>
                            <div className={classes.goalImgDiv}>
                                <img className={classes.img}  src={e.url} alt="" />
                            </div>
                            <div className={classes.goalDataTextDiv}>
                                <h1 className={classes.goalDataHeader}>
                                    {e.title}
                                </h1>
                                <p className={classes.goalDataText}> 
                                    {e.description}
                                </p>
                            </div>
                        </div>
                    })
                }

            </div>
        </div>
    );
}

export default GoalComponent;

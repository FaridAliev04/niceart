import finger from '../../../../assets/images/statics/finger.png'
import { useGoalStyles } from './goal.styles';
const GoalComponent = () => {

    const classes=useGoalStyles()
    const data =[
        {
            id:1,
            header:"Adipiscing phasellus orci in dictumst faucibus ullamcorper odio faucibus. Nunc.",
            text:"Malesuada tortor fringilla ut faucibus. Urna tellus lectus platea turpis non. Tellus odio eu ante ",
            img:finger
        },
        {
            id:2,
            header:"Adipiscing phasellus orci in dictumst faucibus ullamcorper odio faucibus. Nunc.",
            text:"Malesuada tortor fringilla ut faucibus. Urna tellus lectus platea turpis non. Tellus odio eu ante ",
            img:finger
        },
        {
            id:3,
            header:"Adipiscing phasellus orci in dictumst faucibus ullamcorper odio faucibus. Nunc.",
            text:"Malesuada tortor fringilla ut faucibus. Urna tellus lectus platea turpis non. Tellus odio eu ante ",
            img:finger
        }
    ]
    return (
        <div className={classes.container}>
            <div className={classes.goalDiv}>
                <p className={classes.goal}>
                Məqsədimiz
                </p>
                <h1 className={classes.goalHeader}>
                Id duis id turpis mi 
                quisque. Nulla.
                </h1>
                <p className={classes.goalText}>
                Malesuada tortor fringilla ut faucibus. Urna tellus lectus platea turpis non. Tellus odio eu ante tincidunt vivamus nunc nibh arcu, augue. Egestas et amet neque placerat aliquam tempo
                </p>
            </div>

            <div className={classes.goalData}>
                {
                    data.map((e,key)=>{
                        return <div className={e.id%2?classes.goalDataBox:classes.goalDataBoxPair} key={key}>
                            <div className={classes.goalImgDiv}>
                                <img  src={e.img} alt="" />
                            </div>
                            <div className={classes.goalDataTextDiv}>
                                <h1 className={classes.goalDataHeader}>
                                    {e.header}
                                </h1>
                                <p className={classes.goalDataText}> 
                                    {e.text}
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

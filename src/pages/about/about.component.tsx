import { useAboutStyles } from './about.styles';
import AboutImgComoponent from './components/about-img/about-img.comoponent';
import AboutUsComponent from './components/about-us/about-us.component';
import GoalComponent from './components/goal/goal.component';
import MainAboutComponent from './components/main-about/main-about.component';
import StrategyComponent from './components/strategy/strategy.component';

const AboutComponent = () => {
    const classes=useAboutStyles()
    return (
        <div className={classes.container}>
            <MainAboutComponent/>
            <AboutUsComponent/>
            <AboutImgComoponent/>
            <GoalComponent/>
            <StrategyComponent/>
        </div>
    );
}

export default AboutComponent;

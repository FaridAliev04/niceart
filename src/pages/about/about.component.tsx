import { useLeads } from '../../core/shared/mainAction/action/leads.query';
import BreadcrumbComponent from '../../core/shared/breadcrumb/breadcrumb.component';
import AboutImgComoponent from './components/about-img/about-img.comoponent';
import AboutUsComponent from './components/about-us/about-us.component';
import GoalComponent from './components/goal/goal.component';
import MainAboutComponent from './components/main-about/main-about.component';
import StrategyComponent from './components/strategy/strategy.component';

const AboutComponent = () => {
    const {data}=useLeads()
    return (
        <div>
            {/* <MainAboutComponent/> */}
            <BreadcrumbComponent/>
            <AboutUsComponent data={data}/>
            <AboutImgComoponent/>
            <GoalComponent data={data}/>
            <StrategyComponent/>
        </div>
    );
}

export default AboutComponent;

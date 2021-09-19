import { Route, Switch } from "react-router-dom";

import Home from './pages/Home';

import CodingResources from './pages/LearnToCode/CodingResources';
import WhatsOn from './pages/LearnToCode/WhatsOn';

import OurProjects from './pages/HelpUsGrow/OurProjects';
import Volunteer from './pages/HelpUsGrow/Volunteer';

import OurMission from "./pages/OurMission";

import Unknown from "./pages/404";

const Main = () => {
    return (
        <Switch>
            <Route exact path ='/' component={Home}></Route>
            

            <Route exact path = '/coding-resources' component={CodingResources}></Route>
            <Route exact path = '/whats-on' component={WhatsOn}></Route>

            <Route exact path = '/our-projects' component={OurProjects}></Route>
            <Route exact path = '/volunteer' component={Volunteer}></Route>

            <Route exact path = '/our-mission' component={OurMission}></Route>
            
            <Route exact path = '*' component={Unknown}></Route>
        </Switch>
    )
}

export default Main;
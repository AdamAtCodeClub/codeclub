import { Route, Switch } from "react-router-dom";

import Home from './pages/Home';

import Coding_Resources from './pages/Learn_To_Code/Coding_Resources';
import Whats_On from './pages/Learn_To_Code/Whats_On';

import Our_Projects from './pages/Help_Us_Grow/Our_Projects';
import Volunteer from './pages/Help_Us_Grow/Volunteer';

import Our_Mission from "./pages/Our_Mission";

const Main = () => {
    return (
        <Switch>
            <Route exact path ='/' component={Home}></Route>

            <Route exact path = '/coding-resources' component={Coding_Resources}></Route>
            <Route exact path = '/whats-on' component={Whats_On}></Route>

            <Route exact path = '/our-projects' component={Our_Projects}></Route>
            <Route exact path = '/volunteer' component={Volunteer}></Route>

            <Route exact path = '/our-mission' component={Our_Mission}></Route>
        </Switch>
    )
}

export default Main;
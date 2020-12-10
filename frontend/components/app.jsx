import React from "react";
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import signinFormContainer from "./user_auth/signin_form_container";
import signupFormContainer from "./user_auth/signup_form_container";
import FrontPageContainer from "./front_page/front_page_container";
import MainPageContainer from "./main_page/main_page_container";
import ChannelPageContainer from './main_page/channels/channel_page_container';

const App = () => (
    <div>
        <Switch>
            <AuthRoute exact path="/signin" component={signinFormContainer} />
            <AuthRoute exact path="/signup" component={signupFormContainer} />
            {/* <ProtectedRoute exact path="/mainpage/channels/:channelId" component={mainPageContainer} /> */}
            <ProtectedRoute path='/channels/:channelId' component={ChannelPageContainer} />
            <ProtectedRoute exact path="/mainpage" component={MainPageContainer} />
            <Route exact path="/" component={FrontPageContainer} />
            {/* <Redirect to="/" /> */}
        </Switch>
    </div>
);

export default App;
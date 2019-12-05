import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import Navbar from "../Components/Navbar";
import SideBar from "../Components/SideBar";
import Dashboard from "../Views/Dashboard";

const Portal = () => {
    return (
        <div>
            <Navbar/>
            <div className="d-flex">
                <SideBar />
                <div id="content-wrapper" className="d-flex flex-column h100vh">
                    <div id="content">
                        <div className="container-fluid p-5">
                            <Switch>
                                <Redirect from="/" to="/dashboard" exact/>
                                <Route path="/dashboard" component={Dashboard} exact />
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Portal
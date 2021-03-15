import React, { useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { HeaderPage } from '../partials/header';
import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import {ProductAdd} from '../product/ProductAdd';
import {ProductEdit} from '../product/ProductEdit';
import {ProductView} from '../product/ProductView';

function App() {
    const alert = useSelector(state => state.alert);
    const dispatch = useDispatch();
   
    useEffect(() => {
        history.listen((location, action) => {  
            console.log(location);     
            dispatch(alertActions.clear());
        });
    }, []);

    return (
            <div className="container-fluid">
                <div className="row">
                    {alert.message &&
                    <div className="col-lg-8 offset-lg-2 text-center">
                        <div className={`alert ${alert.type}`}>{alert.message}</div>
                    </div>
                    }
                    
                    <HeaderPage></HeaderPage>
                    <Router history={history}>
                        <Switch>   
                            <PrivateRoute exact path="/" component={HomePage} />
                            <Route path="/login" component={LoginPage} />
                            <PrivateRoute  path="/product-add" component={ProductAdd}  />
                            <PrivateRoute  path="/product-view" component={ProductView}  />
                            <PrivateRoute path="/product-edit" component={ProductEdit} />
                            <Redirect from="*" to="/" />
                        </Switch>
                    </Router>

                </div>
            </div>
    );
}

export { App };
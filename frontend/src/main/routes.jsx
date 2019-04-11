import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'
import Dashboard2 from '../dashboard2/dashboard2'

export default props => (
    <div className='content-wrapper'>
        <Switch>
            <Route exact path='/' component={ Dashboard }/>
            <Route exact path='/dashboard2' component={ Dashboard2 }/>
            <Route exact path='/billingCycles' component={ BillingCycle }/>
            <Redirect from='*' to='/'/>
        </Switch>
    </div>
)
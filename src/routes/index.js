import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

// NOTE: here we're making use of the `resolve.root` configuration
// option in webpack, which allows us to specify import paths as if
// they were from the root of the ~/src directory. This makes it
// very easy to navigate to files regardless of how deeply nested
// your current file is.
import CoreLayout from 'layouts/CoreLayout/CoreLayout';
import HomeView from 'views/HomeView/HomeView';
import NotFoundView from 'views/NotFoundView/NotFoundView';
import CallView from 'views/CallView/CallView';
import PartnerView from 'views/PartnerView/PartnerView';
import PlotView from 'views/PlotView/PlotView';
import SummaryView from 'views/SummaryView/SummaryView';
import PlotDemo from 'components/plots/PlotDemo';

export default (store) => (
  <Route path='/' component={CoreLayout}>
    <IndexRoute component={HomeView} />
    <Route path='/partners' component={PartnerView} />
    <Route path='/calls' component={CallView} />
    <Route path='/404' component={NotFoundView} />
    <Route path='/plot/:plotType' component={PlotView} />
    <Route path='/demo' component={PlotDemo} />
    <Route path='/summary' component={SummaryView} />
    <Redirect from='*' to='/404' />
  </Route>
);

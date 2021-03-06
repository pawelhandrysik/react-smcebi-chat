import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NotFound from 'views/NotFound';
import Dashboard from 'views/Dashboard';
import Channels from 'views/Channels/Channels';
import ChannelNew from 'views/ChannelNew/ChannelNew';
import About from 'views/About';
import Profile from 'views/Profile/Profile';
import Login from 'views/Login/Login';
import Register from 'views/Register/Register';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const publicPath = '/';

export const routeCodes = {
  DASHBOARD: publicPath,
  CHANNELS: `${ publicPath }channels`,
  CHANNELS_NEW: `${ publicPath }new/channel`,
  ABOUT: `${ publicPath }about`,
  PROFILE: `${ publicPath }profile`,
  LOGIN: `${ publicPath }login`,
  REGISTER: `${ publicPath }register`,
};

const RouteLayout = ({ component, ...rest }) => {
  return (
    <div>
      <div className='content'>
        <Header />
        <div className='container'>
          <Route { ...rest } render={ () => React.createElement(component) } />
        </div>
      </div>
      <Footer />
    </div>
  );
};

const RouteWithoutLayout = ({ component, ...rest }) => {
  return (
    <div className='container'>
      <div className='Page'>
        <Route { ...rest } render={ () => React.createElement(component) } />
      </div>
    </div>
  );
};

export default () => (
  <Switch>
    <RouteLayout exact path={ publicPath } component={ Dashboard } />
    <RouteLayout path={ routeCodes.CHANNELS } component={ Channels } />
    <RouteLayout path={ routeCodes.CHANNELS_NEW } component={ ChannelNew } />
    <RouteLayout path={ routeCodes.ABOUT } component={ About } />
    <RouteLayout path={ routeCodes.PROFILE } component={ Profile } />
    <RouteWithoutLayout path={ routeCodes.LOGIN } component={ Login } />
    <RouteWithoutLayout path={ routeCodes.REGISTER } component={ Register } />
    <Route path='*' component={ NotFound } />
  </Switch>
);

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import HeaderHtml from 'containers/Header/Loadable';
import FooterHtml from 'containers/Footer/Loadable';
import UnlockHomePage from 'containers/UnlockHomePage/Loadable';
import UnlockStep1 from 'containers/UnlockStep1/Loadable';
import UnlockStep2 from 'containers/UnlockStep2/Loadable';
import UnlockStep3 from 'containers/UnlockStep3/Loadable';
import Confirmation from 'containers/Confirmation/Loadable';
import CheckStatus from 'containers/CheckStatus/Loadable';
import UnlockStatusPage from 'containers/UnlockStatusPage/Loadable';
import styles from './style.css';
import global from './global.css';
import styled from 'styled-components';
import DeviceRecPage from 'containers/DeviceRecPage/Loadable';
import DeviceRecPage2 from 'containers/DeviceRecPage2/Loadable';

const AppWrapper = styled.div`
  margin: 0 auto;
  padding: 0;
  margin:0;
`;

export default function App() {
  return (
    <div>
      <Helmet
        titleTemplate="%s - ATT Device Rec Page"
        defaultTitle="ATT Device Rec Page"
      >
        <meta name="description" content="Device Recommended Page" />
      </Helmet>
      <HeaderHtml />
      <Switch>
	  
	    <Route exact path="/" component={DeviceRecPage} />
        <Route  path="/unlock" component={UnlockHomePage} />
		 <Route  path="/drp" component={DeviceRecPage2} />
        <Route exact path="/unlockstep1" component={UnlockStep1} />
        <Route exact path="/unlockstep2" component={UnlockStep2} />
        <Route exact path="/unlockstep3" component={UnlockStep3} />
        <Route exact path="/confirmation" component={Confirmation} />
        <Route exact path="/checkstatus" component={CheckStatus} />
        <Route exact path="/statuspage" component={UnlockStatusPage} />
      </Switch>
      <FooterHtml />
    </div>
  );
}


import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { compose } from 'redux';
//import axios from 'axios-master';
import UserInfoSec from 'components/UserInfoSec';
import UserInfoSecJson from 'json/upgradingUserInfo.json';
import DeviceBrandFilter from 'components/DeviceBrandFilter';
import DeviceProductTiles from 'components/DeviceProductTiles2';
import Button from 'components/Button';
import {getRecommendedDevices} from 'services';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import { makeSelectDevicePage } from './selectors';
import { serviceCall } from './actions';
//console.log(getRecommendedDevices);
import { connect } from 'react-redux';
import reducers from './reducer';
const UserInfo = styled.div`
	background-color: #096fec;
`;
const Centr =styled.div`
text-align:center;
`;

export class DeviceRecPage extends React.PureComponent {


    state = {
        upgradeUser:[],
        ReceiveData:null,    
    }
 
    componentDidMount() {  
     
        this.setState({ upgradeUser : UserInfoSecJson.payload,
          ReceiveData:[]
        });  
      }
  
  render() {
    
    const { loading, error, repos } = this.props;
    const  reposListProps = {
      loading:false,
      error:false,
      repos:[],
    };
  //  this.props.onInitIngredients();
   

    return (
        <div>
     <div className="upUserInfoContainer ng-scope">
	 <UserInfo>
       <UserInfoSec {...this.state.upgradeUser}
       />
	 </UserInfo>
	 </div>
   
     <DeviceBrandFilter/>
     <DeviceProductTiles {...this.state.ReceiveData} />
     <Centr>
     <button className="btn btn-primary-functional">Show More</button>
     </Centr>
</div>
    );
  }
}


import PropTypes from 'prop-types';
DeviceRecPage.propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.bool,
    ]),
    repos: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.bool,
    ]),
    
  };
  
  
  function mapDispatchToProps(dispatch) {
    return dispatch(serviceCall(UserInfoSecJson.payload));
  //  return dispatch(unlockCustomerFormReducer(state,'SERVICE_CALL'));
  //  {
     // onInitIngredients: () => dispatch(serviceCall(UserInfoSecJson.payload));SERVICE_CALL
  //   dispatch(serviceCall);
   // }
    
  }
  const mapStateToProps = state => {
    return {
      ReceiveData: makeSelectDevicePage()
  };
  }
 
  const withConnect = connect(mapStateToProps, mapDispatchToProps);
  const withReducer = injectReducer({ key: 'devicerec', reducers });
  export default 
  compose( 
  withReducer,
  withConnect
)
 // connect(mapStateToProps, mapDispatchToProps)
  (DeviceRecPage);

//export default compose()(DeviceRecPage);

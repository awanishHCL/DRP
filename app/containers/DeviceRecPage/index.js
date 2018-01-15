import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { compose } from 'redux';
//import axios from 'axios-master';
import UserInfoSec from 'components/UserInfoSec';
import UserInfoSecJson from 'json/upgradingUserInfo.json';

import deviceRecommenderApi from 'json/rexResponse.json';




import DeviceBrandFilter from 'components/DeviceBrandFilter';
import DeviceProductTiles from 'components/DeviceProductTiles';
import Button from 'components/Button';



const UserInfo = styled.div`
	background-color: #096fec;
`;
const Centr =styled.div`
text-align:center;
`;

export class DeviceRecPage extends React.PureComponent {

    state = {
        upgradeUser:[],
        deviceRecommenderApi: []
    }
    
    
    componentDidMount() { 

      this.setState({ upgradeUser : UserInfoSecJson.payload,
      

      });  


      const rexBySkuServer='https://www.att.com/rex/recommendation/rexBySku/';
      fetch(rexBySkuServer+UserInfoSecJson.payload.deviceSkuId)
      .then(response => response.json())
      .then(json => {
        console.log('-----------json');
        console.log(json);
        this.setState({
          deviceRecommenderApi: json,
        });
      });


     
        
      /*  return <UserInfoSec data={posts} />;
          this.setState({ posts : UserInfoSecJson });  */
      }
  
  render() {
    const { loading, error, repos } = this.props;
    const reposListProps = {
      loading:false,
      error:false,
      repos:deviceRecommenderApi,
    };
    console.log('reposListProps--------------');    
    console.log(deviceRecommenderApi);
console.log(reposListProps);
    return (
        <div>
     <div className="upUserInfoContainer ng-scope">
	 <UserInfo>
     <UserInfoSec {...this.state.upgradeUser} />
	 </UserInfo>
	 </div>
     <DeviceBrandFilter/>
     <DeviceProductTiles 
     {...this.state.deviceRecommenderApi}
     
     />
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
export default compose()(DeviceRecPage);

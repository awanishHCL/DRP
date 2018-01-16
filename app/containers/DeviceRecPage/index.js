import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { compose } from 'redux';
//import axios from 'axios-master';
import UserInfoSec from 'components/UserInfoSec';
import UserInfoSecJson from 'json/upgradingUserInfo.json';
import {emitSelectedBrands,changeStateValue,getRexDevise,getItemPriceData,getXpressImagePath,getRexObservableData} from './actions';
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

var listItems=[];
var brandList=[];
var itemPrice;
	var commitmentTerms = [];
	var imgUrl = [];
	var totalDeviceRecommendations = [];
	var initDevicesLoaded = 6;
	var heroDeviceTileColorTheme;
	var devicesToBeDisplayed = [];
	var limitDevices = this.initDevicesLoaded;
  var selectedDevicesToFilter = [];
  var uniqueBrands=[];
  var selectedBrands=[];

export class DeviceRecPage extends React.PureComponent {

    state = {
        upgradeUser:[],
        deviceRecommenderApi: [],
        brand:[]
    }
    

    
    componentDidMount() { 

      this.setState({ upgradeUser : UserInfoSecJson.payload,
      

      });  

     
      const getDevicePriceDetails = function (rexDevices) {
console.log('inseide---------------------------')
        var x, skuids;
		totalDeviceRecommendations = rexDevices;
	//	heroDeviceTileColorTheme = this.deviceRecommenderService.getColorTheme(rexDevices[0].htmlColor);
	//	this.ref.detectChanges();

        skuids = totalDeviceRecommendations.map(function (item) {
            return item.skuId;
        }).join(',');
        console.log(skuids);
//Device Item Price Data
getItemPriceData(skuids)
  .then(response => response.json())
      .then(json => {
  var commitmentTerms = {};
  console.log(json);
   itemPrice = json.payload;
  //ref.detectChanges();

  for (let key in itemPrice) {
    var commitmentTerm = {name:"",leaseTotalMonths:"",deviceType:""};
      commitmentTerm.name = itemPrice[key].contractType;
      commitmentTerm.leaseTotalMonths = itemPrice[key].contractLength;
      commitmentTerm.deviceType = itemPrice[key].deviceType;
      commitmentTerms[key] = commitmentTerm;
      imgUrl[key] = getXpressImagePath(
              itemPrice[key].brand, null, itemPrice[key].shortDisplayName, itemPrice[key].color, '-hero.png');
  };
  commitmentTerms = commitmentTerms;
 // this.ref.detectChanges();
});

//Ends Device Item Price data

      }
      ///////////////////////
      getRexDevise(UserInfoSecJson.payload)
      .then(response => response.json())
      .then(json => {
        console.log('-----------json');
        console.log(json);
        this.setState({
          deviceRecommenderApi: json,
        });
        //passing responce to get price for each sku
    //    getDevicePriceDetails(json);
    var x, skuids;
		totalDeviceRecommendations = json;
	//	heroDeviceTileColorTheme = this.deviceRecommenderService.getColorTheme(rexDevices[0].htmlColor);
	//	this.ref.detectChanges();

        skuids = totalDeviceRecommendations.map(function (item) {
            return item.skuId;
        }).join(',');
   
//Device Item Price Data
getItemPriceData(skuids)
  .then(response => response.json())
      .then(json => {
  var commitmentTerms = {};
  console.log(json);
   itemPrice = json.payload;
  //ref.detectChanges();

  for (let key in itemPrice) {
    var commitmentTerm = {name:"",leaseTotalMonths:"",deviceType:""};
      commitmentTerm.name = itemPrice[key].contractType;
      commitmentTerm.leaseTotalMonths = itemPrice[key].contractLength;
      commitmentTerm.deviceType = itemPrice[key].deviceType;
      commitmentTerms[key] = commitmentTerm;
      imgUrl[key] = getXpressImagePath(
              itemPrice[key].brand, null, itemPrice[key].shortDisplayName, itemPrice[key].color, '-hero.png');
  };
  commitmentTerms = commitmentTerms;
 // this.ref.detectChanges();
/// creating filter brand


for(let key in this.state.deviceRecommenderApi) {
  if(uniqueBrands.indexOf(this.state.deviceRecommenderApi[key].brand) == -1) {
    uniqueBrands.push(this.state.deviceRecommenderApi[key].brand);
  }          
}
this.setState({brand:uniqueBrands});


brandList = this.state.brand.map(function(brand){

  return (
    
        <label  key={`item-${brand}`} className="checkbox device-filter-option ng-scope" aria-checked="false" 
    
        data-qa="deviceRecommender-DeviceRecommender-deviceFilterOptionLabel-Apple" >
        <span className="device-filter-option-text ng-binding"
         data-qa="deviceRecommender-DeviceRecommender-deviceFilterOptionText-Apple">{brand}</span>
         <input id={brand} type="checkbox" name={brand} value={brand} onChange={(event) => onChangeBrand({brand},event)} 
          className="ng-pristine ng-valid ng-empty ng-touched" /><i className="skin"></i></label>
         
  );

});



//creating product to display
listItems = this.state.deviceRecommenderApi.map(function(item) {
  // {'width': ((item.starRatings / 5 ) * 100) + '%'}
  // var width = {
  //   width: 'white',
  //   backgroundImage: 'url(' + imgUrl + ')',
  //   WebkitTransition: 'all', // note the capital 'W' here
  //   msTransition: 'all' // 'ms' is the only lowercase vendor prefix
  // };
  var width = {
    width: ((item.starRatings / 5 ) * 100) + '%'
  };


  return (
      
<div className="recommended-device span6 mH300" key={`item-${item.skuId}`}>
<div className="row span12 device-grid light-theme">
 <div className="span5 device-desc-grid mL20 no-pad">
     <div className="span12 block">
      <h4 className="device-make">{item.brand}</h4>
      </div>
      <div className="span12">
              <h1 className="device-model"> {item.model}</h1>
          </div>
          <div className="span12 starRatingContainer">
              <div className="starRating">
                  <div className="starBlock">
                      <div className="numOfStars" style={width}></div>
                  </div><span className="final-rating">{item.starRatings}</span></div>
          </div>
          <div className="clearfix"></div>
          <div className="span12">
              <h4 className="default-price-label">Starting at</h4>
          </div>
          <div className="span12">
              <h3 className="default-price-block"><span className="default-price">
              {itemPrice[item.skuId].defaultPrice}
              </span>
              </h3>
          </div>
          <div className="span12 p-small shortLegalContainer">
              <div>Retail price. Requires qualified service.</div><a href="">See price details</a></div>
      </div>
      <div className="span6 hero-device-img">
          <img alt="{item.model}" src={imgUrl[item.skuId]} />
      </div>
      </div> 
    </div>
  );
  
});
this.forceUpdate();
});

//Ends Device Item Price data
        

      

      });


     
        
      /*  return <UserInfoSec data={posts} />;
          this.setState({ posts : UserInfoSecJson });  */
    // onChangeBrand: (evt) => (changeStateValue(evt))
    const onChangeBrand = function(brand,event){
      // console.log(event.target.checked);
console.log(brand);
var selectedBrand=brand;
if(event.target.checked) {
 if(selectedBrands.indexOf(selectedBrand) == -1) {
   selectedBrands.push(selectedBrand);
   emitSelectedBrands(selectedBrands);
 }
}
else {
 if(selectedBrands.indexOf(selectedBrand) !== -1) {
   var brandIndex = selectedBrands.indexOf(selectedBrand);
   selectedBrands.splice(brandIndex, 1);
   emitSelectedBrands(selectedBrands);
 }
}

console.log({...this.props});

     }


      }
  
  render() {
    const { loading, error, repos } = this.props;
    const reposListProps = {
      loading:false,
      error:false,
      repos:deviceRecommenderApi,
      onChangeBrand:''
    };
  


    return (
        <div>
     <div className="upUserInfoContainer ng-scope">
	 <UserInfo>
     <UserInfoSec {...this.state.upgradeUser} />
	 </UserInfo>
	 </div>
     {/* <DeviceBrandFilter {...this.state.brand}/> */}
     <div className="container device-filter-container">
    <div className="device-filter" >
        <div className="device-filter-header"><button className="device-filter-label">Filter by brand<span></span><i className="device-filter-arrow" aria-label="show brands"></i></button>
            <button className="device-filter-clear" tabIndex="0"></button>
        </div>
        <hr className="device-filter-hairline"/>
        <div className="device-filter-body">
        <div className="">
     {brandList}
     </div>
     </div>
     </div>
     </div>
     <div className="container device-container" >
            <div className="row recommended-device-row">
     {listItems}
     </div>
     </div>
     {/* <DeviceProductTiles 
{...this.state.deviceRecommenderApi}
/>; */}
     <Centr>
     <button className="btn btn-primary-functional">Show More</button>
     </Centr>
</div>
    );
  }
}
import PropTypes from 'prop-types';
import { mapStateOnServer } from 'react-helmet/lib/HelmetUtils';
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
    onChangeBrand:PropTypes.func,
  };
export default compose()(DeviceRecPage);

import React from 'react';


import * as DeviceRecommenderService from '../../services';
//import { DeviceRecommenderService1 } from '../services';


console.log('DeviceRecommenderService');

let x=DeviceRecommenderService;

console.log(x);
console.log(DeviceRecommenderService);
//console.log(DeviceRecommenderService1);

let itemPrice=0;
let commitmentTerms = [];
let imgUrl = [];
let totalDeviceRecommendations = [];
let initDevicesLoaded = 6;
let heroDeviceTileColorTheme='';
let devicesToBeDisplayed = [];
let limitDevices = this.initDevicesLoaded;

let deviceRecommenderService= DeviceRecommenderService;
	

	 const viewMoreDevices = function(initDevicesLoaded) {
		limitDevices = initDevicesLoaded + initDevicesLoaded;
		var tempArr =  totalDeviceRecommendations.slice(initDevicesLoaded, limitDevices);
		devicesToBeDisplayed = devicesToBeDisplayed.concat(tempArr);
		ref.detectChanges();
	};

	 const getDevicePriceDetails = function (rexDevices) {

        var x, skuids;
		totalDeviceRecommendations = rexDevices;
		heroDeviceTileColorTheme = deviceRecommenderService.getColorTheme(rexDevices[0].htmlColor);
		//ref.detectChanges();

        skuids = totalDeviceRecommendations.map(function (item) {
            return item.skuId;
        }).join(',');

        deviceRecommenderService.getItemPriceData(skuids).subscribe((result) => {
            var commitmentTerms = {};
            this.itemPrice = result.payload;
            this.ref.detectChanges();

            for (let key in this.itemPrice) {
            	var commitmentTerm = {name:"",leaseTotalMonths:"",deviceType:""};
                commitmentTerm.name = this.itemPrice[key].contractType;
                commitmentTerm.leaseTotalMonths = this.itemPrice[key].contractLength;
                commitmentTerm.deviceType = this.itemPrice[key].deviceType;
                commitmentTerms[key] = commitmentTerm;
                this.imgUrl[key] = this.deviceRecommenderService.getXpressImagePath(
                        this.itemPrice[key].brand, null, this.itemPrice[key].shortDisplayName, this.itemPrice[key].color, '-hero.png');
            };
            this.commitmentTerms = commitmentTerms;
           // this.ref.detectChanges();

            // this.fetchShortLegalContentForDevices(this.commitmentTerms); TODO
        });
	};



   

   /*
    DeviceRecommenderService.getUpgradingDeviceDetailsData.call( 
        	(data) => {
                alert(1);
        		this.deviceRecommenderService.getRecommendedDevices(data.payload).subscribe( 
                    recommendedDevices => {
                    	if(recommendedDevices == undefined || !recommendedDevices) {
                    		this.deviceRecommenderService.getRecommendationsFromCatalog().subscribe( 
                    			(recommendedDevicesFromCatalog) => {
									this.devicesToBeDisplayed = recommendedDevicesFromCatalog.slice(0,this.initDevicesLoaded);
		                    		this.getDevicePriceDetails(recommendedDevicesFromCatalog);
                    			}
                    		);
                    	} else {
							this.devicesToBeDisplayed = recommendedDevices.slice(0,this.initDevicesLoaded);
							this.getDevicePriceDetails(recommendedDevices);
						}
		            },
				    err => {
				      	console.log('Something went wrong!');
				      	this.deviceRecommenderService.getRecommendationsFromCatalog().subscribe( 
            				(recommendedDevicesFromCatalog) => {
								this.devicesToBeDisplayed = recommendedDevicesFromCatalog.slice(0,this.initDevicesLoaded);
								this.getDevicePriceDetails(recommendedDevicesFromCatalog.payload);
            				}
            			);
				    }
		        );
    		}
    	);
    */
    import PropTypes from 'prop-types';
    function DeviceProductTiles(repos) {
        var listItems=1;

        if(repos && repos.length>0){
     listItems = repos.map(function(item) {
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
                                <div className="numOfStars"></div>
                            </div><span className="final-rating">{item.starRatings}</span></div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="span12">
                        <h4 className="default-price-label">Starting at</h4>
                    </div>
                    <div className="span12">
                        <h3 className="default-price-block"><span className="default-price">0.00</span>
                        </h3>
                    </div>
                    <div className="span12 p-small shortLegalContainer">
                        <div>Retail price. Requires qualified service.</div><a href="">See price details</a></div>
                </div>
                <div className="span6 hero-device-img">
                    <img alt="{item.model}" src={item.imageUrlHiRes} />
                </div>
                </div> 
              </div>
            );
           
          });
        }
        return (
            <div className="container device-container" >
            <div className="row recommended-device-row">
                {listItems}
              </div>
              </div>
          )
        console.log(repos);
      //  this.forceUpdate();
        console.log('---this');
        //return null;
      }
    
    //   const DeviceProductTiles = (props) => (

    //    <div>
          
    //    </div>
        
    //           );



DeviceProductTiles.propTypes = {
loading: PropTypes.bool,
error: PropTypes.any,
repos: PropTypes.any,
};


    const DeviceProductTiles1 = (props) => (

<div className="container device-container" >
<div className="row recommended-device-row">
   <div className="recommended-device span6 mH300">
       <div className="row span12 device-grid light-theme">
           <div className="span5 device-desc-grid mL20 no-pad">
               <div className="span12 block">
                   <h4 className="device-make">Samsung</h4>
               </div>
               <div className="span12">
                   <h1 className="device-model"> Gear S3 classic</h1>
               </div>
               <div className="span12 starRatingContainer">
                   <div className="starRating">
                       <div className="starBlock">
                           <div className="numOfStars">5</div>
                       </div><span className="final-rating">4.5</span></div>
               </div>
               <div className="clearfix"></div>
               <div className="span12">
                   <h4 className="default-price-label">Starting at</h4>
               </div>
               <div className="span12">
                   <h3 className="default-price-block"><span className="default-price">$349.99</span>
                   </h3>
               </div>
               <div className="span12 p-small shortLegalContainer">
                   <div>Retail price. Requires qualified service.</div><a href="">See price details</a></div>
           </div>
           <div className="span6 hero-device-img"><img alt="Samsung Gear S3 classic"  src="https://www.att.com/catalog/en/xpress/Samsung/Samsung Gear S3 classic/Silver-hero.png"/></div>
       </div>
   </div>
   <div className="recommended-device span6 mH300 ng-scope">
       <div className="row span12 device-grid">
           <div className="span5 device-img"><img alt="Samsung Gear S2" src="https://www.att.com/catalog/en/xpress/Samsung/Samsung Gear S2/Dark Gray-hero.png"/></div>
           <div className="span7 device-desc-grid">
               <div className="ribbon-div ribbon purple-white-ribbon">
                   <div className="sub-ribbon">
                       <div>ONLINE DEAL</div>
                   </div>
               </div>
               <div className="span12 block">
                   <h4 className="device-make">Samsung</h4>
               </div>
               <div className="span12">
                   <h1 className="device-model"> Gear S2</h1>
               </div>
               <div className="span12 starRatingContainer ng-scope">
                   <div className="starRating">
                       <div className="starBlock">
                           <div className="numOfStars" ></div>
                       </div><span className="final-rating">4.4</span></div>
               </div>
               <div className="clearfix"></div>
               <div className="span12">
                   <h4 className="default-price-label">Starting at</h4>
               </div>
               <div className="span12">
                   <h3 className="default-price-block"><span className="default-price">$299.99</span>
                   </h3>
               </div>
               <div className="span12 p-small shortLegalContainer">
                   <div>Retail price. Requires qualified service.</div><a href="">See price details</a></div>
           </div>
       </div>
   </div>
</div>

</div>
);

export default DeviceProductTiles;

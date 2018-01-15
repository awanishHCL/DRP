import React from 'react';

function DeviceBrandFilter() {
    return (
        <div className="container device-filter-container">
    <div className="device-filter" >
        <div className="device-filter-header"><button className="device-filter-label">Filter by brand<span></span><i className="device-filter-arrow" aria-label="show brands"></i></button>
            <button className="device-filter-clear" tabIndex="0"></button>
        </div>
        <hr className="device-filter-hairline"/>
        <div className="device-filter-body">
        <div className="">
        <label className="checkbox device-filter-option ng-scope" aria-checked="false" 
    
        data-qa="deviceRecommender-DeviceRecommender-deviceFilterOptionLabel-Apple" >
        <span className="device-filter-option-text ng-binding"
         data-qa="deviceRecommender-DeviceRecommender-deviceFilterOptionText-Apple">Apple</span>
         <input id="Apple" type="checkbox" 
          data-qa="deviceRecommender-DeviceRecommender-deviceFilterOptionCheckBox-Apple"
          className="ng-pristine ng-valid ng-empty ng-touched" /><i className="skin"></i></label>
           <label className="checkbox device-filter-option ng-scope"  aria-checked="false" 
           
           data-qa="deviceRecommender-DeviceRecommender-deviceFilterOptionLabel-Samsung">
           <span className="device-filter-option-text ng-binding"
            data-qa="deviceRecommender-DeviceRecommender-deviceFilterOptionText-Samsung">Samsung</span>
            <input id="Samsung" type="checkbox" 
             data-qa="deviceRecommender-DeviceRecommender-deviceFilterOptionCheckBox-Samsung" 
             className="ng-pristine ng-untouched ng-valid ng-empty"/><i className="skin"></i></label>
           
             <label className="checkbox device-filter-option ng-scope" aria-checked="false" 
            
              data-qa="deviceRecommender-DeviceRecommender-deviceFilterOptionLabel-LG">
              <span className="device-filter-option-text ng-binding" 
              data-qa="deviceRecommender-DeviceRecommender-deviceFilterOptionText-LG">LG</span>
              <input id="LG" type="checkbox" 
               className="ng-pristine ng-untouched ng-valid ng-empty"/><i className="skin"></i></label>

<label className="checkbox device-filter-option ng-scope"  aria-checked="false">
<span className="device-filter-option-text ng-binding" 
data-qa="deviceRecommender-DeviceRecommender-deviceFilterOptionText-AT&amp;T">AT&amp;T</span>
<input id="AT&amp;T" type="checkbox" data-qa="deviceRecommender-DeviceRecommender--AT&amp;T" 
className="ng-pristine ng-untouched ng-valid ng-empty"/><i className="skin"></i></label>
<label className="checkbox device-filter-option ng-scope"  aria-checked="false" 
 data-qa="deviceRecommender-DeviceRecommender-deviceFilterOptionLabel-BlackBerry">
 <span className="device-filter-option-text ng-binding" 
 data-qa="deviceRecommender-DeviceRecommender-deviceFilterOptionText-BlackBerry">BlackBerry</span>
 <input id="BlackBerry" type="checkbox"  data-qa="-BlackBerry" className="ng-pristin ng-valid ng-empty"/>
 <i className="skin"></i></label><label className="checkbox device-filter-option ng-scope" 
 aria-checked="false"><span className="device-filter-option-text ng-binding" 
 data-qa="deviceRecommender-DeviceRecommender-deviceFilterOptionText-Kyocera">Kyocera</span>
 <input id="Kyocera" type="checkbox" 
 data-qa="deviceRecommender-DeviceRecommender-deviceFilterOptionCheckBox-Kyocera" 
 className="ng-pristine ng-untouched ng-valid ng-empty"/><i className="skin"></i>
 </label><label className="checkbox device-filter-option ng-scope" 
 aria-checked="false" data-qa="deviceRecommender-DeviceRecommender-deviceFilterOptionLabel-Motorola">
 <span className="device-filter-option-text ng-binding" 
 data-qa="deviceRecommender-DeviceRecommender-deviceFilterOptionText-Motorola">Motorola</span>
 <input id="Motorola" type="checkbox" 
 data-qa="deviceRecommender-DeviceRecommender-deviceFilterOptionCheckBox-Motorola"
  className="ng-pristine ng-untouched ng-valid ng-empty"/><i className="skin"></i></label>
  <label className="checkbox device-filter-option ng-scope" aria-checked="false" data-qa="deviceRecommender-DeviceRecommender-deviceFilterOptionLabel-Sonim">
  <span className="device-filter-option-text ng-binding" data-qa="deviceRecommender-DeviceRecommender-deviceFilterOptionText-Sonim">Sonim</span>
  <input id="Sonim" type="checkbox" data-qa="deviceRecommender-DeviceRecommender-deviceFilterOptionCheckBox-Sonim" className="ng-pristine ng-untouched ng-valid ng-empty"/>
  <i className="skin"></i></label>
  <label className="checkbox device-filter-option" aria-checked="false" 
   data-qa="deviceRecommender-DeviceRecommender-deviceFilterOptionLabel-ZTE">
   <span className="device-filter-option-text ng-binding">ZTE</span>
   <input id="ZTE" type="checkbox" className="ng-pristine ng-untouched ng-valid ng-empty"/><i className="skin"></i></label>
               </div>



         </div>
    </div>
    </div>
    );
  }

export default DeviceBrandFilter;

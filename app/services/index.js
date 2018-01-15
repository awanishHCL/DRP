import React from 'react';
//import axios from 'axios-master';

const baseUrl = 'https://www.att.com/';
//const upgradingUserApiUrl = 'json/upgradingUserInfo.json';
//const catalogRexResponse = 'json/recommended-devices.json';
//const deviceRecommenderApi = 'json/rexResponse.json';
const deviceImageUrlRoot = 'https://www.att.com/catalog/en/xpress/'
//const devicePriceApiResponse = 'json/devicePriceApiResponse.json';

import UserInfoSecJson from 'json/upgradingUserInfo.json';
import upgradingUserApiUrl from 'json/upgradingUserInfo.json';
//import catalogRexResponse from 'json/recommended-devices.json';
import deviceRecommenderApi from 'json/rexResponse.json';
//import devicePriceApiResponse from 'json/devicePriceApiResponse.json';

const rexBySkuServer='https://www.att.com/rex/recommendation/rexBySku/';


console.log('------------');

console.log(UserInfoSecJson);


const colorMatrix = [
  '#000000',
  '#5C5A5A',
  '#C14242',
  '#D2CCB5',
  '#8482A3',
  '#6E91AF',
  '#354D28',
  '#F1E0CC'
];



export const getRecommendedDevices = function (upgradingDeviceDetails) {
  var rex = rexBySkuServer+upgradingDeviceDetails.deviceSkuId,
      params = createParams(upgradingDeviceDetails);

      return rex;
};

const createParams = function (upgradingDeviceDetails) {
  var params = {
      params: {
          profile: 'DeviceUpgrade',
          filter: ['type:device', 'type:displayByGrp'],
          exclude: ['type:removeDuplicateSibling', 'flowTypes:up'],
          plancode: upgradingDeviceDetails && upgradingDeviceDetails.planSocCode ? upgradingDeviceDetails.planSocCode : null,
          sdgid:  upgradingDeviceDetails && upgradingDeviceDetails.sharedDataGroupSocCode ? upgradingDeviceDetails.sharedDataGroupSocCode : null,
          // REX needs this flag to expose special flair flags for each recommendation
          showDisplayContent: 'true'
      },
      timeout: 2000,
      spinner: true
  };
  return params;
};



const getRecommendationsFromCatalog = function () {
return this.http.get(this.catalogRexResponse, {});
};




export default {
    UserInfoSecJson: (cb) => setTimeout(() => cb(UserInfoSecJson)),
    getProducts: (cb, timeout) => setTimeout(() => cb(UserInfoSecJson), timeout || TIMEOUT),
  /*  buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT) */
  }



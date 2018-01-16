/*
 *
 * Pageload actions
 *
 */
export const CREATE_POST = 'CREATE_POST';
export const CHANGE_STATE_VALUE = 'CHANGE_STATE_VALUE';



///////////////////////////
import shop from 'services';
//import * as types from '../constants/ActionTypes'
const receiveProducts = products => ({
  type: CREATE_POST,
  products
})

export const getAllProducts = () => dispatch => {
  shop.getProducts(products => {
    dispatch(receiveProducts(products))
  })
}

export function changeStateValue(value) {

console.log(value);
alert(1);


  return {
    type: CHANGE_STATE_VALUE,
    name,
    value,
  };
}
const rexBySkuServer='https://www.att.com/rex/recommendation/rexBySku/';
export function getRexDevise(data) {
  return fetch(rexBySkuServer+data.deviceSkuId, {
    method: 'GET',
  },
);
}

const devicePriceApiResponse='https://www.att.com/services/shopwireless/model/att/ecom/api/CatalogServiceController/catalogService';
export function getItemPriceData(skuId) {

  return fetch(devicePriceApiResponse+'?actionType=getskuprices&skuId='+skuId, {
        method: 'GET',
        // params: {
        //     actionType: 'getskuprices',
        //     skuId: skuId
        // }
    });
  }

  const deviceImageUrlRoot = 'https://www.att.com/catalog/en/xpress/';
  export function getXpressImagePath (manufacturer, shortDisplayName, displayName, color, extension) {
    var manufacturerClean = getCleanString(manufacturer);
    var nameClean = getCleanString(shortDisplayName || displayName);
    var colorClean = getCleanString(color);

    return deviceImageUrlRoot
        + manufacturerClean + '/'
        + nameClean + '/'
        + colorClean + extension;
};

const getCleanString = function(dirty) {
  var anythingThatDoesntMatch = /[^0-9a-zA-Z&+_ -]/g;
  var leadingAndTrailingSpaces = /^\s+|\s+$/g;
  var replacement = '_';
  var nothing = '';
  var clean;

  clean = dirty || 'unknown';
  clean = clean.replace(anythingThatDoesntMatch, replacement);
  clean = clean.replace(leadingAndTrailingSpaces, nothing);

  return clean;
}

export function getRexObservableData(rexDevices) {
  return rexDevices;
};
import * as Rx from 'rxjs';
var selectedDeviceBrands = new Rx.Subject();

export function emitSelectedBrands (selectedBrands) {
  selectedDeviceBrands.next(selectedBrands);
};
export function getSelectedBrandsToFilter() {
  return selectedDeviceBrands;
};



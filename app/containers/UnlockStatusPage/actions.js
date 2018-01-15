/*
 *
 * CheckStatus actions
 *
 */

import {
  DEFAULT_ACTION,
  CHANGE_IMEI,
} from './constants';


export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function changeImei(imei) {
  return {
    type: CHANGE_IMEI,
    imei,
  };
}

export function changeUnlockNumber(unlocknumber) {
  return {
    type: CHANGE_UNLOCKNUMBER,
    unlocknumber,
  };
}


/*
 *
 * confirmation actions
 *
 */

export const CREATE_POST = 'CREATE_POST';


export function getOrderStatus() {
  return fetch('../../endpoint/confirmation.json', {
    method: 'GET',
  },
);
}


/* eslint-disable */
import axios from 'axios';

export function Eosdata(value) {
  return new Promise((resolve, reject) => {
    axios
      .post('https://api.eosn.io/v1/chain/get_account', value)
      .then(json => {
        resolve(json);
      })
      .catch(err => reject(err));
  });
}

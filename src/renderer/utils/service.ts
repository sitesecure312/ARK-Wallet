import axios from 'axios';

export function getTransaction(val:String, cb_transaction:Function, cb_balance:Function){
    let result_data;
    axios.get('https://dwallets.ark.io/api/wallets/'+ val.toString() +'/transactions?page=1&limit=15').then(function (response) {
        result_data = response.data.data;
        cb_transaction(result_data);
    });
    axios.get('https://dwallets.ark.io/api/wallets/'+ val.toString()).then(function (response) {
        result_data = response.data.data.balance;
        cb_balance(result_data.toString());
    });
}


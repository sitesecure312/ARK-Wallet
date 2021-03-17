import React  from "react"; 
import './table.css';
import Txid from '-!react-svg-loader!../../../assets/icons/txid.svg';

interface CustomInterface {
  id: String,
  sender: String,
  recipient: String,
  timestamp: String,
  amount: String,
  fee: String
}

type Props = {
  data?: Array<CustomInterface>,
  user: String
}

const link = "https://dexplorer.ark.io/wallets/";

export function TxTable({data, user}: Props) {

  function handleOverflow(data: String) {
    if(data.length < 34) {
      if(data.length < 10) return data;
      else return data.slice(0, 9) + "...";
    }

    return data.replace(/(^.{6})(.*)(.{5}$)/i, function(a:String, b:String, c:String, d:String) {
      return b.toString() + "..." + d.toString();
    });
  }

  return (
    <div>
      <div className="tx_table big">
        <div className="tx_thead">
          <div className="tx_tr">
            <p className="tx_id tx_th left20">Txid</p>
            <p className="tx_sender tx_th border_left_none left20">Sender</p>
            <p className="tx_recip tx_th border_left_none left20">Recipient</p>
            <p className="tx_timestamp tx_th border_left_none left20">Timestamp</p>
            <p className="tx_amount tx_th border_left_none right20">Amount</p>
            <p className="tx_fee tx_th border_left_none right20">Fee</p>
          </div>
        </div>
        <div className="tx_tbody">
          {data ? data.map(function(each, index){
            return(
            <div key={index} className={`tx_tr ${index? "border_top": ""}`}>
              <div className="tx_id tx_td left21 large" style={{color: "#029383"}}><a href={link.toString() + user.toString()} target="_blank" rel="noopener noreferrer">{handleOverflow(each.id)}</a></div>
              <span className="tx_id tx_td left21 medium" style={{color: "#029383"}}><div className="txid_img"><a href={link.toString() + user.toString()} target="_blank" rel="noopener noreferrer"><Txid /></a></div></span>
              <div className="tx_sender tx_td border_left left21" style={(each.sender == user) ? {color: "#029383"} : {color: "inherit"}}>{(each.sender == user) ? <a href={link.toString() + user.toString()} target="_blank" rel="noopener noreferrer">{handleOverflow(each.sender)}</a> : handleOverflow(each.sender)}</div>
              <div className="tx_recip tx_td border_left left21" style={(each.recipient == user) ? {color: "#029383"} : {color: "inherit"}}>{(each.recipient == user) ? <a href={link.toString() + user.toString()} target="_blank" rel="noopener noreferrer">{handleOverflow(each.recipient)}</a> : handleOverflow(each.recipient)}</div>
              <div className="tx_timestamp tx_td border_left left21">{each.timestamp}</div>
              <div className="tx_amount tx_td border_left right21">{each.amount}</div>
              <div className="tx_fee tx_td border_left right21">{each.fee}</div>
            </div>
            );
          }) :  
            <div className="warning">
              <p>No data</p>
            </div>
          }
        </div>
      </div>
      <div className="tx_table small">
        {data ? data.map(function(each, index){
          return(
            <div key={index} className={`tx_tr_small ${index? "border_top": ""}`}>
              <div className="tx_td_small">
                <p className="td_index">Txid</p>
                <p className="td_value" style={{color: "#029383"}}><a href={link.toString() + user.toString()} target="_blank" rel="noopener noreferrer">{handleOverflow(each.id)}</a></p>
              </div>
              <div className="tx_td_small">
                <p className="td_index">Sender</p>
                <p className="td_value b640" style={(each.sender == user) ? {color: "#029383"} : {color: "inherit"}}>{(each.sender == user) ? <a href={link.toString() + user.toString()} target="_blank" rel="noopener noreferrer">{each.sender}</a> : each.sender}</p>
                <p className="td_value s640" style={(each.sender == user) ? {color: "#029383"} : {color: "inherit"}}>{(each.sender == user) ? <a href={link.toString() + user.toString()} target="_blank" rel="noopener noreferrer">{handleOverflow(each.sender)}</a> : handleOverflow(each.sender)}</p>
              </div>
              <div className="tx_td_small">
                <p className="td_index">Recipient</p>
                <p className="td_value b640" style={(each.recipient == user) ? {color: "#029383"} : {color: "inherit"}}>{(each.recipient == user) ? <a href={link.toString() + user.toString()} target="_blank" rel="noopener noreferrer">{each.recipient}</a> : each.recipient}</p>
                <p className="td_value s640" style={(each.recipient == user) ? {color: "#029383"} : {color: "inherit"}}>{(each.recipient == user) ? <a href={link.toString() + user.toString()} target="_blank" rel="noopener noreferrer">{handleOverflow(each.recipient)}</a> : handleOverflow(each.recipient)}</p>
              </div>
              <div className="tx_td_small">
                <p className="td_index">Timestamp</p>
                <p className="td_value">{each.timestamp}</p>
              </div>
              <div className="tx_td_small">
                <p className="td_index">Amount</p>
                <p className="td_value">{each.amount}</p>
              </div>
              <div className="tx_td_small">
                <p className="td_index">Fee</p>
                <p className="td_value">{each.fee}</p>
              </div>
            </div>
          )
        }) :  
          <div className="warning">
            <p>No data</p>
          </div>
        }
      </div>
    </div>
  );
} 
import React, {useState, useEffect} from "react";
import Header from './home/header/Header';
import Loading from './home/loading/Loading';
import {TxTable} from './home/content/txTable';
import Footer from './home/footer/Footer';
import {getTransaction} from '../utils/service';
import {default as address} from '../utils/address.json';
import {InputFee} from './home/content/inputFee';

interface ResponseModel {
    id: String,
    sender: String,
    recipient: String,
    timestamp: {human: String},
    amount: String,
    fee: String
}
interface TableModel {
    id: String,
    sender: String,
    recipient: String,
    timestamp: String,
    amount: String,
    fee: String
}

export function App () {
    const [transaction, setTransaction] = useState<Array<TableModel>>([]);
    const [selected, setSelected] = useState('');
    const [loading, setLoading] = useState(false);
    const [balance, setBalance] = useState('0');

    useEffect(() => {
        setSelected(address[0]);
        setLoading(false);
        getTransaction(address[0], function(content:Array<ResponseModel>){
            const data = [];
            for(let i = 0; i < content.length; i++) {
                data.push({id: content[i].id.toString(), 
                    sender: content[i].sender.toString(), 
                    recipient: content[i].recipient.toString(), 
                    timestamp: content[i].timestamp.human.slice(0,10).split('-').reverse().join('.'), 
                    amount: content[i].amount.toString() + " DARK", 
                    fee: content[i].fee.toString() + " DARK"});
            }
            setTransaction(data);
            setLoading(true);
        }, function(balance: string){
            setBalance(balance.toString());
        });
    }, []);

    const changeAddress = (address: String) => {
        setSelected(address.toString());
        setLoading(false);
        getTransaction(address, function(content:Array<ResponseModel>){
            const data = [];
            for(let i = 0; i < content.length; i++) {
                data.push({id: content[i].id.toString(), 
                    sender: content[i].sender.toString(), 
                    recipient: content[i].recipient.toString(), 
                    timestamp: content[i].timestamp.human.slice(0,10).split('-').reverse().join('.'), 
                    amount: content[i].amount.toString() + " DARK", 
                    fee: content[i].fee.toString() + " DARK"});
            }
            setTransaction(data);
            setLoading(true);
        }, function(balance: string){
            setBalance(balance.toString());
        });
    }

    return (
        <div className="mx-auto">
            <Header address={address} changeAddress={changeAddress} balance={balance} />
            {loading && (transaction.length ? <TxTable user={selected} data={transaction} /> : <TxTable user={selected} />)}
            {!loading && <div style={{width:'100%',margin:'auto'}}><Loading /></div>}
            {loading && <Footer />}
            {loading && <div>
                            <br />
                            <br />
                            <hr />
                            <h1 style={{fontSize:'40px',textAlign:'center'}}>Task 2</h1>
                            <div style={{margin:'auto', display:'flex',justifyContent:'center'}}>
                                <InputFee    />
                            </div>
                        </div>
            }
            
            
        </div>
    );
}

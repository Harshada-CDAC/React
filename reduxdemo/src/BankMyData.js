import React from 'react';
import {legacy_createStore} from 'redux';

function BankMyData(props) {

    //reducer
    const defoultState=0
    const balenceReducer=(state=defoultState,action)=>{
    console.log("action",action)

        switch(action.type){
            case "Deposit":
                return state+1000

            case "Withdrow":
                return state-1000
        }
    }

    //Store
const store=legacy_createStore(balenceReducer)
const withdrow=()=>{
    console.log(store.getState())
    store.dispatch({type:'Withdrow'})
}

const deposit=()=>{
    console.log(store.getState())
    store.dispatch({type:'Deposit'})
}

    return (
        <div>
            <button onClick={withdrow}>Withdraw</button>
            <button onClick={deposit}>Deposit</button>

        </div>
    );

 }
export default BankMyData;
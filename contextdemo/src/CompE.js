import React,{useContext} from 'react';
import { UseConsumer } from './userContext';
import CompF from './CompF';
 
function CompE(props) {
    const data=useContext(UseConsumer)
    return (
        <div>
            {data}
            {/* <CompF></CompF> */}
        </div>
    );
}
 
export default CompE;
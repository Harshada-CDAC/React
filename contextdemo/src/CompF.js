import React from 'react';
import { UseConsumer } from './userContext';
 
function CompF(props) {
    return (
        <div>
             {/* <UseConsumer>
            {
                (userName)=>{
                    return <div>Hello {userName}</div>
                }
            }
            </UseConsumer>   */}
 
            <UseConsumer>
                {
 
                (myName)=>{
                        return <div> Hello {myName[0].name}</div>
                }
            }
            </UseConsumer>
        </div>
    );
}
 
export default CompF;
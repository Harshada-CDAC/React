import React, { Component } from 'react';

class ConditionalRendering extends Component {
    constructor()
    {
        super()
        this.state={
            isLoggedIn:true
        }
    }
    render() {
        
            //1
//             if(this.state.isLoggedIn){
//                 return(
//             <div>
//                 <div>Welcome Harsha</div>
//             </div>
//         );
//     }
//     else{
//         return(
//             <div>
//             <div>Welcome Student</div>
//             </div>
//         );
//     }

// }
// }



//2

// let message;
// if(this.state.isLoggedIn){
//     message=<div>Welcome Harsha</div>
// }
// else{
//     message=<div>Welcome Student</div>
// }

// return message
//     }
// }


//3
// return(this.state.isLoggedIn ? <div>Welcome Frds</div>:<div>welcome guest</div>)
//     }
// }

//4
return this.state.isLoggedIn && <div>Welcome frds</div>
    }
}
export default ConditionalRendering;
import React, { Component } from 'react';

class JSXDemo extends Component {
    render() {
        //With JSX

        // return (
        //     <div>
        //         Hii
        //     </div>
        // );

        //Without JSX
        return React.createElement('div',null,'hii')
    }
}

export default JSXDemo;
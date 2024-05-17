import React, { Component } from 'react';
function Inline(props) {
    const heading={
        fontSize:'72px',
        color:'red'
    }
    return (
        <div style={heading}>
            Inline    
    </div>
    );
}
  
export default Inline;
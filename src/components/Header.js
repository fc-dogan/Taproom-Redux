import React from 'react';

const headerStyle ={
  padding: ".66rem 0",
  textAlign: "center",
  backgroundColor: "#cca353",
  color: "#fff"
}

function Header() {
  return (
    <div className="header" style={headerStyle}>
      <h1 >Tap Room</h1>
    </div>
    
  )
}

export default Header; 
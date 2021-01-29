import React from 'react';

const headerStyle ={
  padding: ".66rem 0",
  textAlign: "center",
  backgroundColor: "#3C5C60",
  color: "#fff",
  fontFamily: "'Montserrat', sans-serif",
}

function Header() {
  return (
    <div className="header" style={headerStyle}>
      <h1 >Tap Room</h1>
    </div>
    
  )
}

export default Header; 
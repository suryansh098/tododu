import React from 'react';

export const Footer = () => {
  const footerStyle = {
    backgroundColor: "rgba(255,255,255,0.1)",
    height: "25px"
  }
  return (
    <footer className="text-light" style={footerStyle}>
      <p className="text-center">
        Copyright &copy; Todo-List | Suryansh Yadav
      </p>
    </footer>
  );
}

import React from 'react';
import './header.css';
export default function Header(){
  return (
    <div className="header" role='banner'>
    <h1><span className="hot">Hot</span>N<span className="cold" >Cold</span></h1>
    </div>
  )
}
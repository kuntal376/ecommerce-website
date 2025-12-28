import React from "react";
import './style.css';
import AD1 from './images/AD1.jpg';
import AD2 from './images/AD2.jpg';
import AD3 from './images/AD3.jpg';
import AD4 from './images/AD4.jpg';
import { Link } from "react-router-dom";

const TopDeals = () =>{
    return(
        <>
            <h1 className="top-deals-heading">Top-Deals</h1>
            <div className="side-scroll">
                    <Link to="/products" className="img-link">
                        <img src={AD1} alt="Ad1" style={{width: '540px', height: '200px'}}/>
                    </Link>
                    <Link to="/products" className="img-link">
                        <img src={AD2} alt="Ad2" style={{width: '540px', height: '200px'}}/>
                    </Link>
                    <Link to="/products" className="img-link">
                        <img src={AD3} alt="Ad3" style={{width: '540px', height: '200px'}}/>
                    </Link>
                    <Link to="/products" className="img-link">
                        <img src={AD4} alt="Ad4" style={{width: '540px', height: '200px'}}/>
                    </Link>
            </div>
        </>
    )
}

export default TopDeals
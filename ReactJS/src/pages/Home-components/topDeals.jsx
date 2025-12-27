import React from "react";
import './style.css';
import AD1 from './images/AD1.jpg';
import AD2 from './images/AD2.jpg';
import AD3 from './images/AD3.jpg';
import AD4 from './images/AD4.jpg';

const TopDeals = () =>{
    return(
        <>
            <h1 className="top-deals-heading">Top-Deals</h1>
            <div className="top-deals-container flex justify-between items-center gap-4">
                <div className="deal-item">
                    <img src={AD1} alt="Deal 1" style={{ width: '500px', height: '150px' }} />
                </div>
                <div className="deal-item">
                    <img src={AD2} alt="Deal 2" style={{ width: '500px', height: '150px' }} />
                </div>
                <div className="deal-item">
                    <img src={AD3} alt="Deal 3" style={{ width: '500px', height: '150px' }} />
                </div>
                <div className="deal-item">
                    <img src={AD4} alt="Deal 4" style={{ width: '500px', height: '150px' }} />
                </div>
            </div>
        </>
    )
}

export default TopDeals
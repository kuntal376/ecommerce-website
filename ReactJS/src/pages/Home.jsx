import React from "react";
import Category from "./Home-components/category";
import Trending from "./Home-components/trending";
import TopDeals from "./Home-components/topDeals";
import ProductView from "./Home-components/productView";
import DealsOnProduct from "./Home-components/dealsOnproduct";
import './Home.css';

const Home = () => {
  return (
    <>
      <section className="home-section">
        <div className="home-bars">
          <div className="category">
          <Category/>
          </div>
          </div>
          <div className="top-deals">
          <TopDeals/>
          </div>
          <div className="trending">
          <Trending/>
          </div>
          <div className="product-view">
          <ProductView/>
          </div>
          <div className="deals-on-products">
          <DealsOnProduct/>
          </div>
        </div>
      </section>
      <section className="archive-section">
        <h2 className="archive-heading">Archive Section</h2>
      </section>
    </>
  );
}


export default Home;

import React from "react";
import Category from "./Home-components/category";
import Trending from "./Home-components/trending";
import TopDeals from "./Home-components/topDeals";
import DealsOnProduct from "./Home-components/dealsOnproduct";
import Archive from "../components/Archive";
import Footer from "../components/Footer";
import './Home.css';

const Home = () => {
  return (
    <>
      <section className="home-section">
        <div className="home-bars">
          <div className="category">
          <Category/>
          </div>
          <div className="top-deals">
          <TopDeals/>
          </div>
          <div className="trending">
          <Trending/>
          </div>
          <div className="deals-on-products">
          <DealsOnProduct/>
          </div>
        </div>
      </section>
      <div className="archive">
        <Archive/>
      </div>
      <div className="footer">
        <Footer/>
      </div>
    </>
  );
}

export default Home;
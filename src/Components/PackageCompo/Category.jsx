import React from "react";
import "./Category.css";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import SubNavbar from "../../Category/Subnavbar/Subnavbar";
const Category = () => {
  return (
    <>
      <SubNavbar />
      <Header />
      <div className="mainDiv">
        <Link to="/bedroom">
        <div className="hover">
          <img
            src="https://www.rentomojo.com/public/images/category/package-bg/living-room-v2.jpg"
            alt=""
          />
        </div>
        <div className="category">
            <p>bedroom</p>
          </div>
          </Link>
          <Link to="/furniture">
        <div className="hover">
          <img
            src="https://www.rentomojo.com/public/images/category/package-bg/dining-v1.jpg"
            alt=""
          />
        </div>
        <div className="category">
              <p>Furniture</p>
            </div>
            </Link>
            <Link to="/appliance">
        <div className="hover">
          <img
            src="https://www.rentomojo.com/public/images/category/appliances-bg/washing-machines.jpg"
            alt=""
          />
        </div>
        <div className="category">
            <p>Appliance</p>
          </div>
          </Link>
        <Link to="/electronics">
          <div className="hover">
            <img
              src="https://www.rentomojo.com/public/images/category/appliances-bg/laptops_new_2.jpg"
              alt=""
            />
          </div>
          <div className="category">
              <p>Electronics</p>
            </div>
        </Link>
        <Link to="/fitness">
          <div className="hover">
            <img
              src="https://www.rentomojo.com/public/images/category/fitness/cross-trainers.jpg"
              alt=""
            />
          </div>
          <div className="category">
              <p>Fitness</p>
            </div>
        </Link>
      </div>
      <div className="bottomPart">
      <h3>Choose By Apartment Type</h3> 
       <hr></hr>
       <div className="mainDiv" style={{marginLeft:"30px"}}>
        <div className="hover">
        <img
              src="https://www.rentomojo.com/public/images/category/package-bg/studio-apartment.jpg"
              alt=""
            />
            <div className="category">
              <p>Studio Apartment</p>
            </div>
        </div>
        <div className="hover">
        <img
              src="https://www.rentomojo.com/public/images/category/package-bg/1-bhk-new.jpg"
              alt=""
            />
            <div className="category">
              <p>1 BHK</p>
            </div>
        </div>
        <div className="hover">
        <img
              src="https://www.rentomojo.com/public/images/category/package-bg/2-bhk-new.jpg"
              alt=""
            />
            <div className="category">
              <p>2 BHK</p>
            </div>
        </div>
       </div>
      </div>
    </>
  );
};

export default Category;

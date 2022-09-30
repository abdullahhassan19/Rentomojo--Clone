import React from "react";
import "./Category.css";
import { Link, useNavigate } from "react-router-dom";
import SubNavbar from "../../Category/Subnavbar/Subnavbar";
const Category = () => {
  return (
    <>
    <SubNavbar/>
    <div className="mainDiv">
      
      <div>
        <img
          src="https://www.rentomojo.com/public/images/category/package-bg/living-room-v2.jpg"
          alt=""
        />
        <div className="category">
          <p>bedroom</p>
        </div>
      </div>
      <div>
        <img
          src="https://www.rentomojo.com/public/images/category/package-bg/dining-v1.jpg"
          alt=""
        />
        <div className="pack-box">
          <div className="category">
            <p>Furniture</p>
          </div>
        </div>
      </div>
      <div>
        <img
          src="https://www.rentomojo.com/public/images/category/appliances-bg/washing-machines.jpg"
          alt=""
        />
        <div className="category">
          <p>Appliance</p>
        </div>
      </div>


      <Link to="/electronics">
      <div>
        <img
          src="https://www.rentomojo.com/public/images/category/appliances-bg/laptops_new_2.jpg"
          alt=""
        />


    
        
        <div className="category">
            <p>Electronics</p>
          </div>
        



      </div>

      </Link>
      <div>
        <img
          src="https://www.rentomojo.com/public/images/category/fitness/cross-trainers.jpg"
          alt=""
        />
        <div className="category">
          <p>Fitness</p>
        </div>
      </div>
    </div>

    </>
  );
};

export default Category;

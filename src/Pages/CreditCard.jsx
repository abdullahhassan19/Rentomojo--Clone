import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CreditCard = () => {
  const [number, SetNumber] = useState("");
  const [name, SetName] = useState("");
  const [month, SetMonth] = useState("");
  let [expiry, SetExpiry] = useState("");
  const [cvc, SetCvc] = useState("");
  const [focus, SetFocus] = useState("");
  const navigate=useNavigate()
  const handleDate = (e) => {
    SetMonth(e.target.value);
    SetExpiry(e.target.value);
  };
  const handleExpiry = (e) => {
    SetExpiry(month.concat(e.target.value));
  };

  const handleordersuccess=(e)=>{
    e.preventDefault()
    // console.log("NIKDOD")
    navigate("/paymentsuccess")
   
  }
const total =useSelector((state)=>state.reducer.total)
// console.log(total)
  return (
    <div className="credit">
      {/* <div className="rccs__card backcolor"> */}
      <div className="cardside" >
      <div className="rccs__card rccs__card--unknown card" >
        <Cards
          number={number}
          name={name}
          expiry={expiry}
          cvc={cvc}
          focused={focus}
        />
        
      </div>
      
      <div className="totalamount">{`Total Amount To be Paid $ ${total}`}</div>
      </div>
      

      
      <form onSubmit={handleordersuccess}>
        <div className="row">
          <div className="col-sm-11">
            <label >Card Number</label>
            <input
              type="tel"
              className="form-control"
              value={number}
              name="number"
              maxLength="16"
              pattern="[0-9]+"
              onChange={(e) => {
                SetNumber(e.target.value);
              }}
              onFocus={(e) => SetFocus(e.target.name)}
            ></input>
          </div>
          
        </div>
        <br />
        <div className="row">
          <div className="col-sm-11">
            <label >Card Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              name="name"
              onChange={(e) => {
                SetName(e.target.value);
              }}
              onFocus={(e) => SetFocus(e.target.name)}
            ></input>
          </div>
        </div>
        <br />
        <div className="row">
          <div
            className="col=sm-8"
            style={{
            paddingright: "12em",paddingLeft: "1em" 
            }}
          >
            <label >Expiration Date</label>
          </div>
          
        </div>

        <div className="row">
          <div className="col-sm-4">
            <select
              className="form-control"
              name="expiry"
              onChange={handleDate}
            >
              <option value=" ">Month</option>
              <option value="01">Jan</option>
              <option value="02">Feb</option>
              <option value="03">Mar</option>
              <option value="04">April</option>
              <option value="05">May</option>
              <option value="06">June</option>
              <option value="07">July</option>
              <option value="08">Aug</option>
              <option value="09">Sep</option>
              <option value="10">Oct</option>
              <option value="11">Nov</option>
              <option value="12">Dec</option>
            </select>
          </div>
          &nbsp;
          <div className="col-sm-4">
            <select
              className="form-control"
              name="expiry"
              onChange={handleExpiry}
            >
              <option value=" ">Year</option>
              <option value="21">2021</option>
              <option value="22">2022</option>
              <option value="23">2023</option>
              <option value="24">2024</option>
              <option value="25">2025</option>
              <option value="26">2026</option>
              <option value="27">2027</option>
              <option value="28">2028</option>
              <option value="29">2029</option>
              <option value="30">2030</option>
            </select>
          </div>
          <br />
          <br />
          
        </div>
        <div className="col-sm-3 cvvclass ">
            <div className="col=sm-4">
              <label >CVV</label>
            </div>
            <input
              type="tel"
              name="cvc"
              maxLength="3"
              className=" form-control card cvvcard"
              value={cvc}
              pattern="\d*"
              onChange={(e) => {
                SetCvc(e.target.value);
              }}
              onFocus={(e) => SetFocus(e.target.name)}
            ></input>
          </div>
        <br />
        <input
          type="submit"
          className="btn btn-secondary form-control"
          value="Submit"
        />
      </form>
    </div>
  );
};
export default CreditCard;

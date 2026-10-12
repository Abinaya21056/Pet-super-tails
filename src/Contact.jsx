import React from "react";
import{Link} from "react-router-dom";
// import { useEffect } from "react";
function Contact(){
    
    const userName=localStorage.getItem("userName");
    const phone=localStorage.getItem("phone")
    return(
      
        <div id="over-all">
            <h1 className="head">Contact us</h1>
{/* login pannalana */}
    {userName ? (
  <div id="username">
    <h2 id="hi">Hi {userName} </h2>
    <p id="via">Logged via+{phone}</p>
   
  </div>
) : (
  <div id="getting">
    <i className="fa-solid fa-user"></i>
    <h2 id="easy">Getting help is easy</h2>
    <p id="o-d">Sign in to get help with recent orders</p>
    <button id="sign-in">SIGN IN</button>
  </div>
)}

{/* Quick link process */}
<div id="quick-link">
<h1 id="head-q">Quick links</h1>
<div id="q-l">
    <Link to="" className="Track-link">
<i classname="fa-solid fa-truck-fast"></i><h2 className="e-y">Track order</h2>
<p className="order-t">view the status of your order</p><i classname="fa-regular fa-circle-right" id="arrow"></i>
</Link>
</div>
<div id="return-order" >
    <Link to="" className="Track-link">
    <i classname="fa-solid fa-box"></i>
    <h2 className="e-y">Return order</h2>
    <p className="order-t">Return and view the items in your order</p><i classname="fa-regular fa-circle-right" id="arrow"></i>
    </Link>
</div>
<div id="chat-vet">
    <Link to="" className="Track-link">
    <i classname="fa-solid fa-stethoscope"></i>
    <h2 className="e-y">Chat with a vet</h2>
    <p className="order-t">view the status of your order</p>
    <i classname="fa-regular fa-circle-right" id="arrow"></i>
    </Link>

</div>
</div>
<Link to="" className="link">
<div id="browse-topic">
<div className=" list">
    <i classname="fa-solid fa-truck-fast"></i>
    <p  className="r-e">Order related</p>
</div>

<div className="list">
    <i classname="fa-solid fa-truck-fast"></i>
<p className="r-e">Return & cancellations <br /> related</p>
</div>
<div className="list">
    <i classname="fa-solid fa-truck-fast"></i>
<p  className="r-e">Payments & refunds <br /> related</p>
</div>
<div className="list">
    <i classname="fa-solid fa-truck-fast"></i>
<p  className="r-e">Coupons & discounts  <br />related</p>
</div>
<div id="l-ist">
    <i classname="fa-solid fa-truck-fast"></i>
<p  className="r-e">General enquiry</p>
</div>
</div>
</Link>
<div id="get-touch">
<h1 className="in">Get in touch </h1>
<p className="in">If you have any inquiries, feel free to </p>
<div id="call-in" >
    <i classname="fa-solid fa-phone"></i> 
    <p className="us">Call us at <b>1800-5723-575</b></p>
     <i classname="fa-solid fa-envelope"></i>
    <p className="us">Email us at <b>support@petsupertails.com</b></p>
</div> 
    <h2>Become a seller</h2>
    <div id="list-all">
        <p>List all your products on Pet supertails</p>
    </div>
</div>
{/* final it */}
<div id="delivery" >
    <div > 
    <i classname="fa-solid fa-person-running"></i>
    <h2 className="hr">24hr Devlivery</h2>
    <p className="exclusive">in 24 cities</p>
</div>
<div >
    <i classname="fa-solid fa-dog"></i>
    <h2 className="hr">1,50,000+</h2>
    <p className="exclusive">Happy pet parents</p>
</div>
<div >
    <i classname="fa-solid fa-stethoscope"></i>
    <h2 className="hr"> Comlimentary vet consult</h2>
    <p className="exclusive">For every new member</p>
</div>
<div >
    <i classname="fa-solid fa-briefcase-medical"></i>
    <h2 className="hr">Pet Pharmacy</h2>
    <p className="exclusive">Exclusive</p>
</div>
</div>
{/* <div>
    <footer>
        <h1>ONLINE SHOPPING</h1>
        <li> Dog</li>
        
    </footer>
</div> */}
            </div>
            
           
        
        
    )
}
export default Contact;
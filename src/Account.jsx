import React,{useState} from "react";
  import { useNavigate } from "react-router-dom";
function Account(){
    // const [showText,setshowtext]=useState(false);
       const [active, setActive] = useState("");
      const navigate = useNavigate();
       const userName=localStorage.getItem("userName");
    const phone=localStorage.getItem("phone")
    const handleLogout=()=>{
        localStorage.removeItem("userName");
  localStorage.removeItem("phone");            
  navigate("/Login");          
};
    return(
        <div>
            <div id="account-order">
            <div id="o">
                
<p className="h" onClick={()=> setActive("order")}> <i classname="fa-solid fa-box-open"> </i>Orders</p>
                {active==="order" &&(
                <div id="hg">
                    <h3 id="y-or">Your orders</h3>
                    <p id="no">No orders available</p>
                    <button id="try-ag">Try again</button>
                    </div>
              )}
               </div>
            <div id="r">
                <p className="h" onClick={()=>setActive("Address")}><i classname="fa-solid fa-location-dot"></i>Address</p>
                {active==="Address"&&(
                    <div id="myaddress">
                        <h4 id="add">My Addresses</h4>  
                        <p id="newadd">Add new address+</p>
                    </div>
                ) }
            </div>
            <div id="d">
                <p className="h" onClick={()=>setActive("invite")} ><i classname="fa-solid fa-user-plus"> </i> Invite friends</p>
                {active==="invite"&&(
                    <div id="invite">
                        <img  src="image/dogfood/image.webp" alt="" width={"1100px"} height={"400px"}/>
                        <p id="htt">https://petsupertails.com/</p>
                        <button id="copy" onClick={()=>alert("Copied successfully, buddy! 😄")}><i classname="fa-regular fa-copy"></i>Copy link</button>
                        <button className="copy"><i class="fa-solid fa-share-nodes"></i>Share</button>
                        <h5 id="media" >Share on social media</h5>
                        <div id="what">
                        <i classname="fa-brands fa-whatsapp" id="app" ></i>
                        <i classname="fa-brands fa-facebook" id="facebook"></i>
                        <i classname="fa-brands fa-square-instagram" id="insta"></i>
                        <i classname="fa-brands fa-square-twitter" id="twitter"></i>
</div>
<p id="worry">Dont worry! You'll see a preview before you post</p>
<h3 id="terms">Terms and conditions</h3>
<p className="code"><i classname="fa-solid fa-location-arrow" id="ar"></i>Your referral code can only be used by a new customer and cannot be clubbed together with other discount offers </p>
<p className="code"><i classname="fa-solid fa-location-arrow" id="row" ></i>Your offer will become active 24hours after your friend completes a purchase</p>
                    </div>
                )}
                </div>
            <div id="er">
                <p onClick={()=>setActive("subcription")}><i classname="fa-solid fa-arrows-rotate"> </i>Subcription</p>
                {active==="subcription"&&(
                 <div id="subcription">   
<h6 id="your">Your subcription</h6>
 <div id="yet">
    <p>You don't have any subcription yet.</p>
 </div>
                    </div>
                )
                }
            </div>
            <div id="r">
                <p onClick={()=>setActive("account")}><i classname="fa-solid fa-gear"> </i>Account Settings</p>
                {active==="account"&&(
                    <div id="acc-se">
{userName && (
  <div id="account-user">
    <label className="clna"> Name </label>
    <p id="ii" >{userName}</p>
    <label className="clna">Email address</label>
    <p id="abi" type="text" >abinaya0362@gmail.com </p>
    <label className="clna"> Mobile Number</label>
        <p id="vi">{phone}</p>
  </div>
)}
                    </div>
                )}
            </div>
            <div id="rs">
                <p onClick={() => navigate("/Contact")}><i classname="fa-solid fa-headset"></i>FAQ/ Contact Us</p>
            </div>
            <div id="re">
                <p onClick={handleLogout}><i classname="fa-solid fa-arrow-right-from-bracket"></i> Log Out</p>
            </div>
            </div>
        </div>
    )
}
export default  Account;
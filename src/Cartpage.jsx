import React from "react";
import { useNavigate } from "react-router-dom";
import{Link} from "react-router-dom";
function Cartpage({ cart=[], setCart }) {
const navigate = useNavigate();

// Increase quantity
const increaseQuantity = (id) => {
setCart(
cart.map((item) =>
item.id === id
? { ...item, quantity: item.quantity + 1 }
: item
)
);
}
;

// Decrease quantity
const decreaseQuantity = (id) => {
setCart(
cart
.map((item) =>
item.id === id
? { ...item, quantity: item.quantity - 1 }
: item
)
.filter((item) => item.quantity > 0)
);
};

// Remove item
const removeItem = (id) => {
setCart(
cart.filter((item) => item.id !== id)
);
};

// Total price
const totalPrice = cart.reduce(
(total, item) =>
total + item.price * item.quantity,
0
);

// Total quantity
const totalItems = cart.reduce(
(total, item) =>
total + item.quantity,
0
);

return ( <div className="cart-page">
 

  {cart.length === 0 ? (

    <div className="empty-cart">
        <img src="image/dogfood/empty-cart.webp" alt="" width={"300px"} height={"200px"} />
      <h2>Oops,your caeet is feeling a bit light.</h2>
      <p>
        Time to give it some love and add some goodies!
      </p>
      <button onClick={()=>navigate("/Home")} id="continue">continue shopping</button>
    </div>

  ) : (

    <div className="cart-container">
      <div id="ca-rt" >
   <Link>
    <p><i class="fa-solid fa-cart-shopping"></i>Cart</p>
  </Link>             
               ________
             <Link to={"/Address"}>
    <p><i class="fa-solid fa-address-card"></i>Address</p>
  </Link>

                 ________    
                <Link> <p><i class="fa-regular fa-folder-open"></i>Review</p></Link>
               ________
               <Link><p><i class="fa-solid fa-hand-holding-dollar"></i>Payment</p></Link>
            </div> <br />
      {/* Cart Items */}
      <div className="cart-items">

        {cart.map((item) => (

          <div
            className="cart-card"
            key={item.id}
          >

            <img
              src={item.image}
              alt={item.name}
            />

            <div className="cart-info">

              <h2>{item.name}</h2>

              <p className="cart-price">
                ₹{item.price}
              </p>

              {/* Quantity Buttons */}
              <div className="cart-actions">

                <button
                  onClick={() =>
                    decreaseQuantity(item.id)
                  }
                >
                  -
                </button>

                <span>
                  {item.quantity}
                </span>

                <button
                  onClick={() =>
                    increaseQuantity(item.id)
                  }
                >
                  +
                </button>

              </div>

              <p className="item-total">
                Total: ₹
                {item.price * item.quantity}
              </p>

              <button
                className="remove-btn"
                onClick={() =>
                  removeItem(item.id)
                }
              >
                Remove
              </button>

            </div>

          </div>

        ))}

      </div>

      {/* Cart Summary */}
      <div className="cart-summary">

        <h2>Order Summary</h2>

        <div className="summary-row">
          <span>Items</span>
          <span>{totalItems}</span>
        </div>

        <div className="summary-row">
          <span>Subtotal</span>
          <span>₹{totalPrice}</span>
        </div>

        <div className="summary-row">
          <span>Delivery</span>
          <span>Free</span>
        </div>

        <hr />

        <div className="total-row">
          <span>Total</span>
          <strong>₹{totalPrice}</strong>
        </div>
       <button
  className="checkout-btn"
  onClick={() => navigate("/Address")}
>
  Proceed to Checkout
</button>

      </div>

    </div>

  )}

</div>


);
}

export default Cartpage;
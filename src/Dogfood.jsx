import { useNavigate } from "react-router-dom";

function Dog({ cart, setCart }) {

  const navigate = useNavigate();

  // ADD TO CART FUNCTION
  const addToCart = (product) => {

    const existingProduct = cart.find(
      (item) => item.id === product.id);
    
    if (existingProduct) {

      setCart(
        cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item
        )
      );
alert('${product.name} quantity increased!');
    } else {

      setCart([
        ...cart,
        {
          ...product,
          quantity: 1
        }
      ]);
alert('${product.name} 1 item added!');
    }

    // Cart page-ku pogum
    // navigate("/Cart");
  };


  return (
    <div id="dog-foodall">

      {/* TOP IMAGES */}

      <div id="d-f">

        <div id="f-f">
          <img
            src="image/dogfood/d8.png"
            alt=""
            width="450px"
            height="650px"
          />
        </div>

        <div>
          <img
            src="image/dogfood/d1.webp"
            alt=""
            width="450px"
            height="650px"
          />
        </div>

        <div>
          <img
            src="image/dogfood/d2.webp"
            alt=""
            width="450px"
            height="650px"
          />
        </div>

        <div>
          <img
            src="image/dogfood/d3.webp"
            alt=""
            width="450px"
            height="650px"
          />
        </div>

        <div>
          <img
            src="image/dogfood/d4.webp"
            alt=""
            width="450px"
            height="650px"
          />
        </div>

      </div>


      {/* CATEGORY IMAGES */}

      <div id="id">

        <div>
          <img src="image/dogfood/df1.avif" alt="" width="250px" height="300px" />
        </div>

        <div>
          <img src="image/dogfood/df2.avif" alt="" width="250px" height="300px" />
        </div>

        <div>
          <img src="image/dogfood/df3.avif" alt="" width="250px" height="300px" />
        </div>

        <div>
          <img src="image/dogfood/df4.webp" alt="" width="250px" height="300px" />
        </div>

        <div>
          <img src="image/dogfood/df5.avif" alt="" width="250px" height="300px" />
        </div>

        <div>
          <img src="image/dogfood/df6.avif" alt="" width="250px" height="300px" />
        </div>

        <div>
          <img src="image/dogfood/df7.avif" alt="" width="250px" height="300px" />
        </div>

      </div>


      <h1 className="he-ad">
        Top picks at lowest prices
      </h1>


      {/* PRODUCTS */}

      <div id="Food-food">

        {/* PRODUCT 1 */}

        <div>

          <img
            src="image/dogfood/d6.jpeg"
            alt=""
            width="370px"
            height="370px"
          />

          <p className="Chi">
            Drools Chicken and Egg Puppy Dog Dry Food
          </p>

          <p className="rs">
            <del>₹3,849</del>
            <br />
            ₹3,421
          </p>

          <button
            onClick={() =>
              addToCart({
                id: 1,
                name: "Drools Chicken and Egg Puppy Dog Dry Food",
                price: 3421,
                image: "image/dogfood/d6.jpeg"
              })
            }
            className="Btn"
          >
            Add To Cart
          </button>

        </div>


        {/* PRODUCT 2 */}

        <div>

          <img
            src="image/dogfood/d8.jpeg"
            alt=""
            width="370px"
            height="370px"
          />

          <p className="Chi">
            Drools Optimum Performance Adult Dog Dry Food
          </p>

          <p className="rs">
            <del>₹3,100</del>
            <br />
            ₹2,728
          </p>

          <button
            onClick={() =>
              addToCart({
                id: 2,
                name: "Drools Optimum Performance Adult Dog Dry Food",
                price: 2728,
                image: "image/dogfood/d8.jpeg"
              })
            }
            className="Btn"
          >
            Add To Cart
          </button>

        </div>


        {/* PRODUCT 3 */}

        <div>

          <img
            src="image/dogfood/d11.jpeg"
            alt=""
            width="370px"
            height="370px"
          />

          <p className="Chi">
            Chip Chop Chicken Tender Dog Treats
          </p>

          <p className="rs">
            <del>₹2,070</del>
            <br />
            ₹1,739
          </p>

          <button
            onClick={() =>
              addToCart({
                id: 3,
                name: "Chip Chop Chicken Tender Dog Treats",
                price: 1739,
                image: "image/dogfood/d11.jpeg"
              })
            }
            className="Btn"
          >
            Add To Cart
          </button>

        </div>


        {/* PRODUCT 4 */}

        <div>

          <img
            src="image/dogfood/d9.jpeg"
            alt=""
            width="370px"
            height="370px"
          />

          <p className="Chi">
            Drools Chicken And Egg Adult Dog Dry Food
          </p>

          <p className="rs">
            <del>₹3,799</del>
            <br />
            ₹3,495
          </p>

          <button
            onClick={() =>
              addToCart({
                id: 4,
                name: "Drools Chicken And Egg Adult Dog Dry Food",
                price: 3495,
                image: "image/dogfood/d9.jpeg"
              })
            }
            className="Btn"
          >
            Add To Cart
          </button>

        </div>


        {/* PRODUCT 5 */}

        <div>

          <img
            src="image/dogfood/d13.jpeg"
            alt=""
            width="370px"
            height="370px"
          />

          <p className="Chi">
            Pedigree Chicken and Milk Puppy Dog Dry Food
          </p>

          <p className="rs">
            <del>₹4,100</del>
            <br />
            ₹3,608
          </p>

          <button
            onClick={() =>
              addToCart({
                id: 5,
                name: "Pedigree Chicken and Milk Puppy Dog Dry Food",
                price: 3608,
                image: "image/dogfood/d13.jpeg"
              })
            }
            className="Btn"
          >
            Add To Cart
          </button>

        </div>


        {/* PRODUCT 6 */}

        <div>

          <img
            src="image/dogfood/d14.jpeg"
            alt=""
            width="370px"
            height="370px"
          />

          <p className="Chi">
            Pedigree Chicken and Vegetables Adult Dog Dry Food
          </p>

          <p className="rs">
            <del>₹3,900</del>
            <br />
            ₹3,333
          </p>

          <button
            onClick={() =>
              addToCart({
                id: 6,
                name: "Pedigree Chicken and Vegetables Adult Dog Dry Food",
                price: 3333,
                image: "image/dogfood/d14.jpeg"
              })
            }
            className="Btn"
          >
            Add To Cart
          </button>

        </div>


        {/* PRODUCT 7 */}

        <div>

          <img
            src="image/dogfood/d10.jpeg"
            alt=""
            width="370px"
            height="370px"
          />

          <p className="Chi">
            Drools Real Chicken & Chicken Liver Chunks in Gravy Adult Dog Wet Food
          </p>

          <p className="rs">
            <del>₹225</del>
            <br />
            ₹207
          </p>

          <button
            onClick={() =>
              addToCart({
                id: 7,
                name: "Drools Real Chicken & Chicken Liver Chunks in Gravy Adult Dog Wet Food",
                price: 207,
                image: "image/dogfood/d10.jpeg"
              })
            }
            className="Btn"
          >
            Add To Cart
          </button>

        </div>


        {/* PRODUCT 8 */}

        <div>

          <img
            src="image/dogfood/d12.jpeg"
            alt=""
            width="370px"
            height="370px"
          />

          <p className="Chi">
            Royal Canin Maxi Puppy Dog Dry Food
          </p>

          <p className="rs">
            <del>₹16,849</del>
            <br />
            ₹14,819
          </p>

          <button
            onClick={() =>
              addToCart({
                id: 8,
                name: "Royal Canin Maxi Puppy Dog Dry Food",
                price: 14819,
                image: "image/dogfood/d12.jpeg"
              })
            }
            className="Btn"
          >
            Add To Cart
          </button>

        </div>

      </div>
<h2 className="he-ad">Popular categories</h2>
 <div id="popular">
   <div>
      <img src="image/dogfood/d15.webp" alt="" width={"250px"} height={"300px"} />
</div>
    <div>
               <img src="image/dogfood/d17.avif" alt="" width={"250px"} height={"300px"} />
     </div>
    <div>
                 <img src="image/dogfood/d18.avif" alt="" width={"250px"} height={"300px"} />
    </div>
    <div>
                <img src="image/dogfood/d19.avif" alt="" width={"250px"} height={"300px"} />
    </div>
    <div>
                <img src="image/dogfood/d20.webp" alt="" width={"250px"} height={"300px"} />
     </div>
    <div>  
                       <img src="image/dogfood/d21.avif" alt="" width={"250px"} height={"300px"} />
    </div>
   <div>
                   <img src="image/dogfood/d22.avif" alt="" width={"250px"} height={"300px"} />
   </div>
</div>
 <div id="animi">
     <video
 
  autoPlay
  loop
  muted
  playsInline
  style={{ objectFit: "cover" }}
>
  <source src="/image/dogfood/animi%205.mp4" type="video/mp4" />
</video>
<h4 className="got">ℍ𝔼ℕ𝕃𝕆'𝕊 𝔾𝕆𝕋 𝕋ℍ𝔼 𝔹𝕀𝔾 𝔻𝔸𝕎𝔾𝕊 𝔹𝕌ℤℤ𝕀ℕ ' 𝕆ℕ ℙℝ𝕆𝕋𝔼𝕀ℕ</h4>

<h5 className="g-o"> thoughtfully crafted with real ingredients  <br />Starting  at ₹399 only!  </h5>
<div id="h-g">
    <img src="image/dogfood/d23.avif" alt="" width={"250px"} height={"300px"} />
    <img src="image/dogfood/d24.avif" alt="" width={"250px"} height={"300px"} />
    <img src="image/dogfood/d25.avif" alt="" width={"250px"} height={"300px"} />
    <img src="image/dogfood/d26.avif" alt="" width={"250px"} height={"300px"} />
    <img src="image/dogfood/d27.avif" alt="" width={"250px"} height={"300px"} />
    <img src="image/dogfood/d28.avif" alt="" width={"250px"} height={"300px"} />
</div>
<div>
<img src="image/dogfood/d29.webp" alt="" width={"100%"} />
<img src="image/dogfood/d30.webp" alt="" width={"670px"} height={"350px"}/>
<img src="image/dogfood/d31.webp" alt="" width={"670px"} height={"350px"}/>
<img src="image/dogfood/d32.webp" alt="" width={"670px"} height={"350px"}/>
</div>
</div>
<h2 className="he-ad">Brand in focus</h2>
<div id="brand-f">
    <img src="image/dogfood/d33.avif" alt="" width={"350px"} height={"300px"} />
    <img src="image/dogfood/d34.avif" alt="" width={"350px"} height={"300px"} />
    <img src="image/dogfood/d35.avif" alt="" width={"350px"} height={"300px"} />
    <img src="image/dogfood/d36.avif" alt="" width={"350px"} height={"300px"} />
    <img src="image/dogfood/d37.avif" alt="" width={"350px"} height={"300px"} />
    <img src="image/dogfood/d38.avif" alt="" width={"350px"} height={"300px"} />
    <img src="image/dogfood/d39.avif" alt="" width={"350px"} height={"300px"} />
    <img src="image/dogfood/d40.avif" alt="" width={"350px"} height={"300px"} />
</div>
<h1 className="he-ad"> Prescription Diet</h1>
<div id="vet">
    {/* product9 */}
    <div>
        <img src="image/dogfood/d41.webp" alt="" width={"250px"} height={"300px"} />
        <p className="Chi"> Farmina Vet Life Diet Hepatic Formula Dog Wet  Food </p>
        <p className="rs"><del>₹12,400</del><br />₹12,480</p>
        <button onClick={() =>
              addToCart({
                id: 9,
                name: "Farmina Vet Life Diet Hepatic Formula Dog Wet  Food",
                price: 12480,
                image: "image/dogfood/d41.webp"
              })
            }
            className="Btn"> Add To Cart</button>
    </div>
    {/* product10 */}
        <div>
        <img src="image/dogfood/d42.webp" alt="" width={"250px"} height={"300px"} />
        <p className="Chi">Royal Canin Veterinary Deit Hypollergenic Puppy Dry Food</p>
        <p className="rs"><del>₹5,940</del><br />₹5,940</p>
        <button onClick={() =>
              addToCart({
                id: 10,
                name: "Royal Canin Veterinary Deit Hypollergenic Puppy Dry Foodd",
                price: 5940,
                image: "image/dogfood/d42.webp"
              })
            }
            className="Btn"> Add To Cart</button>
    </div>   
    {/* product11 */}
     <div>
        <img src="image/dogfood/d43.webp" alt="" width={"250px"} height={"300px"} />
        <p className="Chi">Farmina Vet Life Growth Canine Formula Puppy Dog Dry Food </p>
        <p className="rs"><del>₹8,250</del><br />₹8,250</p>
        <button onClick={() =>
              addToCart({
                id: 11,
                name: "Farmina Vet Life Growth Canine Formula Puppy Dog Dry Food ",
                price: 8250,
                image: "image/dogfood/d43.webp"
              })
            }
            className="Btn"> Add To Cart</button>
    </div>   
    {/* product12 */}
     <div>
        <img src="image/dogfood/d44.webp" alt="" width={"250px"} height={"300px"} />
        <p className="Chi">Farmina Vet Life Diet Cardiac Dog Dry Food </p>
        <p className="rs"><del>₹8,250</del><br />₹8,250</p>
        <button onClick={() =>
              addToCart({
                id: 12,
                name: "Farmina Vet Life Diet Cardiac Dog Dry Food",
                price: 8250,
                image: "image/dogfood/d44.webp"
              })
            }
            className="Btn" > Add To Cart</button>
    </div>  
    {/* product13   */}
    <div>
        <img src="image/dogfood/d45.webp" alt="" width={"250px"} height={"300px"} />
        <p className="Chi">Royal Canin Veterinary  Diet Hepatic Formula Dog Wet  Food </p>
        <p className="rs"><del>₹12,400</del><br />₹12,480</p>
        <button onClick={() =>
              addToCart({
                id: 13,
                name: "Royal Canin Veterinary  Diet Hepatic Formula Dog Wet  Food",
                price: 12480,
                image: "image/dogfood/d45.webp"
              })
            }
            className="Btn"> Add To Cart</button>
    </div>    
    {/* product14 */}
    <div>
        <img src="image/dogfood/d46.webp" alt="" width={"250px"} height={"300px"} />
        <p className="Chi">Royal Canin Veterinary Diet Hepatic Formula Dog Wet  Food </p>
        <p className="rs"><del>₹8,400</del><br />₹8,400</p>
        <button onClick={() =>
              addToCart({
                id: 14,
                name: "Royal Canin Veterinary Diet Hepatic Formula Dog Wet  Food",
                price: 8400,
                image: "image/dogfood/d46.webp"
              })
            }
            className="Btn"> Add To Cart</button>
    </div>    
    {/* product15 */}
    <div>
        <img src="image/dogfood/d47.webp" alt="" width={"250px"} height={"300px"} />
        <p className="Chi">Royal Canin veterinary  Diet Hypoallergenic moderate Calorie Dog Dry Food </p>
        <p className="rs"><del>₹17,000</del><br />₹17,000</p>
        <button onClick={() =>
              addToCart({
                id: 15,
                name: "Royal Canin veterinary  Diet Hypoallergenic moderate Calorie Dog Dry Food",
                price: 17000,
                image: "image/dogfood/d47.webp"
              })
            }
            className="Btn"> Add To Cart</button>
    </div>  
    {/* product16 */}
      <div>
        <img src="image/dogfood/d48.webp" alt="" width={"250px"} height={"300px"} />
        <p className="Chi">Farmina Vet Life Diet Hepatic Formula Dog Wet  Food </p>
        <p className="rs"><del>₹12,400</del><br />₹12,480</p>
        <button onClick={() =>
              addToCart({
                id:16,
                name: "Farmina Vet Life Diet Hepatic Formula Dog Wet  Food",
                price: 12480,
                image: "image/dogfood/d48.webp"
              })
            }
            className="Btn"> Add To Cart</button>
    </div>
</div>
<div id="animi">
<div className="video-container">
        <video className="animi-video"
          autoPlay
         loop
          playsInline
        >
          <source
            src="/image/dogfood/animi video.mp4"
            type="video/mp4"
          />
        </video>
        <h5 className="video-para">For daily growth & development 🐾<i class="fa-solid fa-circle-arrow-right"  ></i></h5>
</div>
<div className="video-container">
<video  className="animi-video"
 autoPlay
loop
muted
playsInline
>
<source
            src="/image/dogfood/animi video2.mp4"
            type="video/mp4"
          />
</video>
<h5 className="video-para">inside every good dog is a great dog 🐾 <i class="fa-solid fa-circle-arrow-right"  ></i></h5>
</div>
<div className="video-container">
    <video  className="animi-video"
 autoPlay
loop
muted
playsInline
>
<source
            src="/image/dogfood/animi video3.mp4"
            type="video/mp4"
          />
</video>
<h5 className="video-para"> Go beyond the first ingredient 🐾 <i class="fa-solid fa-circle-arrow-right"  ></i></h5>
</div>
<div className="video-container">
<img className="animi-video" src="image/dogfood/df01.jpeg" alt="" />
<h5 className="video-para">Nutrition that performs 🐾 <i class="fa-solid fa-circle-arrow-right"  ></i></h5>
</div>
<div className="video-container">
<img className="animi-video" src="image/dogfood/df03.png" alt="" />
<h5 className="video-para">Healthy Food, Happy Tails, Every Single Day. 🐾<i class="fa-solid fa-circle-arrow-right"  ></i></h5>
</div>
<div className="video-container">
<img className="animi-video" src="image/dogfood/df02.jpeg" alt="" />
<h5 className="video-para">Unleash the natural taste 🐾<i class="fa-solid fa-circle-arrow-right"  ></i></h5>
</div>
<div className="video-container">
    <video className="animi-video" 
    autoPlay
    loop
    muted
    playsInline
    >
<source src="/image/dogfood/animi 6.mp4" type="video/mp4"/>
    </video>
<h5 className="video-para">Life preservation formula 🐾 <i class="fa-solid fa-circle-arrow-right"  ></i></h5>
</div>
<div className="video-container">
    <video  className="animi-video"
 autoPlay
loop
muted
playsInline
>
<source
            src="/image/dogfood/animi1.mp4"
            type="video/mp4"
          />
</video>
<h5 className="video-para"> Well fed, well bred 🐾 <i class="fa-solid fa-circle-arrow-right"  ></i></h5>
</div>
<div className="video-container">
    <video className="animi-video" 
    autoPlay
    loop
    muted
    playsInline
    >
<source src="/image/dogfood/animi7.mp4" type="video/mp4"/>
    </video>
<h5 className="video-para">nutritionally balanced option formulated for dogs 🐾 <i class="fa-solid fa-circle-arrow-right"  ></i></h5>
</div>
</div>
<div id="deli-very" >
    <div > 
    <i class="fa-solid fa-person-running"></i>
    <h2 className="hr">24hr Devlivery</h2>
    <p className="exclusive">in 24 cities</p>
</div>
<div >
    <i class="fa-solid fa-dog"></i>
    <h2 className="hr">1,50,000+</h2>
    <p className="exclusive">Happy pet parents</p>
</div>
<div >
    <i class="fa-solid fa-stethoscope"></i>
    <h2 className="hr"> Comlimentary vet consult</h2>
    <p className="exclusive">For every new member</p>
</div>
<div >
    <i class="fa-solid fa-briefcase-medical"></i>
    <h2 className="hr">Pet Pharmacy</h2>
    <p className="exclusive">Exclusive</p>
</div>
</div>

    </div>
  );
}

export default Dog;

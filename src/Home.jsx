import React from "react";
import{Link} from "react-router-dom";
// import { useNavigate } from "react-router-dom";
function Home() {
    // const navigate = useNavigate();
//     function onsubmit() {
//         navigate('/Contact-us')
//         navigate('/Account')
//         navigate('/cart')
//         navigate('/Home')
//  navigate('/Dog') 
//     }
    return (
        <div id="all">
            <img id="m" src="/image/p1.webp" alt="" width={"2000px"} />
            <img id="i" src="/image/p3.webp" alt="" width={"2000px"} />
            <h1 id="h">Who are you shopping for?</h1>
            <div id="pets">

              <Link to="/dog"><div><img src="/image/p9.webp" alt="" width={"250px"} height={"300px"} />
                </div>
                </Link>
                
                 <Link to="/cat"><div><img src="/image/p5.avif" alt="" width={"250px"} height={"300px"} />
                </div>
                </Link>
               <Link to=""> <div><img src="/image/p6.webp" alt="" width={"250px"} height={"300px"} /></div>
               </Link>
                <Link to=""><div><img src="/image/p7.webp" alt="" width={"250px"} height={"300px"} /></div>
                </Link>
               <Link to=""> <div><img src="/image/p8.avif" alt="" width={"250px"} height={"300px"} /></div>
            </Link>
            </div>
            <img id="p12" src="/image/p12.webp" alt="" width={"2000px"} />
            <div id="clinic">
                <img id="p13" src="/image/p13m.jpg" alt="" width={"2000px"} height={"500px"} />
                <div className="clinic1">
                    <img src="/image/p15.jpeg" alt="" width={"300px"} height={"200px"} />
                    <h2>Clinic</h2>
                    <p id="d">Across 5+ locations in bengaluru</p>
                </div>
                <div className="clinic1">
                    <img src="/image/p14.webp" alt="" width={"250px"} height={"250px"} />
                    <h2>Pet Pharmacy</h2>
                </div>
            </div>
            <div id="dcorner">
                <img src="/image/1.webp" alt="" width={"2000px"} />
                <div id="p2">
                    <div>
                        <img src="/image/p18.avif" alt="" /></div>
                    <div><img src="/image/p19.avif" alt="" /></div>
                    <div><img src="/image/p20.avif" alt="" /></div>
                    <div><img src="/image/p21.avif" alt="" /></div>
                    <div><img src="/image/p22.avif" alt="" /></div>
                    <div><img src="/image/p23.avif" alt="" /></div>
                </div>
            </div>
            <div id="ccorner">
                <img src="/image/c2.webp" alt="" width={"2000px"} />
                <div id="cc">
                    <img src="/image/p27.avif" alt="" />
                    <img src="/image/p28.avif" alt="" />
                    <img src="/image/p29.avif" alt="" />
                    <img src="/image/p30.avif" alt="" />
                    <img src="/image/p31.avif" alt="" />
                    <img src="/image/p32.avif" alt="" />

                </div>
            </div>
            <h1 id="s">Shop by breed</h1>
            <div id="breed">
                <div >
                    <img className="b" src="/image/p34.webp" alt="" width={"250px"} height={"300px"} />
                    <h2 className="a">Golden Retriever</h2>
                </div>
                <div>
                    <img className="b" src="/image/p37.jpg" alt="" width={"250px"} height={"300px"} />
                    <h2 className="a">Persian</h2>
                </div>
                <div>
                    <img className="b" src="/image/p35.jpg" alt="" width={"250px"} height={"300px"} />
                    <h2 className="a">Shih Tzu</h2>
                </div>
                <div>
                    <img className="b" src="/image/p36.jpg" alt="" width={"250px"} height={"300px"} />
                    <h2 className="a">Indie</h2>
                </div>
                <div>
                    <img className="b" src="/image/p51.jpeg" alt="" width={"200px"} height={"300px"} />
                    <h2 className="a">Labrodor</h2>
                </div>
                <div>
                    <img className="b" src="/image/p39.webp" alt="" width={"250px"} height={"300px"} />
                    <h2 className="a">Siamese</h2>
                </div>
            </div>
            {/* toy shop */}
            <h1 id="e">Shop by Store</h1>
            <div id="shop">
                <div id="monsoon">
                    <h2 className="mon">Monsoon store</h2>
                    <p className="upto">Upto 60% Off</p>
                    <img className="image" src="/image/p40.jpg" alt="" width={"250px"} height={"250px"} />
                </div>
                <div id="Fashion">
                    <h2 className="mon">Fashion Store</h2>
                    <p className="upto">Upto 60% Off</p>
                    <img className="image" src="/image/p41.jpeg" alt="" width={"250"} height={"250"} />
                </div>
                <div id="Accessories">
                    <h2 className="mon">Accessories Store</h2>
                    <p className="upto">Upto 60% Off</p>
                    <img className="image" src="/image/toy.jpg" alt="" width={"250"} height={"250"} />
                </div>
                <div id="Grooming">
                    <h2 className="mon">Grooming Store</h2>
                    <p className="upto">Upto 60% Off</p>
                    <img className="image" src="/image/p45.jpg" alt="" width={"250"} height={"250"} />
                </div>
                <div id="Supplements">
                    <h2 className="mon">Supplements Store</h2>
                    <p className="upto">Upto 60% Off</p>
                    <img className="image" src="/image/food.jpg" alt="" width={"250"} height={"250"} />
                </div>
                <div id="Toys">
                    <h2 id="mon">Toys Store</h2>
                    <p className="upto">Upto 60% Off</p>
                    <img className="image" src="/image/p50.jpg" alt="" width={"200"} height={"250"} />
                </div>
            </div>
            <h1 id="brand">Brands in focus</h1>
            <div id="focus">
                <div id="fo">
                    <img className="f" src="image/A52.jpg" alt="" width={"350px"} height={"400px"} />
                    <p className="b">Up to <b>17%off</b> </p>
                </div>
                <div className="fo">
                    <img className="f" src="image/b55.jpg" alt="" width={"300px"} height={"400px"} />
                    <p  className="b"><b>Best prices</b></p>
                </div>
                <div className="fo">
                    <img className="f" src="image/N56.jpg" alt="" width={"350px"} height={"400px"} />
                    <p className="b">Up to <b>18% off</b></p>
                </div>
                {/* <div className="fo">
    <img className="f" src="image/f57.jpg" alt="" width={"250px"}height={"400px"}/>
    <p><b>Best prices</b></p>
</div> */}
                <div className="fo">
                    <img className="f" src="image/f1.jpg" alt="" width={"300px"} height={"400px"} />
                    <p className="b">Up to <b>12% off</b></p>
                </div>
                <div className="fo">
                    <img className="f" src="image/s53.jpg" alt="" width={"350px"} height={"400px"} />
                    <p className="b"><b>Best prices</b></p>
                </div>
            </div>
        </div>
    )

}
export default Home;
import React from 'react'

const Home = () => {
  return (
    <div>
      <h1 className="fw-bold" style={{color:"orange",WebkitTextStroke:"2px black"}} align="center">INsTA DeL welcomes you anytime </h1>
      <img src='./img1.webp'width={1450} height={550} alt=''/>
      
      
    {/* Food Items Section */}
    <div className="container my-5">
        <h2 className="text-center mb-4">Popular Dishes</h2>
        <div className="row">
          {/* Card 1 - pizza */}
          
          <div className="col-md-4">
            <div className="card">
              <img src="./pizza.webp" className="card-img-top" alt="BPizza" />
              <div className="card-body">
                <h5 className="card-title">pizza's</h5>
                <p className="card-text">A Delicious pizza awaits for you.  </p>
                <button className="btn btn-danger">Order Now</button>
              </div>
            </div>
          </div>

          {/* Card 2 - burger*/}
          <div className="col-md-4">
            <div className="card">
              <img src="/burger.webp" className="card-img-top" alt="burger" />
              <div className="card-body">
                <h5 className="card-title">Cheesy Pizza</h5>
                <p className="card-text">A yummy burger loads stomact & </p>
                <button className="btn btn-danger">Order Now</button>
              </div>
            </div>
          </div>

          {/* Card 3 - Biryani */}
          <div className="col-md-4">
            <div className="card">
              <img src="/biryani.webp" className="card-img-top" alt="Biryani" />
              <div className="card-body">
                <h5 className="card-title">Chicken Dum Biryani</h5>
                <p className="card-text">Aromatic .</p>
                <button className="btn btn-danger">Order Now</button>
              </div>
            </div>
          </div>

          {/* Card 2 - haleem*/}
          <hr></hr><div className="col-md-4">
            <div className="card">
              <img src="/haleem.webp" className="card-img-top" alt="Haleem" />
              <div className="card-body">
                <h5 className="card-title">Haleem</h5>
                <p className="card-text">A yummy burger loads stomact & </p>
                <button className="btn btn-danger">Order Now</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="/icecream.webp" className="card-img-top" alt="icecream" />
              <div className="card-body">
                <h5 className="card-title">Ice cream</h5>
                <p className="card-text">A wonderful Flavours of creams</p>
                <button className="btn btn-danger">Order Now</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="/sweets.webp" className="card-img-top" alt="sweets" />
              <div className="card-body">
                <h5 className="card-title">sweets</h5>
                <p className="card-text"> fills heart with sweetness.</p>
                <button className="btn btn-danger">Order Now</button>
              </div>
            </div>
          </div>
          
          </div>
        </div>
      </div>
    
  );
};

    
    
 

export default Home

import React from 'react'
import "./homepage.css"
import { Link } from 'react-router-dom';

export default function Homepage() {
  return (
    <div className="homepage">
      <body>
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.LOkzu5Zc7UXnA_RjemJ7igHaHa&pid=Api&P=0&h=180"
            class="food-munch-logo"
          />
        </a>
        <input type='item' placeholder='Search here'></input>
        <h1 className='head'>HOMEPAGE</h1>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ml-auto">
            <Link class="nav-link active" id="navItem1" to="/choose">
              <h5>Why Choose Us?</h5>
              <span class="sr-only">(current)</span>
            </Link>
            <Link class="nav-link" to="/explore" id="navItem2"><h5>Explore Menu</h5></Link>
            <Link class="nav-link" to="/delivery" id="navItem3"><h5>Delivery & Payment</h5></Link>
            <Link class="nav-link" to="/followus" id="navItem4"><h5>Follow Us</h5></Link>
          </div>
        </div>
      </div>
    </nav>
    <div class="banner-section-bg-container d-flex justify-content-center flex-column">
      <div class="text-center">
        <h1 class="banner-heading mb-3">It Is A Good Restuarent!!</h1>
        <p class="banner-caption mb-4">Eat Smart & Healthy</p>
        <button class="custom-button">View Menu</button>
        <button class="custom-outline-button">Order Now</button>
      </div>
    </div>
  </body>
      </div>
    );
  }



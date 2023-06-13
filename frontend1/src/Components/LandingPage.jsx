import React from 'react';


const LandingPage = () => {
  return (
    <div className="">
      <section id="header">
        <div class="navbar">
          <div class="cont">
            <div class="ss bgc1 bgs_ss">
              <a href="ss_a"><p class="ss_p">Stock<span>Sure</span></p></a>
            </div>
            <div class="nav bgc1 bgs_nav">
              <ul class="nav_ul">
                <li class="nav_it"><a href="#Home">Home</a></li>
                <li class="nav_it"><a href="#About">About</a></li>
                <li class="nav_it"><a href="#Explore">Explore</a></li>
                <li class="nav_it"><a href="#Invest">Invest</a></li>
                <li class="nav_it"><a href="#Predict">Predict</a></li>
              </ul>
            </div>
            <div class="nav_si">
              <button class=" bgc1 bgs_si"><a href="/login">SignIn</a></button>
            </div>
          </div>
        </div>
      </section>
      <section id="Home">
        <div class="container">
          <div class="tag_home">
            <h1>Conquer your investment fears with StockSure.</h1>
            <p class="header_p">We are here to help you start your journey in the finance world.</p>
          </div>
          <div>

          </div>
        </div>
      </section>
      <section id="About">
        <div class="about">
          <div class="about_text">
            <h2 class="about_h2">What we aim at StockSure?</h2>
            <div class="about_div_p">
              <p class="about_p">Empowering individuals to conquer the stock market. Simplifying investing with user-friendly tools and expert guidance. Real-time data, portfolio management, and risk assessment at your fingertips. Protect your investments with our unique "Insure" feature and share in the profits. Unlock your financial potential and start your journey to success. Gain confidence, make informed decisions, and build your wealth with StockSure. Experience the power of investing with us.</p>
            </div>
          </div>
          <div class="about_img">
          </div>
        </div>
      </section>
      <section id="Explore">
        <div class="explore">
          <div class="explore_header">
            <p> Explore StockSure!</p>
          </div>
          <div class="invest bgc">
            <p class="egt egt_head ">Buy, Sell and <span>Insure</span>.</p>
            <p class="egt"> We provide you with 30% loss coverage.</p>
            <p class="egt">We just take 20% if and only if you make a profit.</p>
            <a class="ega" href="/login">Invest Now <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
          </div>
          <div class="learn bgc">
            <p class="egt egt_head">Learn more about <span>Finance</span></p>
            <p class="egt">Enhance your knowledge step-by-step.</p>
            <p class="egt">Master the key to profit.</p>
            <a class="ega" href="/learn.html">Learn More <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
          </div>
          <div class="predict bgc">
            <p class="egt egt_head">Be one step ahead using our <span>Predictor</span>.</p>
            <p class="egt">Play smart and stay away from huge losses.</p>
            <p class="egt">Make the most out if it while its free.</p>
            <a class="ega" href="#">Predict Now <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
          </div>
        </div>
      </section>
      <section id="Footer">
        <div class="footer">
          <ul class="foot">
            <li class=""><a href="#" class="">Home</a></li>
            <li class=""><a href="#" class="">Features</a></li>
            <li class=""><a href="#" class="">Pricing</a></li>
            <li class=""><a href="#" class="">FAQs</a></li>
            <li class=""><a href="#" class="">About</a></li>
          </ul>
            <p class="footer-text">© 2023 StockSure, Inc</p>
            <div class="footer_company">
              <ul class="circle">
                <li>S</li>
                <li>T</li>
                <li>O</li>
                <li>C</li>
                <li>K</li>
                <li>S</li>
                <li>U</li>
                <li>R</li>
                <li>E</li>

              </ul>
            </div>
        </div>
      </section>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
    </div>
  )
}

export default LandingPage;
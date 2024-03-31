<template>
  <!-- Modal -->

  <!-- Start Content -->
  <div class="container py-5">
    <div class="row">
      <div class="col-lg-3 carda">
        <div class="mt-3" align="center">
          <div class="cardc"></div>
        </div>
        <h5 class="mt-2"><b align="center"> Danh Mục</b></h5>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit"><i class="bi bi-search"></i></button>
        </form>
        <ul class="list-group mt-3">
          <li class="list-group-item d-flex justify-content-between align-items-center btn-23">
            <span class="text">IPHONE </span>
            <span aria-hidden="" class="marquee"> IPHONE</span>
         
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center btn-23">
           
              <span class="text">watch </span>
              <span aria-hidden="" class="marquee"> watch</span>
           
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center btn-23">
            <span class="text">ipad </span>
            <span aria-hidden="" class="marquee"> ipad</span>
         
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center btn-23">
            <span class="text">macbook </span>
            <span aria-hidden="" class="marquee"> macbook</span>
         
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center btn-23">
            
            <span class="text">airpods </span>
            <span aria-hidden="" class="marquee"> airpods</span>
         
          </li>
          <!-- Add more categories as needed -->
        </ul> 
        <div align="center" class="mt-2">
                <div class="cardb" ></div>
              </div>
      </div>

      <div class="col-lg-9 ">
        <div class="row">
          <div class="col-md-4">
            <div class="card mb-4 product-wap  bong">
              <div class="card rounded">
                <img
                  class="card-img  img-fluid"
                  src="../assets/img/hinh4.jpg"
                  alt="iPhone 13 Pro Max"
                  width="100%"
                  

                >
              </div>
              <div class="card-body buttonb">
                <a href="shop-single.html" class="h5 text-decoration-none"
                  ><b>iPhone 13 Pro Max</b> </a
                >
                <ul
                  class="w-100 list-unstyled d-flex justify-content-between mb-0"
                >
                  <li ><button class="xam"></button> &nbsp;
                    <button class="xanh"></button>&nbsp;
                    <button class="den"></button>&nbsp;</li>
                  <li class="pt-2">
                    <span
                      class="product-color-dot color-dot-red float-left rounded-circle ml-1"
                    ></span>
                    <span
                      class="product-color-dot color-dot-blue float-left rounded-circle ml-1"
                    ></span>
                    <span
                      class="product-color-dot color-dot-black float-left rounded-circle ml-1"
                    ></span>
                  </li>
                </ul>
                <ul class="list-unstyled d-flex justify-content-center mb-1">
                  <li>
                    <i class="text-warning fa fa-star"></i>
                    <i class="text-warning fa fa-star"></i>
                    <i class="text-warning fa fa-star"></i>
                    <i class="text-muted fa fa-star"></i>
                    <i class="text-muted fa fa-star"></i>
                  </li>
                </ul>
                <p class="text-center mb-0"><b class="text-danger">Giá: </b>$999.00 </p>
                <div >
                  <a
                    class="btn btn-success text-white hienmau"
                    href="shop-single.html"
                    ><i class="far fa-heart"></i
                  ></a> &nbsp;
                  <router-link class="btn btn-success text-white mt-2 hienmau" :to="{name: 'ProductDetails'}">
                    <i class="far fa-eye"></i>
                  </router-link>
                  &nbsp;
                  <router-link class="btn btn-success text-white mt-2 hienmau" :to="{name: 'ProductDetails'}">
                    <i class="fas fa-cart-plus"></i>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div div="row">
          <ul class="pagination pagination-lg justify-content-end">
            <li class="page-item disabled">
              <a
                class="page-link active rounded-0 mr-3 shadow-sm border-top-0 border-left-0"
                href="#"
                tabindex="-1"
                >1</a
              >
            </li>
            <li class="page-item">
              <a
                class="page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 text-dark"
                href="#"
                >2</a
              >
            </li>
            <li class="page-item">
              <a
                class="page-link rounded-0 shadow-sm border-top-0 border-left-0 text-dark"
                href="#"
                >3</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- Kết thúc Nội dung -->

  <!-- Bắt đầu Thương hiệu -->
  <section class="bg-light py-5">
    <div class="container my-4">
      <div class="row text-center py-3">
        <div class="col-lg-6 m-auto">
          <h1 class="h1">Thương hiệu của chúng tôi</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div class="col-lg-9 m-auto tempaltemo-carousel">
          <div class="row d-flex flex-row">
            <!--Controls-->
            <div class="col-1 align-self-center">
              <a
                class="h1"
                href="#multi-item-example"
                role="button"
                data-bs-slide="prev"
              >
                <i class="text-light fas fa-chevron-left"></i>
              </a>
            </div>
            <!--End Controls-->

            <!--Carousel Wrapper-->
            <div class="col">
              <div
                class="carousel slide carousel-multi-item pt-2 pt-md-0"
                id="multi-item-example"
                data-bs-ride="carousel"
              >
                <!--Slides-->
                <div class="carousel-inner product-links-wap" role="listbox">
                  <!--First slide-->
                  <div class="carousel-item active">
                    <div class="row">
                      <div class="col-3 p-md-5">
                        <a href="#"
                          ><img
                            class="img-fluid brand-img"
                            src="../assets/img/google.png"
                            alt="Brand Logo"
                        /></a>
                      </div>
                      <div class="col-3 p-md-5">
                        <a href="#"
                          ><img
                            class="img-fluid brand-img"
                            src="../assets/img/apple.jpg"
                            alt="Brand Logo"
                        /></a>
                      </div>
                      <div class="col-3 p-md-5">
                        <a href="#"
                          ><img
                            class="img-fluid brand-img"
                            src="../assets/img/congnhe.jpg"
                            alt="Brand Logo"
                        /></a>
                      </div>
                      <div class="col-3 p-md-5">
                        <a href="#"
                          ><img
                            class="img-fluid brand-img"
                            src="../assets/img/congnghe1.jpg"
                            alt="Brand Logo"
                        /></a>
                      </div>
                    </div>
                  </div>
                  <!--End First slide-->

                  <!--Second slide-->
                  <div class="carousel-item">
                    <div class="row">
                      <div class="col-3 p-md-5">
                        <a href="#"
                          ><img
                            class="img-fluid brand-img"
                            src="../assets/img/hinh4.jpg"
                            alt="Brand Logo"
                        /></a>
                      </div>
                      <div class="col-3 p-md-5">
                        <a href="#"
                          ><img
                            class="img-fluid brand-img"
                            src="../assets/img/hinh4.jpg"
                            alt="Brand Logo"
                        /></a>
                      </div>
</div>
</div>
                  <!--End Third slide-->
                </div>
                <!--End Slides-->
              </div>
            </div>
            <!--End Carousel Wrapper-->

            <!--Controls-->
            <div class="col-1 align-self-center">
              <a
                class="h1"
                href="#multi-item-example"
                role="button"
                data-bs-slide="next"
              >
                <i class="text-light fas fa-chevron-right"></i>
              </a>
            </div>
            <!--End Controls-->
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--End Brands-->
</template>

<script>
   export default {
      name: 'HelloWorld'
   }
</script>
<style>
  /* ... existing styles ... */

.bong{
  width: 85%;
}
  .bong:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.3s ease-in-out;
    width: 88%;

  }

  .hienmau:hover  {
    background-color: #ff050596;
  }

  .brand-img:hover {
    transform: scale(1.1);
    transition: transform 0.3s ease-in-out;
  }
  .xam {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #808080;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  .xanh {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #252554;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  .den {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #000000;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  .buttonb {
    padding: 0.8em 1.8em;
   
    position: relative;
    overflow: hidden;
    background-color: transparent;
    text-align: center;
    text-transform: uppercase;
    font-size: 16px;
    transition: .3s;
    z-index: 1;
    font-family: inherit;
    color: #030303;
   }
   
   .buttonb::before {
    content: '';
    width: 0;
    height: 300%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    background: linear-gradient(to bottom, rgb(214, 198, 198), rgb(157, 157, 219), rgb(243, 37, 243));
  
    transition: .5s ease;
    display: block;
    z-index: -1;
   }
   
   .buttonb:hover::before {
    width: 105%;
   }
   
   .buttonb:hover {
    color: #ffffff;
   }
   .carda {
    width: 250px;
    height: 460px;
    border-radius: 30px;
    background: #ffffff;
    box-shadow: 15px 15px 30px rgb(142, 141, 141),
                -15px -15px 30px rgb(151, 150, 150);
   }
   
   .btn-23,
.btn-23 *,
.btn-23 :after,
.btn-23 :before,
.btn-23:after,
.btn-23:before {
  border: 0 solid;
  box-sizing: border-box;
}

.btn-23 {
  -webkit-tap-highlight-color: transparent;
  -webkit-appearance: button;
  background-color: #000;
  background-image: none;
  color: #fff;
  cursor: pointer;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  font-size: 100%;
  font-weight: 900;
  line-height: 1.5;
  margin: 0;
  -webkit-mask-image: -webkit-radial-gradient(#000, #fff);
  padding: 0;
  text-transform: uppercase;
}

.btn-23:disabled {
  cursor: default;
}

.btn-23:-moz-focusring {
  outline: auto;
}

.btn-23 svg {
  display: block;
  vertical-align: middle;
}

.btn-23 [hidden] {
  display: none;
}

.btn-23 {
  
  border-width: 2px;
  overflow: hidden;
  padding: 0.8rem 3rem;
  position: relative;
}

.btn-23 span {
  display: grid;
  inset: 0;
  place-items: center;
  position: absolute;
  transition: opacity 0.2s ease;
}

.btn-23 .marquee {
  --spacing: 5em;
  --start: 0em;
  --end: 5em;
  -webkit-animation: marquee 1s linear infinite;
  animation: marquee 1s linear infinite;
  -webkit-animation-play-state: paused;
  animation-play-state: paused;
  opacity: 0;
  position: relative;
  text-shadow: #fff var(--spacing) 0, #fff calc(var(--spacing) * -1) 0,
    #fff calc(var(--spacing) * -2) 0;
}

.btn-23:hover .marquee {
  -webkit-animation-play-state: running;
  animation-play-state: running;
  opacity: 1;
}

.btn-23:hover .text {
  opacity: 0;
}

@-webkit-keyframes marquee {
  0% {
    transform: translateX(var(--start));
  }

  to {
    transform: translateX(var(--end));
  }
}

@keyframes marquee {
  0% {
    transform: translateX(var(--start));
  }

  to {
    transform: translateX(var(--end));
  }
}
.cardb {
  width: 50px;
  height: 50px;
  border-radius: 100px;
  background: #ffffff;
  box-shadow: 15px 15px 30px rgb(142, 141, 141),
              -15px -15px 30px rgb(151, 150, 150);
 }
 .cardc {
  width: 100px;
  height: 26px;
  border-radius: 100px;
  background: #333131;

 }
</style>

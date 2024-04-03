<template>
  <!-- Modal -->
<div>
  <img src="../assets/img/bg3.png" width="100%" alt="">
</div>
  <!-- Start Content -->
  <div class="container py-5 mt-5">
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

        <ul  class="list-group mt-3">
          <li v-for="(item, index) in listTenLoai" @click="getTenLoai(item.tenloai)" :key="index" class="list-group-item d-flex justify-content-between align-items-center btn-23">
            <span class="text">{{ item.tenloai }}</span>
            <span aria-hidden="" class="marquee"> {{item.tenloai}}</span>
          </li>
        </ul> 
        

        <div align="center" class="mt-2">
            <div class="cardb" ></div>
        </div>
      </div>

    
      <div class="col-lg-9">
        <div class="row">
          <div class="col-md-4" v-for="(item, index) in displayProduct" :key="index">
            <div class="card mb-4 product-wap bong product-card">
              <div class="container">
              <div class="card rounded hinh mt-2">
                <router-link  :to="{ name: 'ProductDetails', params: { id: item.id } }">
                     <img class="card-img img-fluid product-img mt-4 mb-4" :src="getImageUrl(item.img)" alt="iPhone 13 Pro Max">
                     </router-link>
              </div>
            </div>
              <div class="card-body buttonb ">
        
                  <b>{{ item.tensp }}</b> <br>
                  <b>{{ item.idcolor }}</b> <br>
                  <b>{{ item.idGB }} GB</b> 
               
                <ul class="list-unstyled d-flex justify-content-center mb-1">
                  <li>
                    <i class="text-warning fa fa-star"></i>
                    <i class="text-warning fa fa-star"></i>
                    <i class="text-warning fa fa-star"></i>
                    <i class="text-muted fa fa-star"></i>
                    <i class="text-muted fa fa-star"></i>
                  </li>
                </ul>
                <p class="text-center mb-0">
                  <b class="text-danger">Giá: </b>
                  <b class="text-decoration-line-through">{{ item.dongia }}</b>
                  <br>
                  <b class="text-danger">Chỉ Còn: </b>
                  <b>{{ item.giamgia }}</b>
                </p>
                <div >
                  <a
                    class="btn btn-success text-white hienmau"
                    href=""
                    ><i class="far fa-heart"></i
                  ></a> &nbsp;
                  <router-link class="btn btn-success text-white mt-2 hienmau" :to="{ name: 'ProductDetails', params: { id: item.id } }">
                    <i class="far fa-eye"></i>
                  </router-link>

                  &nbsp;
                  <router-link class="btn btn-success text-white mt-2 hienmau" :to="{name: 'cart' ,params: { id: item.id } }" @click="addToCart(item)">
                    <i class="fas fa-cart-plus"> </i>
                  </router-link>
                  
                </div>
              </div>
            </div>
          </div>
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
import axios from 'axios'

export default {
  name: 'HelloWorld',
  data() {
    return {
      listTenLoai: [], // Danh sách các loại sản phẩm
      Products: [], // Danh sách sản phẩm
      tenloai: null, // Biến để lưu trữ loại sản phẩm đang được chọn
      cartItems: [], // Danh sách sản phẩm trong giỏ hàng
    }
  },
  methods: {
    addToCart(product) {
      // Kiểm tra xem bộ nhớ cục bộ đã chứa các mục trong giỏ hàng chưa
      let existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

      // Tìm xem sản phẩm đã có trong giỏ hàng chưa
      const existingItemIndex = existingCartItems.findIndex(item => item.id === product.id);

      if (existingItemIndex !== -1) {
        // Nếu sản phẩm đã có trong giỏ hàng, cập nhật số lượng lên 1
        existingCartItems[existingItemIndex].quantity++;
      } else {
        // Nếu sản phẩm chưa có trong giỏ hàng, thêm vào giỏ hàng
        existingCartItems.push({
          id: product.id,
          tensp: product.tensp,
          dongia: product.giamgia,
          quantity: 1,
        });
      }

      // Lưu các mục giỏ hàng được cập nhật vào bộ nhớ cục bộ
      localStorage.setItem('cartItems', JSON.stringify(existingCartItems));

      // Cập nhật dữ liệu giỏ hàng để phản ánh các thay đổi trên giao diện người dùng
      this.cartItems = existingCartItems;
    },
    getTenLoai(tenloai) {
      this.tenloai = tenloai; // Cập nhật giá trị của biến tenloai
    },
    getImageUrl(item) {
      return `http://127.0.0.1:8000${item}`;
    }
  },
  computed: {
    displayProduct() {
      if (this.tenloai === null) {
        return this.Products;
      } else {
        return this.Products.filter(product => product.idmenu === this.tenloai);
      }
    }
  },
  created() {
    // Lấy danh sách menu từ cơ sở dữ liệu
    axios.get('http://127.0.0.1:8000/api/menu')
      .then(res => {
        this.listTenLoai = res.data;
        if (this.listTenLoai.length > 0) {
          this.tenloai = this.listTenLoai[1].tenloai;
        }
      })
      .catch(error => console.log(error));

    // Lấy tất cả sản phẩm từ cơ sở dữ liệu
    axios.get("http://127.0.0.1:8000/api/product")
      .then(res => {
        this.Products = res.data;
      })
      .catch(error => console.log(error));

    // Khi thành phần được tạo, truy xuất các mục giỏ hàng từ bộ nhớ cục bộ
    let existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    this.cartItems = existingCartItems;
  }
}
</script>
<style>

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
 .product-img {
  width: 100%;
  height: 200px; /* Điều chỉnh chiều cao tùy theo ý muốn */
  object-fit: cover; /* Chỉnh để hình ảnh đầy đủ trong card */
}
.product-card {
  height: 500px; /* Điều chỉnh chiều cao tùy theo ý muốn */
}
.hinh {
  height: 90%; /* Điều chỉnh chiều cao tùy theo ý muốn */
}
</style>

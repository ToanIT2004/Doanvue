<template>
    <!-- Top Nav -->
    <nav class="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block" id="templatemo_nav_top">
      <div class="container text-light">
        <div class="w-100 d-flex justify-content-between">
          <div>
            <i class="fa fa-envelope mx-2"></i>
            <a class="navbar-sm-brand text-light text-decoration-none" href="mailto:info@company.com">info@company.com</a>
            <i class="fa fa-phone mx-2"></i>
            <a class="navbar-sm-brand text-light text-decoration-none" href="tel:010-020-0340">010-020-0340</a>
          </div>
          <a v-if="title !== null" class="text-danger">Xin chào, {{ title }}</a>
          <!-- <a class="text-danger">Đăng xuất</a> -->
          <div>
            <a class="text-light" href="https://fb.com/templatemo" target="_blank" rel="sponsored"><i class="fab fa-facebook-f fa-sm fa-fw me-2"></i></a>
            <a class="text-light" href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram fa-sm fa-fw me-2"></i></a>
            <a class="text-light" href="https://twitter.com/" target="_blank"><i class="fab fa-twitter fa-sm fa-fw me-2"></i></a>
            <a class="text-light" href="https://www.linkedin.com/" target="_blank"><i class="fab fa-linkedin fa-sm fa-fw"></i></a>
          </div>
        </div>
      </div>
    </nav>
    
    <!-- Close Top Nav -->
  
    <!-- Header -->
    <nav class="navbar navbar-expand-lg navbar-light shadow">
      <div class="container">
        <button class="buttona" data-text="Awesome">
          <span class="actual-text">&nbsp;@APPLE  &nbsp;</span>
          <span aria-hidden="true" class="hover-text">&nbsp;@APPLE&nbsp;</span>
      </button>
  
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      
  
        <div class="collapse navbar-collapse" id="templatemo_main_nav">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item ">
              <router-link class="nav-link buttonb " :to="{ name: 'Home' }">Trang chủ </router-link>
            </li>
            <li class="nav-item ">
              <router-link class="nav-link buttonb" :to="{ name: 'About' }">Giới thiệu</router-link>
            </li>
            <li class="nav-item ">
              <router-link class="nav-link buttonb" :to="{ name: 'Shop' }">Cửa hàng</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link buttonb" :to="{ name: 'Contact' }">Liên hệ</router-link>
            </li>
            <li class="nav-item" v-show="title == null">
              <router-link class="nav-link buttonb" :to="{ name: 'user' }">Tài Khoản</router-link>
            </li>&ensp; &ensp;
            <li class="nav-item">
              <router-link class="nav-link buttonb " :to="{ name: 'cart' }"><i class="bi bi-cart3"></i></router-link>
            </li>
            <li class="nav-item" v-show="title !== null">
              <a @click="clearSession()" class="nav-link buttonb">Đăng xuất</a>
            </li>
          </ul>
 
        </div>
      </div>
    </nav>
    <!-- Close Header -->
  </template>
  
  <style scoped>
  /* Custom styling for hover effects */
  .navbar-nav .nav-link:hover {
    color: #020202; /* Change color on hover, adjust as needed */
  }
  
 
  /* === removing default button style ===*/
.buttona {
  margin: 0;
  height: auto;
  background: transparent;
  padding: 0;
  border: none;
  cursor: pointer;
}

/* button styling */
.buttona {
  --border-right: 6px;
  --text-stroke-color: rgba(0, 0, 0, 0.6);
  --animation-color: #ff0000;
  --fs-size: 2em;
  letter-spacing: 3px;
  text-decoration: none;
  font-size: var(--fs-size);
  font-family: "Arial";
  position: relative;
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke: 1px var(--text-stroke-color);
}
/* this is the text, when you hover on button */
.hover-text {
  position: absolute;
  box-sizing: border-box;
  content: attr(data-text);
  color: var(--animation-color);
  width: 0%;
  inset: 0;
  border-right: var(--border-right) solid var(--animation-color);
  overflow: hidden;
  transition: 0.5s;
  -webkit-text-stroke: 1px var(--animation-color);
}
/* hover */
.buttona:hover .hover-text {
  width: 100%;
  filter: drop-shadow(0 0 23px var(--animation-color))
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
  background: #97a9a9;
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
 
  </style>
  
  <script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        fullname: '',
        flag: false,
        title: localStorage.getItem('firstname')
      }
    },

    created() {
     

    },

    methods: {
      clearSession() {
        localStorage.clear();
        window.location.reload();
        alert('Bạn đã đăng xuất thành công')
      }
    }
  };
  </script>
  
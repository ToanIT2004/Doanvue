<template>
  <form @submit.prevent="submitForm">
    <div id="overlay" class="overlay"></div>
    <div class="container">
        <div id="thanhToan" class="modal card cart" style="width:600px">
            <label class="title text-danger" align="center"><b>Thông Tin Thanh Toán </b></label>
            <div class="row mt-4">
                <div class="col-6">
                <img src="../assets/img/ip15.jpg" alt="" style="width: 250px">
                 
                </div>
                <div class="col-6">
                    <p><b class="text-danger">Tên sản phẩm: </b><b> IPhone 15 pro max </b></p>
                    <p><b class="text-danger">Giá: </b><b> 19,000,000 đ </b></p>
                 
                    <!-- Hiển thị giá trị voucher và tổng giá sau khi áp dụng voucher -->
                    <p><b class="text-danger">Tạm Tính: </b> <b> 19,000,000 đ</b></p>
                    <p><b class="text-danger">Giảm giá từ voucher:  </b> <b> free ship</b></p>
                    <p><b class="text-danger">Tổng: </b> <b> 19,000,000đ</b></p>
                    <button type="submit" name="submit" class="btn btn-danger" @click="showConfirmation">Xác Nhận</button>&ensp;
                    <button type="button" class="btn btn-warning" @click="closePaymentModal">Đóng</button>
                </div>
            </div>
            <div class="row mt-5 " align="center">
                <label class="title text-danger"><b>Thông Tin Giao Hàng </b></label>
            
             
                    <div class="mt-3">
                        <b>Họ:&ensp;</b>
                        <input type="text" id="disabledTextInput" class="rounded" style="width: 150px" placeholder="">
                        <b>&ensp;Tên:&ensp;</b>
                        <input type="text" id="disabledTextInput" class="rounded" style="width: 150px" placeholder="">
                    </div>
                    <div class="mt-3">
                        <b>Email:&ensp;</b>
                        <input type="text" id="disabledTextInput" class="rounded" style="width: 250px" placeholder="">
                    </div>
                    <div class="mt-3">
                        <b>Địa Chỉ:&ensp;</b>
                        <input type="text" id="disabledTextInput" class="rounded" style="width: 400px" placeholder="">
                    </div>
                    <div class="mt-3">
                        <b>SDT:&ensp;</b>
                        <input type="text" id="disabledTextInput" class="rounded" placeholder="">
                    </div>
            </div>
        </div>
    </div>
</form>
<!-- code chi tiet san pham o day -->
  <div class="container">
    <div class="text-center mt-5">
      <h1>Chi Tiết Sản Phẩm</h1>
    </div>
    <div class="row mt-4">
      <!-- Hình ảnh Sản phẩm -->
      <div class="col-md-5">
        <img :src="getImageUrl(Products.img)" alt="Hình ảnh Sản phẩm" class="w-100">
        <div class="row mt-3">
          <div class="col-4 d-flex">
            <img :src="getImageUrl(Products.img1)" alt="Hình ảnh Sản phẩm" class="w-100 mx-2">
            <img :src="getImageUrl(Products.img2)" alt="Hình ảnh Sản phẩm" class="w-100 mx-2">
            <img :src="getImageUrl(Products.img3)" alt="Hình ảnh Sản phẩm" class="w-100 mx-2">
          </div>
        </div>
      </div>
      <!-- Chi tiết Sản phẩm -->
      <div class="col-md-7">
        <h2 :value="tensp">{{Products.tensp}}</h2>
        <h2 :value="idcolor">Màu: {{ Products.idcolor }}</h2>
        <h2 :value="idGB">Dung lượng: {{ Products.idGB }}GB</h2>
        <p :value="mota">{{ Products.mota }}</p>
        <h3 :value="dongia">Giá Sản Phẩm: {{Products.dongia}}$</h3>
        <button class="btn btn-danger " name="thanhtoan" @click="showPaymentModal">MUA </button>&ensp;
        <button class="btn btn-primary">   <router-link class="nav-link  " :to="{ name: 'cart' }"> <i class="bi bi-cart4"></i></router-link></button>
        
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "ChiTietSanPham",
  data() {
    return {
      mainImage: require("../assets/img/ip15.jpg"), // Đường dẫn hình ảnh

      Products: [],
      id: this.$route.params.id
    };
  },

  created() {
    // Lấy tất cả product ra
    axios.get("http://127.0.0.1:8000/api/product/" + this.id)
      .then(res => {
        this.Products = res.data;

      })
      .catch(error => console.log(error))
  },
  methods: {
    // Chỗ này nó sẽ tự động chạy vào public
    getImageUrl(item) {
      return `http://127.0.0.1:8000${item}`; // Đường dẫn của Laravel đến hình ảnh
    },
    changeMainImage(image) {
      this.mainImage = image;
    },
    showPaymentModal() {
        const data = {
          img: this.img,
          tensp: this.tensp,
          idcolor: this.idcolor,
          idGB: this.idGB,
          mota: this.mota,
          dongia: this.dongia,
        }
        console.log(data);
        var overlay = document.getElementById('overlay');
        var modal = document.getElementById('thanhToan');
        overlay.style.display = 'block';
        modal.style.display = 'block';
    },

     closePaymentModal() {
        var overlay = document.getElementById('overlay');
        var modal = document.getElementById('thanhToan');

        overlay.style.display = 'none';
        modal.style.display = 'none';
    },
    showConfirmation(){
        alert('Mua hàng thành công!');
    },
    submitVoucher(){
      // Xử lý logic áp dụng voucher
    },
    submitForm() {
      // Xử lý logic gửi biểu mẫu ở đây
    },
  }
};
</script>

<style scoped>
#thanhToan {
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 80%;
  width: 100%;
}
.overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
}

.modal {
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: white;
  z-index: 2;
}
</style>

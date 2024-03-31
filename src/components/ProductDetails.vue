<template>
  <div class="container">
    <div class="text-center mt-5">
      <h1>Chi Tiết Sản Phẩm</h1>
    </div>
    <div class="row mt-4">
      <!-- Hình ảnh Sản phẩm -->
      <div class="col-md-5">
        <img :src="mainImage" alt="Hình ảnh Sản phẩm" width="100%">
        <div class="row mt-3">
          <!-- Hình ảnh Sản phẩm Bổ sung -->
          <div v-for="(image, index) in additionalImages" :key="index" class="col-3">
            <img :src="image" alt="Hình ảnh Bổ sung" width="100%" @click="changeMainImage(image)" >
          </div>
        </div>
      </div>
      <!-- Chi tiết Sản phẩm -->
      <div class="col-md-7">
        <h2>Tên Sản Phẩm</h2>
        <p>Mô tả chi tiết về sản phẩm sẽ được hiển thị ở đây.</p>
        <h3>Giá Sản Phẩm: $1000</h3>
        <button class="btn btn-danger">MUA </button>&ensp;
        <button class="btn btn-primary"><i class="bi bi-cart4"></i></button>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDetails",
  data() {
    return {
      mainImage: require("../assets/img/ip15.jpg"), // Sửa đường dẫn hình ảnh
      additionalImages: [
        require("../assets/img/ip15-1.jpg"),
        require("../assets/img/ip15-2.jpg"),
        require("../assets/img/ip15-3.png"),
        require("../assets/img/ip15-4.jpg")
      ]
    };
  },
  methods: {
    changeMainImage(image) {
      this.mainImage = image;
    }
  }
};
</script>

<style scoped>
/* Thêm kiểu dáng cục bộ tại đây nếu cần */
</style>

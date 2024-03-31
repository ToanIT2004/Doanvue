<template>
  <div>
    <!-- Phần Về Apple -->
    <section class="nen text-white py-5">
      <div class="container">
        
        <div class="row align-items-center">
          <div class="col-md-8 text-center text-md-start">
            <div class="mb-4">
              <img
                src="../assets/img/hinh1.png"
                alt="Apple Products"
                class="img-fluid rounded-circle"
                style="max-width: 100%;"
              />
            </div>
            <h1 class="display-4 fw-bold">Chào mừng bạn đến với Apple</h1>
            <p >
              Khám phá những đổi mới và công nghệ mới nhất, làm định hình lại thế giới của điện tử.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Phần Sản Phẩm của Apple -->
    <section class="container py-5">
      <div class="row text-center pt-5 pb-3">
        <div class="col-lg-8 m-auto">
          <h1 class="display-4 fw-bold text-dark">Sản Phẩm Của Chúng Tôi</h1>
          <p class="lead">
            Khám phá một loạt các thiết bị và dịch vụ hiện đại hàng đầu.
          </p>
        </div>
      </div>
      <div class="row">
        <!-- Thẻ Sản Phẩm với Hiệu Ứng Hover -->
        <div
          v-for="(product, index) in products"
          :key="index"
          class="col-md-6 col-lg-3 pb-5"
        >
          <div class="h-100 py-5 services-icon-wap shadow apple-product">
            <div class="h1 text-dark text-center">
              <i :class="product.iconClass"></i>
            </div>
            <h2 class="h5 mt-4 text-center">{{ product.name }}</h2>
            <p class="text-center">{{ product.description }}</p>
          </div>
        </div>
        <!-- Kết Thúc Thẻ Sản Phẩm -->
      </div>
    </section>

    <!-- Thêm Thông Tin và Bố Cục 2 Cột -->
    <section class="container py-5">
      <div class="row">
        <!-- Cột 1 -->
        <div class="col-md-6">
          <h1 class="display-4 fw-bold text-dark" align="center">Về Apple</h1>
          <img src="../assets/img/nen1.png" width="100%" alt="">
          <p class="lead">
            Apple Inc. là một công ty công nghệ đa quốc gia có trụ sở tại Cupertino, California, Hoa Kỳ. Được thành lập bởi Steve Jobs, Steve Wozniak và Ronald Wayne vào năm 1976, Apple nhanh chóng trở thành một trong những công ty hàng đầu trên thế giới với các sản phẩm như iPhone, iPad, MacBook và nhiều sản phẩm khác.
          </p>
        </div>
        <!-- Cột 2 -->
        <div class="col-md-6">
          <h1 class="display-4 fw-bold text-dark" align="center">Chính Sách Bảo Hành</h1>
          <img src="../assets/img/nen2.jpg" width="100%" alt="">
          <p class="lead">
            Apple cam kết cung cấp chất lượng và độ tin cậy trong từng sản phẩm. Chính sách bảo hành của chúng tôi bao gồm các điều kiện và dịch vụ hỗ trợ, đảm bảo khách hàng cảm thấy tự tin khi sử dụng sản phẩm của Apple.
          </p>
        </div>
      </div>
    </section>

    <!-- Uy Tín Của Apple -->
    <section class="container py-5">
      <div class="row text-center py-3">
        <div class="col-lg-8 m-auto">
          <h1 class="display-4 fw-bold text-dark" align="center">Uy Tín Của Apple</h1>
          <img src="../assets/img/nen3.jpg" width="100%" alt="">
          <p class="lead">
            Apple đã xây dựng một uy tín cao trong ngành công nghiệp công nghệ với sự đổi mới liên tục và cam kết cung cấp trải nghiệm người dùng tốt nhất. Sự chú ý đặc biệt đến chất lượng và thiết kế đã làm cho Apple trở thành một trong những thương hiệu đáng tin cậy nhất trên thế giới.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AppleIntroduction',
  data() {
    return {
      products: [
        {
          name: 'iPhone',
          description: 'Trải nghiệm các mẫu iPhone mới nhất.',
          iconClass: 'fab fa-apple',
        },
        {
          name: 'MacBook',
          description: 'Laptop mạnh mẽ dành cho những người sáng tạo chuyên nghiệp.',
          iconClass: 'fas fa-laptop',
        },
        {
          name: 'Apple Watch',
          description: 'Đồng hồ thông minh đa năng cho cuộc sống hiện đại.',
          iconClass: 'fas fa-clock',
        },
        {
          name: 'iPad',
          description: 'Thiết bị máy tính bảng mạnh mẽ và tiện ích.',
          iconClass: 'fas fa-tablet-alt',
        },
        // Thêm sản phẩm khác nếu cần
      ],
    };
  },
};
</script>

<style scoped>
/* Navbar Styling */
.navbar {
  padding: 1rem 0;
  background-color: #997575; /* Black background color */
}

.navbar-brand {
  color: #d9bcbc;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
}

.navbar-brand img {
  margin-right: 10px;
}

/* Introduction Section Styling */
.bg-dark {
  background-color: #c2bfbf; /* Black background color */
}

.py-5 {
  padding-top: 3rem; /* Adjusted padding */
  padding-bottom: 3rem; /* Adjusted padding */
}

.display-4 {
  font-size: 2.5rem;
  font-weight: bold;
  color: #fff; /* Set text color to white */
}

.lead {
  font-size: 1.25rem;
  color: #d7a8a8; /* Set text color to white */
}

/* Product Section Styling */
.services-icon-wap {
  background-color: #d9c7c7; /* Dark background color */
  border-radius: 10px;
  transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Subtle box shadow */
  transform: scale(1); /* Initial scale */
}

.services-icon-wap:hover {
  box-shadow: 0 0 20px rgba(18, 16, 16, 0.2); /* Enhanced box shadow on hover */
  transform: scale(1.05); /* Scale up on hover */
}

/* Two-Column Section Styling */
.display-4 {
  font-size: 2.5rem;
  font-weight: bold;
  color: #e5e2e2; /* Set text color to black */
}

.lead {
  font-size: 1.25rem;
  color: #000000; /* Set text color to white */
}

/* Footer Section Styling */
.text-dark {
  color: #7f7f7f; /* Set text color to black */
}
.nen{
 background-color: #bdbdbd;
  width: 100%;
  height: 100%;
}
</style>

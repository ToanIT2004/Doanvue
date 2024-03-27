<template>
  <!-- Bắt đầu Footer -->
  <footer class="bg-dark" id="tempaltemo_footer">
    <div class="container">
      <div class="row">
        <div class="col-md-4 pt-5">
          <h2 class="h2 text-success border-bottom pb-3 border-light logo">
            Apple Shop
          </h2>
          <ul class="list-unstyled text-light footer-link-list">
            <li>
              <i class="fas fa-map-marker-alt fa-fw"></i>
              1 Infinite Loop, Cupertino, CA 95014
            </li>
            <li>
              <i class="fa fa-phone fa-fw"></i>
              <a class="text-decoration-none" href="tel:010-020-0340"
                >010-020-0340</a
              >
            </li>
            <li>
              <i class="fa fa-envelope fa-fw"></i>
              <a class="text-decoration-none" href="mailto:info@apple.com"
                >info@apple.com</a
              >
            </li>
          </ul>
        </div>

        <div class="col-md-4 pt-5">
          <h2 class="h2 text-light border-bottom pb-3 border-light">
            Sản phẩm
          </h2>
          <ul class="list-unstyled text-light footer-link-list">
            <li><a class="text-decoration-none" href="#">iPhone</a></li>
            <li><a class="text-decoration-none" href="#">iPad</a></li>
            <li><a class="text-decoration-none" href="#">MacBook</a></li>
            <li><a class="text-decoration-none" href="#">Apple Watch</a></li>
            <li><a class="text-decoration-none" href="#">AirPods</a></li>
            <li><a class="text-decoration-none" href="#">Phụ kiện</a></li>
          </ul>
        </div>

        <div class="col-md-4 pt-5">
          <h2 class="h2 text-light border-bottom pb-3 border-light">
            Thông tin thêm
          </h2>
          <ul class="list-unstyled text-light footer-link-list">
            <li><a class="text-decoration-none" href="#">Trang chủ</a></li>
            <li><a class="text-decoration-none" href="#">Về Apple</a></li>
            <li><a class="text-decoration-none" href="#">Cửa hàng</a></li>
            <li><a class="text-decoration-none" href="#">Hỏi đáp</a></li>
            <li><a class="text-decoration-none" href="#">Liên hệ</a></li>
          </ul>
        </div>
      </div>

      <div class="row text-light mb-4">
        <div class="col-12 mb-3">
          <div class="w-100 my-3 border-top border-light"></div>
        </div>
        <div class="col-auto me-auto">
          <ul class="list-inline text-left footer-icons">
            <li
              class="list-inline-item border border-light rounded-circle text-center"
            >
              <a
                class="text-light text-decoration-none"
                target="_blank"
                href="http://facebook.com/"
                ><i class="fab fa-facebook-f fa-lg fa-fw"></i
              ></a>
            </li>
            <li
              class="list-inline-item border border-light rounded-circle text-center"
            >
              <a
                class="text-light text-decoration-none"
                target="_blank"
                href="https://www.instagram.com/"
                ><i class="fab fa-instagram fa-lg fa-fw"></i
              ></a>
            </li>
            <li
              class="list-inline-item border border-light rounded-circle text-center"
            >
              <a
                class="text-light text-decoration-none"
                target="_blank"
                href="https://twitter.com/"
                ><i class="fab fa-twitter fa-lg fa-fw"></i
              ></a>
            </li>
            <li
              class="list-inline-item border border-light rounded-circle text-center"
            >
              <a
                class="text-light text-decoration-none"
                target="_blank"
                href="https://www.linkedin.com/"
                ><i class="fab fa-linkedin fa-lg fa-fw"></i
              ></a>
            </li>
          </ul>
        </div>
        <div class="col-auto">
          <label class="sr-only" for="subscribeEmail">Địa chỉ email</label>
          <div class="input-group mb-2">
            <input
              type="text"
              class="form-control bg-dark border-light"
              id="subscribeEmail"
              placeholder="Địa chỉ email"
            />
            <div class="input-group-text btn-success text-light">Đăng ký</div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-100 bg-black py-3">
      <div class="container">
        <div class="row pt-2">
          <div class="col-12">
            <p class="text-left text-light">
              Bản quyền &copy; 2022 Apple Inc. | Thiết kế bởi
              <a rel="sponsored" href="https://apple.com" target="_blank"
                >Apple</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  

  <!-- Kết thúc Footer -->
</template>

<script>
export default {
  watch: {
  },
  name: "HelloWorld",
};
</script>

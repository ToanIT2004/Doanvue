<template>
    <form @submit.prevent="submitForm">
        <div id="overlay" class="overlay"></div>
        <div class="container">
            <div id="thanhToan" class="modal card cart" style="width:600px">
                <label class="title text-danger" align="center"><b>Thông Tin Thanh Toán </b></label>
                <div class="row mt-4">
                  
                    <div class="col-12">
                        <table class="table table-hover table-striped">
                            <thead>
                              <tr align="center">
                                <th>Hình Ảnh</th>
                                <th>Tên Sản Phẩm</th>
                                <th>Màu</th>
                                <th>Giá</th>
                                <th>Số Lượng</th>
                                <th>voucher</th>
                                <th>Tổng</th>
                          
                              </tr>
                            </thead>
                            <tbody>
                              <tr align="center" class="align-middle">
                                <td><img src="../assets/img/ip15.jpg" alt="iPhone 15" width="100px"></td>
                                <td>Iphone 15 Pro Max 258GB</td>
                                <td>Xám</td>
                                <td>21,000,000đ</td>
                                <td><input class="text-center" type="number" name="quantity" id="quantity" min="1" value="1" style="width: 50px;"></td>
                                <td>free ship</td>
                                <td>21,000,000đ</td>
                             
                              </tr>
                            
                            </tbody>
                          </table>
                    
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
                <div class="mt-5" align="right">
                <button type="submit" name="submit" class="btn btn-danger" @click="showConfirmation">Xác Nhận</button>&ensp;
                <button type="button" class="btn btn-warning" @click="closePaymentModal">Đóng</button>
            </div>
            </div>
            </div>
        </div>
    </form>
    <div>
      <div align="center" class="mt-5">
        <h2>Giỏ Hàng</h2>
      </div>
      <div class="container mt-5">
        <div class="row">
            <div>
          <table class="table table-hover table-striped">
            <thead>
              <tr align="center">
                <th>Hình Ảnh</th>
                <th>Tên Sản Phẩm</th>
                <th>Màu</th>
                <th>Giá</th>
                <th>Số Lượng</th>
                <th>voucher</th>
                <th>Tổng</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in cartItems" :key="index" align="center" class="align-middle">
                <td><img :src="item.image" :alt="item.tensp" width="100px"></td>
                <td>{{ item.tensp }}</td>
                <td>{{ item.idcolor }}</td>
                <td>{{ item.dongia }}</td>
                <td><input class="text-center" type="number" name="quantity" :value="item.quantity" min="1" style="width: 50px;"></td>
                <td>{{ item.voucher }}</td>
                <td>{{ item.tong }}</td>
                <td class="fs-1">xoa</td>
              </tr>
            </tbody>
          </table>
 </div>
        </div>
      </div>
   
          <div class="row justify-content-end mb-5 mt-5">
            <div class="col-md-7" >
              <div class="row" >
                <div class="col-md-12 text-right border-bottom mb-5">
                  <h3 class="text-black h4 text-uppercase">Thành Tiền</h3>
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-md-6">
                  <span class="text-black">Tạm tính</span>
                </div>
                <div class="col-md-6 text-right">
                  <strong class="text-black">$230.00</strong>
                </div>
              </div>
              <div class="row mb-5">
                <div class="col-md-6">
                  <span class="text-black">Tổng cộng</span>
                </div>
                <div class="col-md-6 text-right">
                  <strong class="text-black">$230.00</strong>
                  <div> <button class="btn btn-danger mt-4" name="thanhtoan" @click="showPaymentModal">Thành Tiền </button></div>
                </div>            
              </div>
          
            </div>
            </div>
        </div>
  </template>
  
  <script>
  import { mapGetters } from 'vuex';
  export default {
    name: 'ShoppingCart',
    computed: {
    ...mapGetters(['cartItems'])
  },

    methods: {
        changeMainImage(image) {
      this.mainImage = image;
    },
    showPaymentModal() {
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
  height: 100%;
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

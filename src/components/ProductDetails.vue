<template>
  <form @submit.prevent="submitForm">
    <div id="overlay" class="overlay"></div>
    <div class="container ">
        <div id="thanhToan" class="modal card cart" style="width:600px">
            <label class="title text-danger" align="center"><b>Thông Tin Thanh Toán asd </b></label>
            <div class="row mt-4">
                <div class="col-6">
                <img :src="mainImage" alt="" style="width: 250px">
                 
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
  <div class="container mb-5">
    <div class="text-center mt-5">
      <h1><b>Chi Tiết Sản Phẩm </b> </h1>
    </div>
    <div class="row mt-4">
      <!-- Hình ảnh Sản phẩm -->
      <div class="col-md-5">
        <img :src="mainImage" alt="Hình ảnh Sản phẩm" class="w-100" @click="switchMainImage(getImageUrl(Products.img))">
        <div class="row mt-3">
          <div class="col-4 d-flex">
            
            <img :src="getImageUrl(Products.img1)" alt="Hình ảnh Sản phẩm" class="w-100 mx-2" @click="switchMainImage(getImageUrl(Products.img1))">
            <img :src="getImageUrl(Products.img2)" alt="Hình ảnh Sản phẩm" class="w-100 mx-2" @click="switchMainImage(getImageUrl(Products.img2))">
            <img :src="getImageUrl(Products.img3)" alt="Hình ảnh Sản phẩm" class="w-100 mx-2" @click="switchMainImage(getImageUrl(Products.img3))">
          </div>
        </div>
      </div>
      <!-- Chi tiết Sản phẩm -->
      <div class="col-md-7">
        <h2 :value="tensp"><b class="text-danger">Tên Sản Phẩm: </b>{{Products.tensp}}</h2>
        <h3 :value="idcolor"><b class="text-danger">Màu: </b> {{ Products.idcolor }}</h3>
        <h3 :value="idGB"><b class="text-danger">Dung Lượng: </b>{{ Products.idGB }}GB</h3>
        <p :value="mota" class="fs-4">{{ Products.mota }}</p>
        <h4 :value="dongia"><b class="text-danger">Giá: </b> <i class="del">{{Products.dongia}} </i>$ </h4>
        <h4 :value="giamgia"><b class="text-danger">Giá Chỉ Còn:  </b> {{Products.giamgia}}$</h4>
        <button class="btn btn-danger " name="thanhtoan" @click="showPaymentModal">MUA </button>&ensp;
        <button class="btn btn-primary">   <router-link class="nav-link  " :to="{ name: 'cart' }"> <i class="bi bi-cart4"></i></router-link></button>
        
      </div>
    </div>
  </div>
  <hr>
  <div class="container mt-5 mb-5">
   <b>chính Sách: </b> <p >
    Giá hiển thị đã bao gồm tất cả các khoản thuế. Giao hàng miễn phí cho tất cả đơn hàng.
1. Dịch vụ thương mại được cung cấp bởi các đối tác trao đổi của Apple. Báo giá giá trị trao đổi chỉ mang tính ước tính và giá trị thực tế có thể thấp hơn ước tính. Giá trị đổi cũ lấy mới sẽ khác nhau tùy theo tình trạng, năm và cấu hình của thiết bị đủ điều kiện đổi của bạn.Không phải tất cả các thiết bị đều đủ điều kiện nhận điểm tín dụng. Bạn phải ít nhất ở độ tuổi thành niên để đủ điều kiện giao dịch tín dụng. Giá trị đổi cũ lấy mới có thể sẽ được áp dụng cho thiết bị đủ điều kiện mới bạn mua. Ước tính giá trị thực tế được dựa trên việc có nhận được thiết bị đủ điều kiện khớp với thông tin bạn đã mô tả hay không. Thuế giá trị gia tăng (GTGT) có thể sẽ được tính trên toàn bộ giá trị của thiết bị mới bạn mua. Bạn phải xuất trình giấy tờ tùy thân hợp lệ (luật địa phương có thể yêu cầu lưu thông tin này). Các đối tác trao đổi của Apple có quyền từ chối, hủy bỏ hoặc giới hạn số lượng của bất kỳ giao dịch đổi cũ lấy mới nào vì bất kỳ lý do gì. Bạn có thể tìm hiểu thêm thông tin từ đối tác đổi cũ lấy mới của Apple về việc đổi cũ lấy mới và đối tác tái chế về việc tái chế các thiết bị đủ điều kiện. Các hạn chế và giới hạn có thể được áp dụng. Có thể sẽ áp dụng Điều khoản và giới hạn về việc tái chế thiết bị đủ điều kiện.

* Chương trình Trả Góp Hàng Tháng Với MoMo do (các) đối tác tín dụng cung cấp qua ứng dụng MoMo của Công Ty Cổ Phần Dịch Vụ Di Động Trực Tuyến (“MoMo”) chứ không phải Apple. Chỉ cư dân Việt Nam đủ điều kiện mới có thể mua sản phẩm đủ điều kiện qua chương trình này.
Tất cả sản phẩm được mua qua hình thức Trả Góp Hàng Tháng Với MoMo đều cần có tài khoản ví điện tử MoMo và phải được (các) đối tác tín dụng của MoMo phê duyệt. Nếu bạn có câu hỏi về điều kiện tín dụng của mình, vui lòng liên hệ với MoMo để nhận câu trả lời từ (các) đối tác tín dụng của MoMo. Ngoài ra, vui lòng tham khảo ứng dụng MoMo hoặc (các) đối tác tín dụng của MoMo để biết điều kiện, phí và phụ phí.
Apple có toàn quyền quyết định sản phẩm nào đủ điều kiện hưởng ưu đãi trả góp vào bất cứ lúc nào. Mọi thay đổi về việc lựa chọn sản phẩm, kỳ hạn trả góp và phí dịch vụ đều sẽ làm thay đổi ưu đãi trả góp hàng tháng. Phí dịch vụ quy định là phí được tính theo phần trăm hàng tháng. Áp dụng số tiền mua tối thiểu 3.750.000đ cho sản phẩm đủ điều kiện và cần phải thanh toán trước 20% cho mọi sản phẩm bạn mua.
Đơn hàng phải được đặt trên Apple Store Trực Tuyến www.apple.com/vn.
Sản phẩm được mua từ Apple Store Trực Tuyến Dành cho Doanh Nghiệp và Apple Store Trực Tuyến Dành Cho Ngành Giáo Dục không đủ điều kiện hưởng ưu đãi trả góp hàng tháng của MoMo.
Tiền sẽ được tính vào tài khoản MoMo của bạn khi sản phẩm được vận chuyển đến bạn. Phí dịch vụ hàng tháng trong ưu đãi trả góp của MoMo được tính dựa trên giá bán lẻ của sản phẩm do Apple cung cấp. Giá được hiển thị đã bao gồm thuế GTGT. Số tiền thanh toán hàng tháng được hiển thị chỉ là con số ước tính. Số tiền thanh toán hàng tháng thực tế của bạn sẽ được hiển thị trong phần báo cáo sử dụng trên ứng dụng MoMo.
Khi bạn chọn thanh toán qua hình thức Trả Góp Hàng Tháng Với MoMo, Apple có thể sẽ cần chia sẻ số điện thoại di động của bạn với MoMo để xác minh danh tính và hoàn tất yêu cầu thanh toán của bạn. Apple sẽ luôn xử lý thông tin của bạn theo Chính Sách Quyền Riêng Tư của Apple, có tại www.apple.com/legal/privacy/vn. Mọi thông tin do MoMo thu thập sẽ tuân thủ chính sách quyền riêng tư của họ.

° Chỉ dành cho người đăng ký mới và người đăng ký lại đủ điều kiện. 179.000đ/tháng sau thời gian dùng thử miễn phí. Chỉ áp dụng một ưu đãi cho mỗi ID Apple và một ưu đãi cho mỗi gia đình nếu bạn là thành viên của nhóm Chia Sẻ Trong Gia Đình, bất kể số lượng thiết bị bạn hoặc gia đình bạn mua. Ưu đãi này không còn hiệu lực nếu trước đây bạn hoặc gia đình đã từng nhận ưu đãi sử dụng Apple TV+ miễn phí trong ba tháng hoặc một năm. Ưu đãi có hiệu lực 3 tháng sau khi kích hoạt thiết bị hợp lệ. Gói đăng ký sẽ tự động gia hạn cho đến khi bị hủy. Có áp dụng hạn chế và các điều khoản khác.</p>

Chúng tôi sử dụng vị trí của bạn để hiển thị cho bạn các lựa chọn giao hàng nhanh hơn. Chúng tôi đã tìm thấy vị trí của bạn bằng địa chỉ IP của bạn hoặc vì bạn đã nhập vị trí đó trong lần truy cập Apple trước đó.
<div class="row">
  <div class="col-4"> 
  <b> <i class="bi bi-coin fs-1"></i> Trả góp hàng tháng với MoMo.</b>
  <hr>
<p>Thanh toán với lãi suất thấp, thời hạn lên đến 24 tháng và chỉ cần trả trước 20%.*</p>
  </div>
  <div class="col-4"> 
     <b > <i class="bi bi-phone-flip fs-1"></i>  Apple Trade In</b>
    <hr>
  <p>Đổi thiết bị đủ điều kiện của bạn lấy điểm tín dụng cho lần mua hàng tiếp theo.**</p> 
</div>
  <div class="col-4">
      <b> <i class="bi bi-truck fs-1"></i>  Giao hàng miễn phí ngày làm việc tiếp theo</b>
    <hr>
  <p>Chỉ khả dụng tại Thành Phố Hồ Chí Minh đối với một số sản phẩm Apple có sẵn nhất định được đặt hàng trước 15:00.</p>
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
      mainImage: require("../assets/img/ip15.jpg"), // Đường dẫn hình ảnh chính

      Products: [],
      id: this.$route.params.id
    };
  },

  created() {
    // Lấy tất cả thông tin sản phẩm
    axios.get("http://127.0.0.1:8000/api/product/" + this.id)
      .then(res => {
        this.Products = res.data;

      })
      .catch(error => console.log(error))
  },
  methods: {
    // Lấy đường dẫn hình ảnh từ Laravel
    getImageUrl(item) {
      return `http://127.0.0.1:8000${item}`; // Đường dẫn của Laravel đến hình ảnh
    },
    // Chuyển đổi hình ảnh chính khi click vào hình ảnh phụ
    switchMainImage(image) {
      this.mainImage = image;
    },
    // Hiển thị modal thanh toán
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

     // Đóng modal thanh toán
     closePaymentModal() {
        var overlay = document.getElementById('overlay');
        var modal = document.getElementById('thanhToan');

        overlay.style.display = 'none';
        modal.style.display = 'none';
    },
    // Hiển thị thông báo mua hàng thành công
    showConfirmation(){
        alert('Mua hàng thành công!');
    },
    // Xử lý logic áp dụng voucher
    submitVoucher(){
      // Xử lý logic áp dụng voucher
    },
    // Xử lý logic gửi biểu mẫu
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
.del{
  text-decoration: line-through;
}
</style>

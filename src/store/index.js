import { createStore } from 'vuex';

export default createStore({
  state: {
    cartItems: [] // Danh sách các sản phẩm trong giỏ hàng
  },
  mutations: {
    addToCart(state, product) {
      state.cartItems.push(product); // Thêm sản phẩm vào danh sách giỏ hàng
    }
  },
  getters: {
    cartItems: state => state.cartItems // Lấy danh sách sản phẩm trong giỏ hàng
  }
});

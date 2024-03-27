<template>
  <div class="center">
    <form class="form" @submit.prevent="createUser">
      <p class="title">Đăng ký</p>
      <p class="message">Đăng ký ngay để mua sắm dễ dàng !</p>
      <div class="d-flex">
        <label>
          <input class="input" type="text" v-model="lastname" placeholder="" />
          <span>Họ</span>
        </label>
        <span v-if="errors.value && errors.value.lastname" class="text-danger">{{errors.value.lastname[0]}}</span>
          <label>
            <input class="input" type="text" v-model="fullname" placeholder="" />
            <span>Tên</span>
          </label>
          <span v-if="errors.value && errors.value.firstname" class="text-danger">{{errors.value.firstname[0]}}</span> 
      </div>
      

      <label>
        <input class="input" type="email" v-model="email" placeholder="" />
        <span>Email</span>
      </label>
      <span v-if="errors.value && errors.value.email" class="text-danger">{{errors.value.email[0]}}</span>


      <label>
        <input class="input" type="password" v-model="password" placeholder="" />
        <span>Mật khẩu</span>
      </label>
      <span v-if="errors.value && errors.value.password" class="text-danger">{{errors.value.password[0]}}</span>

      <label>
        <input class="input" type="password" v-model="password_confirmation" placeholder="" />
        <span>Nhập lại mật khẩu</span>
      </label>
      <span v-if="errors.value && errors.value.password" class="text-danger">{{errors.value.password[0]}}</span>

      <button type="submit" class="submit">Đăng Ký</button>
      <p class="signin">
        Đã có tài khoản?
        <router-link class="nav-link" :to="{ name: 'usered' }"
          >Đăng Nhập</router-link
        >
      </p>
    </form>
  </div>
</template>
<script>
import axios from 'axios';
import { ref } from 'vue';

export default {
  name: "UserProfile",
  data() {
    return {
      errors: ref([])
    };
  },
  
  methods: {
    createUser() {
      const data = {
        lastname: this.lastname,
        firstname: this.fullname,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation
      };
      axios.post('http://127.0.0.1:8000/api/user', data)
        .then((response) => {
          if(response.status == 201) {
            this.$router.push('/usered')
            alert('Đăng ký thành công');
          }
        })
        .catch((error) => {
            if(error.response) {
              // console.log(error.response.data.errors)
              this.errors.value = error.response.data.errors
            }else {
              console.error('Error:', error.message);
            }
        })
    }
  }
}
</script>
<style>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-top: 30px; /* Thử tăng giá trị margin */
}

.form {
  display: flex;
  flex-direction: column;
  max-height: 530px;
  gap: 10px;
  max-width: 350px;
  padding: 20px;
  border-radius: 20px;
  position: relative;
  background-color: #1a1a1a;
  color: #fff;
  border: 1px solid #333;
}

.title {
  font-size: 28px;
  font-weight: 600;
  letter-spacing: -1px;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 30px;
  color: #00bfff;
}

.title::before {
  width: 18px;
  height: 18px;
}

.title::after {
  width: 18px;
  height: 18px;
  animation: pulse 1s linear infinite;
}

.title::before,
.title::after {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  border-radius: 50%;
  left: 0px;
  background-color: #00bfff;
}

.message,
.signin {
  font-size: 14.5px;
  color: rgba(255, 255, 255, 0.7);
}

.signin {
  text-align: center;
}

.signin a:hover {
  text-decoration: underline royalblue;
}

.signin a {
  color: #00bfff;
}

.flex {
  display: flex;
  width: 100%;
  gap: 6px;
}

.form label {
  position: relative;
}

.form label .input {
  background-color: #333;
  color: #fff;
  width: 100%;
  padding: 20px 05px 05px 10px;
  outline: 0;
  border: 1px solid rgba(105, 105, 105, 0.397);
  border-radius: 10px;
}

.form label .input + span {
  color: rgba(255, 255, 255, 0.5);
  position: absolute;
  left: 10px;
  top: 0px;
  font-size: 0.9em;
  cursor: text;
  transition: 0.3s ease;
}

.form label .input:placeholder-shown + span {
  top: 12.5px;
  font-size: 0.9em;
}

.form label .input:focus + span,
.form label .input:valid + span {
  color: #00bfff;
  top: 0px;
  font-size: 0.7em;
  font-weight: 600;
}

.input {
  font-size: medium;
}

.submit {
  border: none;
  outline: none;
  padding: 10px;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  transform: 0.3s ease;
  background-color: #00bfff;
}

.submit:hover {
  background-color: #00bfff96;
}

@keyframes pulse {
  from {
    transform: scale(0.9);
    opacity: 1;
  }

  to {
    transform: scale(1.8);
    opacity: 0;
  }
}
</style>

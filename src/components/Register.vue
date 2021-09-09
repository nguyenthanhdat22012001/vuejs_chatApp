<template>
   <div class="wrapper">
    <section class="form signup">
      <header>Register | Realtime Chat App</header>
      <form action="#" v-on:submit.prevent="register" enctype="multipart/form-data" >

        <div class="error-text"></div>

        <div class="field input">
          <label>Email Address</label>
          <input  type="email" v-model="email" placeholder="Enter your email" value="" >
        </div>

        <div class="field input">
          <label>Password</label>
          <input type="password" v-model="password" value="" placeholder="Enter new password" >
          <i class="fas fa-eye"></i>
        </div>

        <div class="field button">
          <input type="submit"  name="submit" value="Continue to Chat">
        </div>
      </form>
      <div class="link">Already signed up? <a href="login.php">Login now</a></div>
    </section>
  </div>
</template>

<script>
import * as firebase from 'firebase';
import 'firebase/auth';

export default {
  name: 'Register',
  props:[],
  data(){
    return {
      email: '',
      password:'',
      error:''
    }
  },
methods: {
    register() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then( () => {
          alert('Successfully registered! Please login.');
          this.$router.push('/');
        })
        .catch(error => {
          alert(error.message);
        });
    },
  },
}
</script>

<style>

</style>
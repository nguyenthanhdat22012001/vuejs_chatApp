<template>
    <div class="wrapper">
    <section class="form login">
      <header>Login | Realtime Chat App</header>
      <form @submit.prevent="login" enctype="multipart/form-data">
        <div class="error-text"></div>
        <div class="field input">
          <label>Email Address</label>
          <input type="email" v-model="email"  placeholder="Enter your email">
        </div>
        <div class="field input">
          <label>Password</label>
          <input type="password" v-model="password"  placeholder="Enter your password" >
          <!-- <i class="fas fa-eye"></i>    <font-awesome-icon icon="eye" /> -->
        </div>
        <div class="field button">
          <input type="submit" name="submit" value="Continue to Chat">
        </div>
      </form>
      <!-- <div class="link">Not yet signed up? <a href="index.php">Signup now</a></div> -->
        <router-link to="register" class="nav-link">Register</router-link>
    </section>
  </div>
</template>

<script>
import * as firebase from 'firebase';
import 'firebase/auth';

export default {

  data(){
   return {
      email: '',
      password:'',
      error:''
   }
  },
methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then( data => {
          alert('hello');
          console.log(data.email)
          this.$router.redirect();
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
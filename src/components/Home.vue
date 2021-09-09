<template>
   <div class="wrapper">
    <section class="users">
      <header>
        <div class="content">
          <!-- <?php 
              $row = getUserUnique_id($_SESSION['unique_id']);
          ?> -->
          <img src="" alt="">
          <div class="details">
            <!-- <span><?php echo $row['fname']. " " . $row['lname'] ?></span> -->
            <!-- <p><?php echo $row['status']; ?></p> -->
          </div>
        </div>
        <a href="" class="logout">Logout</a>
      </header>
      <div class="search">
        <span class="text">Select an user to start chat</span>
        <input type="text" placeholder="Enter name to search...">
        <button><i class="fas fa-search"></i></button>
      </div>
      <div class="users-list">
  
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return {
      
    }
  }

}
</script>

<style>

</style>
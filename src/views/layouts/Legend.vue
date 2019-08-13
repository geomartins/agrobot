
<template>
  <div>
    <app-header></app-header>
    <div class="wrapper" >
      <!-- Side Bar starts here -->
      <app-side-bar></app-side-bar>
      <!-- Side Bar end here -->

      <div class="main-panel">
        <!-- Navbar -->
        <app-nav-bar></app-nav-bar>
        <!-- End Navbar -->

        <!-- Main Contents ges here -->
        <slot></slot>

        <!-- --- footer here  -->
        <app-footer></app-footer>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header";
import SideBar from "./SideBar";
import Footer from "./Footer";
import NavBar from "./NavBar";

export default {
  components: {
    "app-header": Header,
    "app-side-bar": SideBar,
    "app-nav-bar": NavBar,
    "app-footer": Footer
  },
  async created(){
    
    let response = await this.$store.dispatch('protectAdmin',{ token: this.$store.getters.getToken});
    if(response && 'status' in response){
        if(response.status == 404){

            console.log(response.data.message)
            //this.customLogout();
        }

        if(response.status == 200){
            console.log(response.data.message)
        }
    }
  }
  
};
</script>



<template>
  <div>
    <app-legend>
      <div class="content">
        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h4 class="card-title"></h4>
              </div>
              <div class="card-body">
                 <custom-loader :loading='loading'></custom-loader>
               
    
                <div class="table-responsive">
                  <table class="table">
                    <thead class="text-primary">
                      <th>S/N</th>
                      <th class="tex-left">Subsciber Name</th>
                      <th>Package Details</th>
                      <th>Action </th>
                      <th></th>
                    </thead>
                    <tbody>

                      <tr v-for="( portfolio, index) in portfolios" :key="portfolio+index">
                        <td> {{ index + 1 }}</td>
                        <td class="tex-left"> {{ portfolio.user_id }}</td>
                        <td>
                             <p > <span class="nc-icon nc-paper" style="color: #51cbce"></span> &nbsp;  {{ portfolio.plan }} plan</p>
                              <p> <span class="nc-icon nc-money-coins" style="color: #51cbce"></span> &nbsp;   &#8358; {{ portfolio.cost }} </p>
                              <p> <span class="nc-icon nc-watch-time" style="color: #51cbce"></span>&nbsp;   {{ portfolio.start_date }} </p>
                            
                        </td>
                       
                       
                        <td>
                           

                             <router-link :to="{ name: 'UserPorfolio' }" class="btn btn-primary" style="font-size: 10px" >
                                    <i class="fa fa-folder-open"></i> Payment History
                            </router-link>

                            
                        </td>
                      </tr>
                      
                      
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </app-legend>
  </div>
</template>

<script>
import Legend from "../layouts/Legend";
import { pick } from "../../repositories/pick";

export default {
  components: {
    "app-legend": Legend
  },
  mixins: [pick],
  data() {
    return {
        portfolios: [],
        loading: false
    }
  },
  methods: {
     api_params: function(value){
      return { token: this.$store.getters.getToken };

    },
    async api_calls(){

      
      var response;

      // Start loader gif
      this.toggle_loading(true);
      response = await this.$store.dispatch('portfolio_list', this.api_params());

     if(response.success){
        this.portfolios = response.success;
      }


      if(response.failure){
        this.customAlert({type: 'error', text: response.failure, title: 'Oooops'});
      }

      // End loader gif
      this.toggle_loading(false);
       

    },
    async api_calls2(){

      
      var response;

      // Start loader gif
      this.toggle_loading(true);
      response = await this.$store.dispatch('users_list', this.api_params());

     if(response.success){
        this.$store.commit('updateUsersData',response.success);
        console.log(response.success);
      }


      // End loader gif
      this.toggle_loading(false);
       

    },
    validator: function(value){

    },
    toggle_loading: function(value){

      this.loading = value;

    },
    
  },
   created(){

        // Updating title meta tag
        this.$store.commit('updateTitle','Portfolios');

        ///// Fetching list of  portfolio
        this.api_calls();

        // //
        // this.api_calls2();


         

    }

    
};
</script>

<style scoped>
 

</style>

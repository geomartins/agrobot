import Vue from 'vue'
import axios from '../../axios-auth'

const state = {
    
}



const getters = {   //this.$store.getters.email

}

const mutations = {  //this.store.commit('updateEmail',value)


}

const actions = {

    async admin_list({commit},value){

        
        try {
            var response = await axios
             .get(
                 "/api/v1/admin_lists/",{ params: value}
             );

             return await response;
 
 
         }catch(error){
             return await error.response;
         }
   
        
    },


    
}

export default {
    state,
    getters,
    mutations,
    actions,
}
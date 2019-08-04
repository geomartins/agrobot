import Vue from 'vue'
import axios from 'axios'

const state = {
    
}



const getters = {   //this.$store.getters.email

}

const mutations = {  //this.store.commit('updateEmail',value)


}

const actions = {

    async transaction_list({commit},value){

       

        try {
            var response = await axios
             .get(
                 "http://lumen.lilycourt.ng/api/v1/transaction_lists/",{ params: value}
             );

             

             return await response;
 
 
        }catch(error){
             return await error.response;
        }
        
        
    },

    async transaction_list_search({commit},value){

       

        try {
            var response = await axios
             .get(
                 "http://lumen.lilycourt.ng/api/v1/transaction_lists_search/",{ params: value}
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
import Vue from 'vue'
import axios from 'axios'

const state = {
    
}



const getters = {   //this.$store.getters.email

}

const mutations = {  //this.store.commit('updateEmail',value)


}

const actions = {

    async users_list_edit({commit},value){

        try {
            var response = await axios
             .get(
                 "http://lumen.lilycourt.ng/api/v1/users_list_edit/",{ params: value}
             );

             return await response;
 
 
        }catch(error){
             return await error.response;
        }
 
        
    },


    async users_list_edit_confirm({commit},value){

        try {
            var response = await axios
             .get(
                 "http://lumen.lilycourt.ng/api/v1/users_list_edit_confirm",{ params: value}
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
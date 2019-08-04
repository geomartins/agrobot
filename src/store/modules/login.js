import Vue from 'vue'
import router from '../../routes'
import axios from 'axios'


const state = {

    
    
}



const getters = {   //this.$store.getters.email
    // email: (state) =>{
    //     return state.email;
    // },

   


}

const mutations = {  //this.store.commit('updateEmail',value)
    

    login: (state, value) => {
           
            localStorage.setItem("token",value.access_token);
            localStorage.setItem("fullname",value.fullname);   
        
    },
    

}

const actions = {

      async login({commit},value){

       

            try {
               var response = await axios
                .get(
                    "https://lumen.lilycourt.ng/api/v1/users/login/",{ params: value}
                );

                console.log('uuuuuuuu')
                return await response;
    
    
            }catch(error){
                 console.log(await error)
                return await error.response;
            }
            

            
     

        
        
    }

}

export default {
    state,
    getters,
    mutations,
    actions,
}


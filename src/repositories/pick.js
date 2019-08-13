import { store } from '../store/store';
export const pick ={

    data(){
        return {
            loading: false,
            toggle: false,
        }
    },

    methods:{

        
        toggle_loading: function(value){

          this.loading = value;

        },
       
        customRedirect(url){
            return window.location = url;
        },

        customLogout(){
            localStorage.removeItem('token');
            localStorage.removeItem('fullname');

            this.customRedirect('/'); 
        },
        customAlert(obj){

            
            return this.$swal({
                type: obj.type,
                title: obj.title,
                text: obj.text,
                footer: obj.footer
              });

              

        },
        clearInputField(obj){
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    obj[key] = '';
                }
            }
        },
        validateBrowser(){
             // Opera 8.0+
            var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

            // Firefox 1.0+
            var isFirefox = typeof InstallTrigger !== 'undefined';

            // Safari 3.0+ "[object HTMLElementConstructor]" 
            var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

            // Internet Explorer 6-11
            var isIE = /*@cc_on!@*/false || !!document.documentMode;

            // Edge 20+
            var isEdge = !isIE && !!window.StyleMedia;

            // Chrome 1 - 71
            var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

            // Blink engine detection
            var isBlink = (isChrome || isOpera) && !!window.CSS;

            var result = false;
           
            if(isChrome == true){
                result = true;
            }else{
                result = false;
            }

            return result;

        },
        requiredValidator(obj, value){

            let result = true

            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {

                    if(value == 'required'){

                        if(obj[key].length < 1){
                            return false;
                        }

                    }
                    
                }
            }

            return result;

        },

        customInvestmentPlan(){
            //return 2;
            var x = {
                "mortgage": {
                    percentage: "10",
                    duration: "3months",
                },
                "flexible": {
                    percentage: "10",
                    duration: "3months",
                },
                "outright": {
                    percentage: "100",
                    duration: "2weeks",
                },
                "3 installments": {
                    percentage: "100",
                    duration: "",
                },
                "6 installments": {
                    percentage: "100",
                    duration: "",
                },
                "12 installments": {
                    percentage: "100",
                    duration: "",
                }

                
            }

            return x;
        },

        isValidToken(token){
            const payload = this.payload(token);

           

            if(payload){

                if(payload.iss == "https://lumen.lilycourt.ng/api/v1/users/login"){
                    return true;
                }
                return false;
            }

            return false;
        },

        isValidTokenX(token){
            const payload = this.payload(token);

            if(payload){

            
                    return true;
                
                
            }

            return false;
        },
        payload(token){
            const payload  = token.split('.')[1];
            return this.decode(payload);

        },
        decode(payload){
            return JSON.parse(atob(payload));
        },
        protectAdmin(){

            var resultant;
            const storedToken = localStorage.getItem("token");
            if(storedToken){
                resultant = this.isValidTokenX(storedToken);
            }else{
                resultant = false;
            }


            return window.location.href ='/';

            console.log('result is ',resultant)

           if(resultant == false){
               window.location.href ='/';
           }
        },

        seoTitle(title){
            return title ? title : ''
        }

        
          

    },
    filters: {
        dateToHumanReadableForm: function (value) {
          if (!value) return ''
          value = value.toString()
          var dateData, dateObject, dateReadable;

            dateData = value; //For example

            dateObject = new Date(Date.parse(dateData));

            dateReadable = dateObject.toDateString();

            return dateReadable;
        },
        getNameFromId: function(value){

            

        //    var array1 = store.getters.getUsersData;
        //    return array1;
           

            //looping through array
            for(var arr in array1[0]){
                return arr.id;
            }

            return 2;
        }
    },
    metaInfo: {
        title: 'Lilycourt ',
        meta: [{
          vmid: 'description',
          name: 'description',
          content: 'Lilycourt Admin Portal'
        }],
        titleTemplate: (titleChunk) =>{
            var x = this;
            console.log(this);
            var dynamicTitle = '.........';
            
            if(dynamicTitle){
                return titleChunk ? `${dynamicTitle} |  ${titleChunk}` : 'Site Title';
            }

            return titleChunk ? `${titleChunk} ` : 'Site Title';
            
        }
    },
}
const intialState = {
    user:null,
    isRendered:false,
    isLoading:true,
    isError:false,
    isMobileNav:false,
    isDrop:false,
    activeTab:null
 }
 
 export default function AppReducer(state=intialState,action){
    switch(action.type){
       case "SET_USER":{
          return{
             ...state,
             user:action.user
          }
       }

       case "SET_TAB":{
         return{
            ...state,
            activeTab:action.activeTab
         }
      }
       case "SET_DROPDOWN":{
        return{
           ...state,
           isDrop:action.dropdown
        }
     }
 
       case "SET_NAV":{
          return{
             ...state,
             isMobileNav:action.nav
          }
       }
 
       case "SET_RENDER":{
          return{
             ...state,
             isRendered:action.render
          }
       }
 
       case "SET_LOADING":{
          return{
             ...state,
             isLoading:action.loading
          }
       }
       case "SET_ERROR":{
          return{
             ...state,
             isError:action.error
          }
       }
 
       default:
          return state
    }
 }
const intialState = {
    user:null,
    isRendered:false,
    isLoading:true,
    isError:false,
    isMobileNav:false,
    isDrop:false,
    activeTab:null,
    articles:null,
    listings:null,
    tags:null,
    pageCount:1,
    
 }
 
 export default function AppReducer(state=intialState,action){
    switch(action.type){
       case "SET_USER":{
          return{
             ...state,
             user:action.user
          }
       }

       case "APPEND_ARTICLES":{
         return{
            ...state,
            articles:[...state.articles,...action.articles]
         }
      }

       case "SET_PAGE_COUNT":{
          return{
             ...state,
             pageCount:action.pageCount
          }
       }

       case "SET_ARTICLES":{
         return{
            ...state,
            articles:action.articles
         }
      }

      case "SET_TAGS":{
         return{
            ...state,
            tags:action.tags
         }
      }

      case "SET_LISTINGS":{
         return{
            ...state,
            listings:action.listings
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
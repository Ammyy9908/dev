export const setUser = (user)=>({
    type:"SET_USER",
    user
 })

 export const setDrop = (dropdown)=>({
    type:"SET_DROPDOWN",
    dropdown
 })

 export const setTab = (activeTab)=>({
    type:"SET_TAB",
    activeTab
 })

 export const setArticles = (articles)=>({
    type:"SET_ARTICLES",
    articles
 })


 export const appendArticles = (articles)=>({
    type:"APPEND_ARTICLES",
    articles
 })

 export const setListings = (listings)=>({
    type:"SET_LISTINGS",
    listings
 })

 export const setTags = (tags)=>({
   type:"SET_TAGS",
   tags
})

export const setPageCount = (pageCount)=>({
   type:"SET_PAGE_COUNT",
   pageCount
})
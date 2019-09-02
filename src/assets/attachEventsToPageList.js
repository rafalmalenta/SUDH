export default function attachEventsToPageList(){
    var pageSelector = document.querySelectorAll('#activePageSelect')[0];
    pageSelector.addEventListener("change",(e)=>{
        
            //console.log(e.target.value);
            RESTControler.fetchArticles({page: e.target.value})
        
    })
}
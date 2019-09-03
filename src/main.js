import './styles/main.css';
import RESTController from './assets/RESTController'


// Please use https://open-platform.theguardian.com/documentation/
(function(){
    var RESTControler = new RESTController();
    
    
    RESTControler.fetchArticles({section:"all", page:1, tag: ""});
    var sectionSelect = document.querySelectorAll("#sectionSelect")[0];
    sectionSelect.addEventListener("change",(e)=>{        
            RESTControler.fetchArticles({section: e.target.value, page:1, tag: searchSelector.value});
        
    });
    var pageSelector = document.querySelectorAll('#activePageSelect')[0];
    pageSelector.addEventListener("change",(e)=>{  
        RESTControler.fetchArticles({section: sectionSelect.value, page: e.target.value, tag: searchSelector.value});       
    });
    var searchSelector = document.querySelectorAll('#newsContentSearch')[0];
    searchSelector.addEventListener("keypress",(e)=>{
        console.log(sectionSelect.value);
        if(e.code === "Enter")
            RESTControler.fetchArticles({section: sectionSelect.value, page: 1, tag:searchSelector.value});               
    });    
})()    
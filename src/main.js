import './styles/main.css';
import RESTController from './assets/RESTController'


// Please use https://open-platform.theguardian.com/documentation/
(function(){
    var RESTControler = new RESTController();
    
    
    RESTControler.fetchArticles({section:"all", page:1, tag: ""});
    var sectionSelect = document.querySelector("#sectionSelect");
    sectionSelect.addEventListener("change",(e)=>{        
            RESTControler.fetchArticles({section: e.target.value, page:1, tag: searchSelector.value});
        
    });
    var pageSelector = document.querySelector('#activePageSelect');
    pageSelector.addEventListener("change",(e)=>{  
        RESTControler.fetchArticles({section: sectionSelect.value, page: e.target.value, tag: searchSelector.value});       
    });
    var searchSelector = document.querySelector('#newsContentSearch');
    searchSelector.addEventListener("keypress",(e)=>{        
        if(e.code === "Enter")
            RESTControler.fetchArticles({section: sectionSelect.value, page: 1, tag:searchSelector.value});               
    }); 
    

    
})()    
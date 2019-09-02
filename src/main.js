import './styles/main.css';
import RESTController from './assets/RESTController'


// Please use https://open-platform.theguardian.com/documentation/
(function(){
    var RESTControler = new RESTController();
    //var PageControler = new PageController();
    //document.querySelectorAll(".wrapper")[0].addEventListener("click",RESTControler.fetchArticles)
    
    RESTControler.fetchArticles({section:null, page:1});
    var sectionSelect = document.querySelectorAll("#sectionSelect")[0];
    sectionSelect.addEventListener("change",(e)=>{
        if(e.target.value === "all"){
            console.log("jestem")
            RESTControler.fetchArticles({section: null, page:1})
        }
        else {
            //console.log(e.target.value);
            RESTControler.fetchArticles({section: e.target.value, page:1})
        }
    });
    var pageSelector = document.querySelectorAll('#activePageSelect')[0];
    pageSelector.addEventListener("change",(e)=>{  
        RESTControler.fetchArticles({section: sectionSelect.value, page: e.target.value});
       
    })
     console.log(pageSelector)
    //PageControler.render(12,32)
})()    
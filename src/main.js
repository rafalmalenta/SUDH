import './styles/main.css';
import RESTController from './assets/RESTController'


// Please use https://open-platform.theguardian.com/documentation/
(function(){
    var RESTControler = new RESTController();
    //var PageControler = new PageController();
    //document.querySelectorAll(".wrapper")[0].addEventListener("click",RESTControler.fetchArticles)
    
    RESTControler.fetchArticles();
   
    //PageControler.render(12,32)
})()    
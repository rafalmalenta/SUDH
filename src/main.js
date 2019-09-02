import './styles/main.css';
//import fetchArticle from './assets/fetchArticles'
import RESTController from './assets/RESTController'


// Please use https://open-platform.theguardian.com/documentation/
(function(){
    var RESTControler = new RESTController();
    //document.querySelectorAll(".wrapper")[0].addEventListener("click",RESTControler.fetchArticles)
    
    RESTControler.fetchArticles()
})()    
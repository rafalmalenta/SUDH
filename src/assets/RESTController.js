import PageRenderer from "./PageRenderer";
import Article from './Article';
//import attachEventsToPageList from './attachEventsToPageList'

function setDate30daysAgo(){
    var day,month,year;
    var dateToday = new Date();
    var date30DaysAgo = new Date();
    date30DaysAgo.setDate(dateToday.getDate() - 30);
    day = date30DaysAgo.getDate();
    month = date30DaysAgo.getMonth() + 1;
    year = date30DaysAgo.getFullYear();
    return `from-date=${year}-${month}-${day}&`    
}


export default class RESTController {    
    constructor(){
        this.baseURL = "http://content.guardianapis.com/search?api-key=baf7e7bf-09f3-4cfa-87a5-6044956c198f&";      
        this.articlesPerPage = "page-size=10&"; // incase default value changes 
        this.fromDate = setDate30daysAgo();
        this.PageRenderer = new PageRenderer();
    };
    fetchArticles(Settings) {
        var wichPage = `page=${Settings.page}&`
        var addinationalURL = "";
        if (Settings.section){              
            addinationalURL = addinationalURL +`section=${Settings.section}`            
        }        
        this.PageRenderer.articlesList = []
        //console.log(addinationalURL)       
        fetch(this.baseURL + this.fromDate + this.articlesPerPage + wichPage + addinationalURL)
        .then(response => {           
            return response.json();
        }).then(data => {            
            data.response.results.map((result)=>{                 
                var data ={
                    title: result.webTitle,
                    sectionName: result.sectionName,
                    dateOfPublication: result.webPublicationDate.split("T")[0],
                    fullArticleLink: result.webUrl,
                }
                var article = new Article( data );
                this.PageRenderer.addArticleToList(article);
                
            });
            console.log(this.PageRenderer.articlesList);
            this.PageRenderer.render(data.response.pages, Settings.page);
            //this.PageRenderer.attachListeners();
        });
    };
    
}
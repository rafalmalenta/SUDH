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
function setAddinationalURL(settings){
    var wichPage="";
    var section="";
    var tag ="";
    var addinationalURL = "" ;
    if(settings.page){
        wichPage = `page=${settings.page}&`;
    }
    //else     
    if (settings.section==="all"){              
        section = '';            
    }
    else section = `section=${settings.section}&`;
    addinationalURL = addinationalURL + section ;
    if (settings.tag === ""){              
        tag = '';            
    }
    else tag = `tag=${settings.tag}&`;
    addinationalURL = addinationalURL + tag ;
    console.log(wichPage + addinationalURL)
    return wichPage + addinationalURL;      
}


export default class RESTController {    
    constructor(){
        this.constantURLpart = "http://content.guardianapis.com/search?api-key=baf7e7bf-09f3-4cfa-87a5-6044956c198f&page-size=10&"+setDate30daysAgo();      
        //page-size set to 10 incase default value changes        
        this.PageRenderer = new PageRenderer();
    };
    fetchArticles(settings) {
        //each fetch clears List      
        this.PageRenderer.articlesList = [];
        var addinationalURL = setAddinationalURL(settings);
         
        fetch(this.constantURLpart + addinationalURL)
        .then(response => {           
            return response.json();
        }).then(data => {            
            data.response.results.map((result)=>{                 
                var data = {
                    title: result.webTitle,
                    sectionName: result.sectionName,
                    dateOfPublication: result.webPublicationDate.split("T")[0],
                    fullArticleLink: result.webUrl,
                }
                var article = new Article( data );
                this.PageRenderer.addArticleToList(article);                
            });           
            this.PageRenderer.render(data.response.pages, settings.page);            
        });
    };
    
}
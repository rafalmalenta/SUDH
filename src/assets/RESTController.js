function setDate30daysAgo(){
    var day,month,year;
    var dateToday = new Date();
    var date30DaysAgo = new Date();
    date30DaysAgo.setDate(dateToday.getDate() - 30);
    day = date30DaysAgo.getDate();
    month = date30DaysAgo.getMonth()+1;
    year = date30DaysAgo.getFullYear();
    return `from-date=${year}-${month}-${day}&`    
}

export default class RESTController {    
    constructor(){
        this.baseURL = "http://content.guardianapis.com/search?api-key=baf7e7bf-09f3-4cfa-87a5-6044956c198f&";      
        this.articlesPerPage = "page-size=10&"; // incase default value changes 
        this.fromDate = setDate30daysAgo()
    };
    fetchArticles(Settings) {        
        fetch(this.baseURL + this.fromDate )
        .then(response => {           
            return response.json();
        }).then(data => {
            console.log(data.response)
        });
    };
    renderArticles(articles){

    }
}
export default class PageRenderer {    
    constructor(){        
        this.articlesList = [];        
        this.readLaterList = [];
        this.paginatorDOM = document.querySelectorAll("#activePageSelect");
        this.articlesWrapper = document.querySelectorAll("#newsList");       
    };
    render(pagesCount, page){
        var template = "";
        //"Paginator" render
        this.paginatorDOM[0].innerHTML= "";//clear each render
        this.articlesWrapper[0].innerHTML = "";
        for(let i=1; i <= pagesCount; i++){
            var opt = document.createElement('option');       
            opt.appendChild( document.createTextNode(`${i}`) );
            opt.value = `${i}`;
            page = parseInt(page);
            if(i === page){
                opt.selected = true;                
            }      
            this.paginatorDOM[0].appendChild(opt);            
        }
        this.articlesList.map((article)=>{
           template = template + article.createTemplate();
            
        }) 
        this.articlesWrapper[0].innerHTML = template  
    }
    addArticleToList(article){
        this.articlesList.push(article)
    }            
            
    
}
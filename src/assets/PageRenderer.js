export default class PageRenderer {    
    constructor(){        
        this.articlesList = [];
        this.readLaterList = [];
        this.paginatorDOM = document.querySelectorAll("#activePageSelect");
        this.articlesWrapper = document.querySelectorAll("#newsList");       
    };
    render(pagesCount, articlesList){
        var template;
        //"Paginator" render
        this.paginatorDOM[0].innerHTML= "";//clear each render
        //this.articlesWrapper[0].innerHTML = "";
        for(let i=0; i<pagesCount; i++){
            var opt = document.createElement('option');       
            opt.appendChild( document.createTextNode(`${i+1}`) );
            opt.value = `${i+1}`;             
            this.paginatorDOM[0].appendChild(opt); 
            //console.log(this.paginatorDOM)
        }
        this.articlesList.map((article)=>{
            template = template + article.createTemplate();
            
        }) 
        this.articlesWrapper[0].innerHTML = template  
    }
    addArticleToList(article){
        this.articlesList.push(article)
    }    
        //newList render
        //articlesList.map(article=>{
            //article.render()
        //})
            
    
}
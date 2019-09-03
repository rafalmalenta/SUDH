export default class PageRenderer {    
    constructor(){        
        //this.articlesList = [];        
        this.readLaterList = [];
        this.paginatorDOM = document.querySelectorAll("#activePageSelect");
        this.articlesWrapper = document.querySelectorAll("#newsList"); 
        this.delegateClickToArticleList(); 
        this.delegateRemoveToReadLaterList();
        if(localStorage){
            this.storage = localStorage;
            this.retriveStorageData();
            this.renderListForLaterRead()
            //console.log("strage istnieje",this.storage.getItem('data'))
        }     
        //localStorage.clear()
    };
    retriveStorageData(){
        this.readLaterList = JSON.parse(this.storage.getItem('data'));
    }
    render(pagesCount, page){
        var template = "";
        //"Paginator" render
        this.paginatorDOM[0].innerHTML= "";//clear each render
        this.articlesWrapper[0].innerHTML = "";
        for(let i=1; i <= pagesCount; i++){
            var option = document.createElement('option');       
            option.appendChild( document.createTextNode(`${i}`) );
            option.value = `${i}`;
            page = parseInt(page);
            if(i === page){
                option.selected = true;                
            }      
            this.paginatorDOM[0].appendChild(option);            
        }
        this.articlesList.map((article)=>{
           template = template + article.createTemplate();            
        }) 
        this.articlesWrapper[0].innerHTML = template  
    }
    addArticleToList(article){
        this.articlesList.push(article)
    } 
    addForLaterRead(articleId){       
        var alreadyExist = this.readLaterList.some((element)=>{
            if(element.title === this.articlesList[articleId].title)
            return true
        });
        if(!alreadyExist){
            this.readLaterList.push({title:this.articlesList[articleId].title, link:this.articlesList[articleId].fullArticleLink} ); 
            this.storage.setItem("data", JSON.stringify(this.readLaterList))
            //console.log(this.storage.getItem)           
        }
        this.renderListForLaterRead()
    }
    delegateClickToArticleList(){
        var articlesList = document.querySelector('#newsList');
        articlesList.addEventListener("click",(e)=>{       
            if(e.target.tagName==="BUTTON"){
                var button = e.target;
                var articleId = button.closest("article").attributes.props.value;
                this.addForLaterRead(articleId);                
            }               
        }); 
    };
    delegateRemoveToReadLaterList(){
        var readLaterList = document.querySelector('ul.readLaterList');       
        readLaterList.addEventListener("click",(e)=>{       
            if(e.target.tagName==="BUTTON"){
                var button = e.target;
                var articleId = button.closest("li").attributes.props.value;               
                console.log(articleId);
                this.remove(articleId);               
            }               
        }); 
    };
    remove(articleId){
        this.readLaterList.splice(articleId, 1);        
        this.storage.setItem("data", JSON.stringify(this.readLaterList));
        this.renderListForLaterRead();
    }

    renderListForLaterRead(){
        var readLaterList = document.querySelector('ul.readLaterList');
        var listItemsHTML="";
        this.readLaterList.forEach((element,index)=>{
            listItemsHTML = listItemsHTML + `
                <li props="${index}">
                    <h4 class="readLaterItem-title">${element.title}</h4>
                        <section>
                        <a href="${element.link}" class="button button-clear">Read</a>
                        <button class="button button-clear">Remove</button>
                    </section>
                </li>`;                
        })
        readLaterList.innerHTML = listItemsHTML
        

    }          
            
    
}
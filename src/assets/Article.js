export default class Article{    
    title = "";
    sectionName = "";
    dateOfPublication ="";
    fullArticleLink = "";
    template=``
    constructor(data){
        this.title = data.title;
        this.sectionName = data.sectionName;
        this.dateOfPublication = data.dateOfPublication;
        this.fullArticleLink = data.fullArticleLink;

    }
    createTemplate(){
        return  `
        <li>
            <article class="news">
                <header>
                <h3>${this.title}</h3>
                </header>
                <section class="newsDetails">
                <ul>
                    <li><strong>Section Name:</strong> ${this.sectionName}</li>
                    <li><strong>Publication Date:</strong> ${this.dateOfPublication}</li>
                </ul>
                </section>
                <section class="newsActions">
                <a href='${this.fullArticleLink}' class="button">Full article</a>
                <button class="button button-outline">Read Later</button>
                </section>
            </article>
        </li>
        `
    }
}
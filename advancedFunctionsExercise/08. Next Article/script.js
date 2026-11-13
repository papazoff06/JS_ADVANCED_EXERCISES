function getArticleGenerator(articles) {
        let contentRef = document.getElementById('content');
        return function (){
            while (articles.length > 0) {
                let cuurentArticle = articles.shift();
                let article = document.createElement('article');
                article.textContent = cuurentArticle;
                contentRef.appendChild(article);
                break;
        }  
    }   
 }


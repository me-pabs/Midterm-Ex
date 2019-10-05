$(function(){ 
    var newsList = $('#news-list');
    var searchButton = $('#search-news');
    var result = $('#result');

    searchButton.on('click', function(e){
      //Do the magic here
      console.log("Button Clicked")
      searchNews();
    });

     const searchNews = async () => { 
         try {
            const news = await NEWS_SERVICES.getNews();
            console.log(news.articles);
            await fetchResult(news.totalResults);
            await fetchNews(news.articles);
         }
         catch(err){
             console.log(err);
         }
     }

     function fetchResult(res) {
        result.text(`You have ${res}result`);
     }

     function fetchNews(news){
         var newsItem = '';
         news.forEach(function(res) {
             if(res.urlToImage){
                 
             } 
             newsItem = `
                            <li>
                            <img src="${res.urlToImage}" alt="">
                            <h4>${res.content}</h4>
                            <h5>${res.author}</h5>
                            <p>${res.description}</p>
                             <a href="${res.url}">Go to Page</a>
                            </li>
                            `;
            newsList.append(newsItem);       
         })

        
     }
})
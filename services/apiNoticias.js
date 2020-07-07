const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('e985034a9d1b47c2b0e0a41247c2c42e');

var noti = {};

async function noticias(){
    
    // To query /v2/top-headlines
    // All options passed to topHeadlines are optional, but you need to include at least one of them
    var datos = await newsapi.v2.topHeadlines({
        sources: 'google-news-ar',
        
    }).then(response => {
      return response.articles;
      /*
        {
          status: "ok",
          articles: [...]
        }
      */
     
    });
    return datos
}

noti.getNoticias = noticias
module.exports =noti



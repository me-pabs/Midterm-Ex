const NEWS_SERVICES = {
     getNews : (function () {
        return $.ajax({
            type : 'get',
            url : `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}&country=${COUNTRY_CODE}`
        })
    })
}
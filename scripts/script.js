var request = new XMLHttpRequest();

request.onload = function () {
    let response = JSON.parse(request.response);
    let articles = response.articles;
    let newshtml = "";

    let bennernews = `<div class="box-main">
                            <div class="title-section">
                                <div class="first-half">${articles[0].title} <a href="${articles[0].url}">Read more...</a></div>
                            </div>
                            <div class="second-half">
                                <img id="bennerimg" src="${articles[0].urlToImage}" alt="Microsoft" width="40%">
                            </div>
                        </div>`
    document.querySelector(".banner").innerHTML = bennernews;
    articles.forEach(element => {
        let news = `<div class="container"">
                        <img src="${element.urlToImage}" class="news-img" alt="Image" style="width: 50%;margin: 2% 0;">
                        <div class="news-title">
                            <h3 class="heading">${element.title}</h3>
                        </div>
                        <div class="news-description" style="padding: 0 2%;
                        margin-bottom: 2%;">
                            <p>${element.description} <a href="${element.url}" target="_blank">read more</a></p>
                        </div>
                    </div>`;
        newshtml += news;
    });
    document.querySelector("#news-content").innerHTML = newshtml;
}
var contenturl = "country=in";
if (document.title.includes("Covid")){
    contenturl = "q=covid&country=in";
}
else if(document.title.includes("Technical")){
    contenturl = "country=in&category=technology";
}else if(document.title.includes("Politics")){
    contenturl = "country=in&q=political";
}
    // covid.addEventListener("click", function(e){
    //     // e.preventDefault();
    //     console.log("I am annoying you");
    //     contenturl = "q=covid&country=in";
    //     return false;
    // }); 
    // covid.onclick = function(){
    //     contenturl = "q=covid&country=in";
    // };
    let apiURL = `https://newsapi.org/v2/top-headlines?${contenturl}&apiKey=4d9c5b5dac014dd49d63889d8f26490f`;
request.open('get', apiURL);
request.send();




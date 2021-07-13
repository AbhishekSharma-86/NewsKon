function news(){var request = new XMLHttpRequest();
    request.onload = function () {
        let response = JSON.parse(request.response);
        let articles = response.articles;
        let newshtml = "";
        let bennernews = `<div class="box-main">
                                <div class="title-section">
                                    <div class="first-half">${articles[0].title}</div>
                                    <a href="${articles[0].url}">Read more...</a>
                                </div>
                                <div class="second-half">
                                    <img id="bennerimg" src="${articles[0].urlToImage}" alt="Microsoft" width="500px">
                                </div>
                            </div>`
        document.querySelector(".banner").innerHTML = bennernews;
        articles.forEach(element => {
            let news = `<div class="container" style="display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 70%;
            background-color: azure;
            margin: 3% 0;">
                            <img src="${element.urlToImage}" class="news-img" alt="Image" style="width: 50%;margin: 2% 0;">
                            <div class="news-title">
                                <h3 class="heading" style="font-size: 2em;
                                font-family: 'Lato', sans-serif;
                                padding: 0 10%;
                                margin-bottom: 2%">${element.title}</h3>
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
    request.open('get', 'https://newsapi.org/v2/top-headlines?q=covid&country=in&apiKey=4d9c5b5dac014dd49d63889d8f26490f');
    request.send();
    }
    news();
    
    
    
let quoteText = '';
let quoteAuthor = '';


function fetchQuote(){
    $.ajax({
        url: "https://quotable-quotes.p.rapidapi.com/randomQuotes",
        headers: {"X-RapidAPI-Host": "quotable-quotes.p.rapidapi.com",
                "X-RapidAPI-Key": "dde3708e16msh47d06fd0b8601ccp1f8f94jsn300f369e0c7e"}
        }).done(function(res){
            quoteAuthor = res.author;
            quoteText = `"` + res.quote + `"`;
            loadQoute();
            setTweetLink();
        });

}
fetchQuote();

function loadQoute(){
    $("#text").css({"animation": "0.5s disappear-animation"});
    $("#author").css({"animation": "0.5s disappear-animation"});
    setTimeout(function(){
        $("#text").text(quoteText).css({"animation": "0.5s appear-animation"});
        $("#author").text("- " + quoteAuthor).css({"animation": "0.5s appear-animation"});
    }, 500);
}

function setTweetLink(){
    let encodedText = encodeURIComponent(quoteText);
    let encodedAuthor = encodeURIComponent(quoteAuthor);
    let $tweetQuote_a = $("#tweet-quote");
    let href = $tweetQuote_a.attr("href").split("?")[0];
    $tweetQuote_a.attr("href", href + "?text=" + encodedText + "%20" + encodedAuthor);
}

$("#new-quote").click(fetchQuote);
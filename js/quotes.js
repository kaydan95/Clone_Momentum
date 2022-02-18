const quotes = [
    {
        quote : "I'd like to tell you the story of the eyes that changed my world.",
        movie : "- I Origins (2014)",
        img: "iorigins.png"
    },
    {
        quote : "Are you trying to save my soul?",
        movie : "- The Fall (2006)",
        img: "thefall2.png"
    },
    {
        quote : "Come back. Come back to me.",
        movie : "- Atonement (2007)",
        img: "atonement.png"
    },
    {
        quote : "Find you, love you, marry you and live without shame.",
        movie : "- Atonement (2007)",
        img: "atonement1.png"
    },
    {
        quote : "I like things that look like mistakes.",
        movie : "- Frances Ha (2012)",
        img: "francesha.png"
    },
    {
        quote : "Sometimes it's good to do what you're supposed to do when you're supposed to do it.",
        movie : "- Frances Ha (2012)",
        img: "francesha1.png"
    },
    {
        quote : "Down to Gehenna, or up to the Throne, He travels the fastest who travels alone.",
        movie : "- 1917 (2019)",
        img: "1917.png"
    },
    {
        quote : "Age before Beauty.",
        movie : "- 1917 (2019)",
        img: "19171.png"
    },
    {
        quote : "I've never loved anyone the way I loved you.",
        movie : "- Her (2013)",
        img: "her1.png"
    },
    {
        quote : "I feel like I can be anything with you.",
        movie : "- Her (2013)",
        img: "her.png"
    },
    {
        quote : "It was exciting to see her grow and both of us grow and change together.",
        movie : "- Her (2013)",
        img: "her2.png"
    },
    {
        quote : "Some people can’t believe in themselves until someone else believes in them first.",
        movie : "- Good Will Hunting (1997)",
        img: "goodwillhunting1.png"
    },
    {
        quote : "Wait. I wanna remember us just as we are now.",
        movie : "- The Curious Case Of Benjamin Button (2008)",
        img: "curiouscaseofbenjaminbutton.png"
    },
    {
        quote : "That's what the present is. It's a little unsatisfying because life is unsatisfying.",
        movie : "- Midnight in Paris (2011)",
        img: "midnightinparis.png"
    },
    {
        quote : "Because I still wake up every morning, and the first thing I want to do is see your face.",
        movie : "- P.S. I LOVE YOU (2007)",
        img: "psiloveyou.png"
    },
]

const quote = document.querySelector(".quote_wrapper span:first-child");
const movie = document.querySelector(".quote_wrapper span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
movie.innerText = todayQuote.movie;


const backgroundImg = document.createElement("img");
backgroundImg.src = `img/${todayQuote.img}`;
document.body.appendChild(backgroundImg);

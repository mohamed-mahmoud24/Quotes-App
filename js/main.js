var quotes = [
    {
        quote: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt",
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt",
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt",
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        author: " Mae West",
    },
    {
        quote: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
        author: "J.K. Rowling",
    },
    {
        quote: "If you tell the truth, you don't have to remember anything.",
        author: " Mark Twain",
    },
    {
        quote: "A friend is someone who knows all about you and still loves you.",
        author: " Elbert Hubbard",
    },
    {
        quote: "Always forgive your enemies; nothing annoys them so much.",
        author: " Oscar Wilde",
    },
    {
        quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        author: " Mahatma Gandhi",
    },
    {
        quote: "Be yourself; everyone else is already taken.",
        author: " Oscar Wilde",
    },
];

var lastRandomIndex;

function generateQuote() {
    do {
        var randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastRandomIndex);

    lastRandomIndex = randomIndex;

    var randomQuote = quotes[randomIndex];

    document.getElementById("Quote").textContent = `${randomQuote.quote}`;
    document.getElementById("auther").textContent = `- ${randomQuote.author}`;
}

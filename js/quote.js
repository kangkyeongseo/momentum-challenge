const quotes = [
    {
        quote:"과거가 얼마나 힘들었든지간에 넌 언제나 다시 시작할 수 있다",
        author:"석가모니"
    },
    {
        quote:"고통이 널 붙잡고 있는게 아니라 너가 고통을 붙잡고 있는 것이다",
        author:"석가모니"
    },
    {
        quote:"나 아닌 누구도 자신을 구원할 수 없다. 스스로 길을 걸어가야 한다.",
        author:"석가모니"
    },
    {
        quote:"일이 왜 벌어졌는지 궁금해 하는 대신 왜 당신에게 일어났는지를 생각해야 합니다.",
        author:"달라이 라마"
    },
    {
        quote:"다른 사람과 비교하지 말고 어제의 자신보다 나아질 것을 목표로 삼으세요.",
        author:"달라이 라마"
    },
    {
        quote:"때로는 침묵이 최고의 대답입니다.",
        author:"달라이 라마"
    },
    {
        quote:"행동은 모든 성공의 가장 기초적인 핵심이다",
        author:"파블로 피카소"
    },
    {
        quote:"영원히 살 것처럼 꿈꾸고 오늘 죽을 것처럼 살아라",
        author:"제임스 딘"
    },
    {
        quote:"세월을 헛되이 보내지 말라. 청춘은 다시 오지 않는다.",
        author:"안중근"
    },
    {
        quote:"마음만을 가지고 있어서는 안된다. 반드시 실천하여야 한다",
        author:"브루스 리"
    },
];

const quotesText = document.querySelector(".quotes-text");
const quotesAuthor = document.querySelector(".quotes-author");

const selectedQuote = quotes[Math.floor(Math.random()*quotes.length)];

quotesText.innerText = selectedQuote.quote;
quotesAuthor.innerText = selectedQuote.author;



const textAbr = document.querySelector('#text');
const inputAbr = document.querySelector('#font-size-control');

inputAbr.addEventListener("input", (event) => {
    textAbr.style.fontSize = `${event.target.value}px`;
    event.target.value > 50 ? textAbr.style.color = "#849" : textAbr.style.color = "#169"
});


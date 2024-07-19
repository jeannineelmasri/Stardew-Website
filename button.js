var factList = [
    "Once you level up your friendship with certain villagers, they will randomly send you gifts in the mail",
    "Stardew Valley was developed by a single person, Eric Barone.",
    "If you skip going to the Spirit's Eve maze, head to the wizard's tower. At precisely midnight, you'll see a ghost flying between the trees in the background.",
    "Turning children into doves unlocks several Easter eggs."
];

var factButton = document.getElementById('clickFact');
var clickCount = 0;
var factMessage = document.querySelector('.whatIs');

factButton.addEventListener('click', displayFact);

function displayFact() {
    factMessage.innerHTML = factList[clickCount];
    factMessage.style.display = 'block';
    clickCount += 1;
    if (clickCount >= factList.length) {
        clickCount = 0;
    }
}

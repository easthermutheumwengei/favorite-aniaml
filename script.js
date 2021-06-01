function FunFact() {
    var facts = ['fact 1', 'fact 2', 'fact 3', 'fact 4', 'fact 5', 'fact 6'];
    let myFact = facts[Math.round(Math.random() * (facts.length - 1))];
    document.getElementById("facts").innerHTML = " My animal" + myFact + ".";
}


function FunFact() {
    let facts = ["can have antlers that can weigh 50-60 lbs", "weigh upt o 1200 lbs", "eats around 70 lbs of food a day", "is a herbivour", "sheds its antlers every year", "is born knowing how to swim"];
    let myFact = facts[Math.round(Math.random() * (facts.length - 1))];
    document.getElementById("facts").innerHTML = " The moose " + myFact + ".";
}
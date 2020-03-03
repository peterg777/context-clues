//Arrays
var friends = ["Phil", "Peter", "Tony", "Steve", "Mike"];
var locations = ["England", "America", "France", "Switzerland", "Germany", "Sweden", "Italy", "Ireland", "Netherlands", "Norway"];
var weapons = ["a boning knife", "an ax", " a hammer", "a revolver", "tuna caserole", "cyanide poisoning", "lightsaber", "yoko ono singing", "mustard gas", "boomslang venom", "new taylor swift album", "sith lightning", "thanatophobia", "fart in a jar", "internal bleeding", "a sharknado", "pennywise", "a spider bite", "lecture on english literature", "being buried alive"];


$(document).ready(function () {
    //h3   
    for (let i = 1; i < 100; i++) {
        var h3 = document.createElement("h3");
        h3.innerText = "Accusation " + i + "!";

        $('h3').click(function () {
            //loop
            let friend = friends[Math.floor(Math.random() * friends.length)];
            let weapon = weapons[Math.floor(Math.random() * weapons.length)];
            let location = locations[Math.floor(Math.random() * locations.length)];
            //Alert                
            alert("Accusation " + i + ": I accuse " + friend + " killed by using " + weapon + " while at " + location + "!");
        });
        //Append h3               
        $('body').append(h3);
    }
});




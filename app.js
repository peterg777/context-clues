
var friends = ["Phil", "Peter", "Tony", "Steve", "Mike"];
var locations = ["England", "America", "France", "Switzerland", "Germany", "Sweden", "Italy", "Ireland", "Netherlands", "Norway"];
var weapons = ["a boning knife", "an ax", " a hammer", "a revolver", "tuna caserole", "cyanide poisoning", "lightsaber", "yoko ono singing", "mustard gas", "boomslang venom", "new taylor swift album", "sith lightning", "thanatophobia", "fart in a jar", "internal bleeding", "a sharknado", "pennywise", "a spider bite", "lecture on english literature", "being buried alive"];


$(document).ready( function() {
    // h3    
    for (var i = 1; i < 100; i++) {
        var h3 = document.createElement('h3');
        h3.innerText = 'Accusation ' + i + '!';
        h3.addEventListener('click', function() {
            //Array loop
            var friend = friends[Math.floor(Math.random() * friends.length)];
            var weapon = weapons[Math.floor(Math.random() * weapons.length)];
            var location = locations[Math.floor(Math.random() * locations.length)];
            //alert               
            alert('Accusation ' + i + '- I accuse ' + friend + ' killed by ' + weapon + ' in ' + location + '!');
        });
        //Append to body                
        $('body').append(h3);
    }
})


var isPlayerSelected = false;
var heroHealth;
var heroAttack;
var enemyHealth;
var enemyAttack;
var enemiesArr = [];
var isHeroSelected = false;
var isEnemySelected = false;
var healthUpdateDiv;
var i =1;
var characters = {
    'harry': {
        name: 'Harry Potter',
        health: 120,
        attack: 8,
        imageUrl: "assets/images/harry-potter.jpg",
        enemyAttackBack: 15
    }, 
    'ron': {
        name: 'Ronal Weasly',
        health: 100,
        attack: 14,
        imageUrl: "assets/images/ron-weasley.jpg",
        enemyAttackBack: 5
    }, 
    'hermoine': {
        name: 'Hermoine Granger',
        health: 150,
        attack: 8,
        imageUrl: "assets/images/hermoine.jpg",
        enemyAttackBack: 20
    }, 
    'voldemort': {
        name: 'Lord Voldemort',
        health: 180,
        attack: 7,
        imageUrl: "assets/images/voldemort.jpg",
        enemyAttackBack: 20
    }
};
// ----------Display Harry -------------
// -------------------------------------
var charName = $("<div class='character' data-name='" + characters.harry.name + "'>");
var nameDiv = $("<div class='character-name'>").text(characters.harry.name);
var imgDiv = $("<img alt='image' class='character-image'>").attr("src", characters.harry.imageUrl);
var healthDiv = $("<div class='character'><p>" + characters.harry.health+ "</p></div>");
$("#player-1").append(nameDiv).append(healthDiv).append(imgDiv);
// ----- Display ron -----------------
// -----------------------------------
var charName = $("<div class='character' data-name='" + characters.ron.name + "'>");
var nameDiv = $("<div class='character-name'>").text(characters.ron.name);
var imgDiv = $("<img alt='image' class='character-image'>").attr("src", characters.ron.imageUrl);
var healthDiv = $("<div class='character'><p>" + characters.ron.health+ "</p></div>");
$("#player-2").append(nameDiv).append(healthDiv).append(imgDiv);
// ----------Display Hermoine------------
// --------------------------------------
var charName = $("<div class='character' data-name='" + characters.hermoine.name + "'>");
var nameDiv = $("<div class='character-name'>").text(characters.hermoine.name);
var imgDiv = $("<img alt='image' class='character-image'>").attr("src", characters.hermoine.imageUrl);
var healthDiv = $("<div class='character'><p>" + characters.hermoine.health+ "</p></div>");
$("#player-3").append(nameDiv).append(healthDiv).append(imgDiv);
// ----------Display Voldemort------------
// --------------------------------------
var charName = $("<div class='character' data-name='" + characters.voldemort.name + "'>");
var nameDiv = $("<div class='character-name'>").text(characters.voldemort.name);
var imgDiv = $("<img alt='image' class='character-image'>").attr("src", characters.voldemort.imageUrl);
var healthDiv = $("<div class='character'><p>" + characters.voldemort.health+ "</p></div>");
$("#player-4").append(nameDiv).append(healthDiv).append(imgDiv);

var flag = false;

$("#player-1").on("click", function(){
    if(!isPlayerSelected){
        var enemyDiv = $("#enemy-display-row");
        enemyDiv.append($("#player-2"));
        
        enemyDiv.append($("#player-3"));
        
        enemyDiv.append($("#player-4"));
        healthUpdateDiv = $("<div>");
        $("#all-characters").append(healthUpdateDiv);
        heroHealth = characters.harry.health;
        heroAttack = characters.harry.attack;
        console.log(characters.harry.name);
        // enemiesArr.push("#player-2", "#player-3", "#player-4");
        isHeroSelected = true;
        isPlayerSelected = true;
        $("#player-2").on("click", function(){
            if(isPlayerSelected) {
                console.log("I am clicking");
                var defenderDiv = $("#defender-image-row");
                defenderDiv.append($("#player-2"));
                // isPlayerSelected = false;
                var enemyHealth = characters.ron.health;
                var enemyAttack = characters.ron.attack;
                isEnemySelected = true;
            }
        });
        $("#player-3").on("click", function(){
            if(isPlayerSelected) {
                console.log("I am clicking");
                var defenderDiv = $("#defender-image-row");
                defenderDiv.append($("#player-3"));
                // isPlayerSelected = false;
                var enemyHealth = characters.hermoine.health;
                var enemyAttack = characters.hermoine.attack;
                isEnemySelected = true;
            }
        });
        $("#player-4").on("click", function(){
            if(isPlayerSelected) {
                console.log("I am clicking");
                var defenderDiv = $("#defender-image-row");
                defenderDiv.append($("#player-4"));
                // isPlayerSelected = false;
                var enemyHealth = characters.voldemort.health;
                var enemyAttack = characters.voldemort.attack;
                isEnemySelected = true;
            }
        });
    }
});

$("#player-2").on("click", function(){
    if(!isPlayerSelected){
        var enemyDiv = $("#enemy-display-row");
        enemyDiv.append($("#player-1"));
        $("#player-1").addClass("enemy-1");
        enemyDiv.append($("#player-3"));
        $("#player-1").addClass("enemy-3");
        enemyDiv.append($("#player-4"));
        $("#player-1").addClass("enemy-4");
        heroHealth = characters.ron.health;
        heroAttack = characters.ron.attack;
        isHeroSelected = true;
        isPlayerSelected = true;
        $("#player-1").on("click", function(){
            if(isPlayerSelected) {
                console.log("I am clicking");
                var defenderDiv = $("#defender-image-row");
                defenderDiv.append($("#player-1"));
                // isPlayerSelected = false;
                var enemyHealth = characters.harry.health;
                var enemyAttack = characters.harry.attack;
                isEnemySelected = true;
            }
        });
        $("#player-3").on("click", function(){
            if(isPlayerSelected) {
                console.log("I am clicking");
                var defenderDiv = $("#defender-image-row");
                defenderDiv.append($("#player-3"));
                // isPlayerSelected = false;
                var enemyHealth = characters.hermoine.health;
                var enemyAttack = characters.hermoine.attack;
                isEnemySelected = true;
            }
        });
        $("#player-4").on("click", function(){
            if(isPlayerSelected) {
                console.log("I am clicking");
                var defenderDiv = $("#defender-image-row");
                defenderDiv.append($("#player-4"));
                // isPlayerSelected = false;
                var enemyHealth = characters.voldemort.health;
                var enemyAttack = characters.voldemort.attack;
                isEnemySelected = true;
            }
        });
    }
});

$("#player-3").on("click", function(){
    if(!isPlayerSelected){
        var enemyDiv = $("#enemy-display-row");
        enemyDiv.append($("#player-1"));
        $("#player-1").addClass("enemy-1");
        enemyDiv.append($("#player-2"));
        $("#player-1").addClass("enemy-2");
        enemyDiv.append($("#player-4"));
        $("#player-1").addClass("enemy-4");
        heroHealth = characters.hermoine.health;
        heroAttack = characters.hermoine.attack;
        isHeroSelected = true;
        isPlayerSelected = true;
        $("#player-1").on("click", function(){
            if(isPlayerSelected) {
                console.log("I am clicking");
                var defenderDiv = $("#defender-image-row");
                defenderDiv.append($("#player-1"));
                // isPlayerSelected = false;
                var enemyHealth = characters.harry.health;
                var enemyAttack = characters.harry.attack;
                isEnemySelected = true;
            }
        });
        $("#player-2").on("click", function(){
            if(isPlayerSelected) {
                console.log("I am clicking");
                var defenderDiv = $("#defender-image-row");
                defenderDiv.append($("#player-2"));
                // isPlayerSelected = false;
                var enemyHealth = characters.ron.health;
                var enemyAttack = characters.ron.attack;
                isEnemySelected = true;
            }
        });
        $("#player-4").on("click", function(){
            if(isPlayerSelected) {
                console.log("I am clicking");
                var defenderDiv = $("#defender-image-row");
                defenderDiv.append($("#player-4"));
                // isPlayerSelected = false;
                var enemyHealth = characters.voldemort.health;
                var enemyAttack = characters.voldemort.attack;
                isEnemySelected = true;
            }
        });
    }
});

$("#player-4").on("click", function(){
    if(!isPlayerSelected){
        var enemyDiv = $("#enemy-display-row");
        enemyDiv.append($("#player-1"));
        $("#player-1").addClass("enemy-1");
        enemyDiv.append($("#player-2"));
        $("#player-1").addClass("enemy-2");
        enemyDiv.append($("#player-3"));
        $("#player-1").addClass("enemy-3");
        heroHealth = characters.voldemort.health;
        heroAttack = characters.voldemort.attack;
        isHeroSelected = true;
        isPlayerSelected = true;
        $("#player-1").on("click", function(){
            if(isPlayerSelected) {
                console.log("I am clicking");
                var defenderDiv = $("#defender-image-row");
                defenderDiv.append($("#player-1"));
                // isPlayerSelected = false;
                var enemyHealth = characters.harry.health;
                var enemyAttack = characters.harry.attack;
                isEnemySelected = true;
            }
        });
        $("#player-2").on("click", function(){
            if(isPlayerSelected) {
                console.log("I am clicking");
                var defenderDiv = $("#defender-image-row");
                defenderDiv.append($("#player-2"));
                // isPlayerSelected = false;
                var enemyHealth = characters.ron.health;
                var enemyAttack = characters.ron.attack;
                isEnemySelected = true;
            }
        });
        $("#player-3").on("click", function(){
            if(isPlayerSelected) {
                console.log("I am clicking");
                var defenderDiv = $("#defender-image-row");
                defenderDiv.append($("#player-3"));
                // isPlayerSelected = false;
                var enemyHealth = characters.hermoine.health;
                var enemyAttack = characters.hermoine.attack;
                isEnemySelected = true;
            }
        });
    }
});

$("#attack-button").on("click", function(){
    attack(heroAttack, heroHealth, enemyAttack, enemyHealth);
    console.log(heroHealth);
});

function attack(heroAttack, heroHealth, enemyAttack, enemyHealth){
    if(heroHealth > 0){
        // console.log(hh);

        heroHealth = heroHealth - enemyAttack;
        console.log("hero health is: " +heroHealth);
        healthUpdateDiv.text(heroHealth);
    }
    if(enemyHealth > 0){
        enemyHealth = enemyHealth - (heroAttack^i);
        console.log("enemy health is: " +eh);
        i++;
    }
}


// if(flag=true){
// $("#player-1").on("click", function(){
//     if((isPlayerSelected) && (flag)){
//         console.log("I am clicking");
//         var defenderDiv = $("#defender-image-row");
//         defenderDiv.append($("#player-1"));
//     }
// });
// }



// showCharacter(characters.finn);

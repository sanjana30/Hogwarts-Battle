var characterArray = ["player-1", "player-2", "player-3", "player-4"];
var isPlayerSelected = false;

// $("#player-1").on("click", function(){
//     // if(isPlayerSelected === false){
//         var enemyDiv = $("#enemy-display-row");
//         console.log("div created");
//         enemyDiv.append($("#player-2"));
       
//         enemyDiv.append($("#player-3"));
        
//         enemyDiv.append($("#player-4"));
        
//         isPlayerSelected = true;
//     // }  
// });
// $("#player-2").on("click", function(){
// //    if(isPlayerSelected === false){ 
//     var enemyDiv = $("#enemy-display-row");
//     console.log("div created");
//     enemyDiv.append($("#player-1"));
//     enemyDiv.append($("#player-3"));
//     enemyDiv.append($("#player-4"));
//     isPlayerSelected = true;
// //    }
// });
// $("#player-3").on("click", function(){
// //    if(isPlayerSelected === false){
//     var enemyDiv = $("#enemy-display-row");
//     console.log("div created");
//     enemyDiv.append($("#player-1"));
//     enemyDiv.append($("#player-2"));
//     enemyDiv.append($("#player-4"));
//     isPlayerSelected = true;
// //    }
// });
// $("#player-4").on("click", function(){
//     // if(isPlayerSelected === false){
//     var enemyDiv = $("#enemy-display-row");
//     console.log("div created");
//     enemyDiv.append($("#player-1"));
//     enemyDiv.append($("#player-2"));
//     enemyDiv.append($("#player-3"));
//     isPlayerSelected = true;
//     // }
// });

// ------------------------------------
// ------------------------------------

// $("#player-2").on("click", function(){
    
//         var defenderDiv = $("#defender-image-row");
//         console.log("div created");
//         defenderDiv.append($("#player-2"));
//         // isPlayerSelected = true;
      
// });
// $("#enemy-2").on("click", function(){
//     if(isPlayerSelected === true){
//         var defenderDiv = $("#append-defender-next-row");
//         console.log("div created");
//         defenderDiv.append($("#enemy-2"));
//         isPlayerSelected = true;
//     }  
// });
// $("#player-3").on("click", function(){
//     if(isPlayerSelected === true){
//         var defenderDiv = $("#append-defender-next-row");
//         console.log("div created");
//         defenderDiv.append($("#player-3"));
//         isPlayerSelected = true;
//     }  
// });
// $("#player-4").on("click", function(){
//     if(isPlayerSelected === true){
//         var defenderDiv = $("#append-defender-next-row");
//         console.log("div created");
//         defenderDiv.append($("#player-4"));
//         isPlayerSelected = true;
//     }  
// });


// -----------

$("#all-characters").on("click", function(){
    // var colDiv = document.getElement("div");
    // var idValue = colDiv.attr("id");
    // console.log(idValue);
    var divName = $(this).element("div");
    console.log($(divName).attr(id));
});
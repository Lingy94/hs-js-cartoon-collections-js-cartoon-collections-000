function dwarfRollCall(dwarves) {
  var dwarfList = [];
  for (var i = 0; i < dwarves.length; i++){
    dwarfList.push(`${i+1}. ${dwarves[i]} `);
  }
  return dwarfList.join("");
}

function summonCaptainPlanet(planeteerCalls){
  var planetCaps = [];
  for (var i = 0; i < planeteerCalls.length; i++){
  
  planetCaps.push(`${planeteerCalls[i].toUpperCase}!`);
}
  return planetCaps;
}

function longPlaneteerCalls(words) {
  for (var i = 0; i<words.length; i++){
  if (words[i].length > 4){		
    return true;
  }
  return false;
  }
}

function findTheCheese(foods) {
	var cheese = ["cheddar", "gouda", "camembert"];		
	for (var i = 0; i < foods.length; i++) {
		if (foods.includes(cheese[i]) === true)			 
			return `${cheese[i]}`;						
	}
			return "no cheese!";
}

/* old solution
function findTheCheese (foods) {
  for (var i=0 ; i < foods.length; i++){
    if (foods.includes("cheddar") === true){
      return "cheddar";
    }
    else if (foods.includes("gouda") === true){
      return "gouda"
    }
    else if (foods.includes("camembert") === true){
      return "camembert"
    }
    else {
      return "no cheese!"
    }
  }

} */


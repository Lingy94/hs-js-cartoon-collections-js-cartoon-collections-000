function dwarfRollCall(dwarves) {
  var dwarfList = []
  for (let i = 0; i < dwarves.length; i++){
    dwarfList.push(`${i+1}. ${dwarves[i]} `)
    
  }
  return dwarfList.join("")
}

var planetCaps = []
function summonCaptainPlanet(planeteerCalls){
  for (let i = 0; i<planeteerCalls.length; i++){
  
  planetCaps.push(`${planeteerCalls[i].toUpperCase}!`)
}
  return planetCaps
}

function longPlaneteerCalls(words) {
  for (let i = 0; i<words.length; i++){
  if (words[i].length > 4){
    return true
  }
  return false
}
}

function findTheCheese (foods) {
  for (let i=0 ; i < foods.length; i++){
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
}

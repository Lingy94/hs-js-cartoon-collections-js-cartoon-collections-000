function dwarfRollCall(dwarves) {
  var dwarfList = []			// creates an empty array in order to add a prefix to each element from the original array
  for (let i = 0; i < dwarves.length; i++){
    dwarfList.push(`${i+1}. ${dwarves[i]} `)
								// for loop is used to add a prefix in front of each element of original array
  }
  return dwarfList.join("") 	// joins the new array with prefixes added to each element and joins them together without using the default comma
}

var planetCaps = []				// creates a new array so that I can push mutated elements to a new array without altering the original
function summonCaptainPlanet(planeteerCalls){
  for (let i = 0; i < planeteerCalls.length; i++){		//	for loop that will increase i until it's less than the array's length.
  
  planetCaps.push(`${planeteerCalls[i].toUpperCase}!`)	/*	template literals to iterate through each element and capitalise them while adding a !
															to a new array */
}
  return planetCaps
}

function longPlaneteerCalls(words) {
  for (let i = 0; i<words.length; i++){
  if (words[i].length > 4){		// checks each element in array to see if their string length is longer than 4.
    return true
  }
  return false
}
}

function findTheCheese(foods) {
	var cheese = ["cheddar", "gouda", "camembert"]		// new array with the included words. 
	for (var i = 0; i < foods.length; i++) {
		if (foods.includes(cheese[i]) === true)			// boolean to check whether or not each element has a matching string from the array above
			return `${cheese[i]}`						// returns the string that was matched at that index
	}
			return "no cheese!"
}

/* old solution
function findTheCheese (foods) {
  for (let i=0 ; i < foods.length; i++){
    if (foods.includes("cheddar") === true){		// else if loops to check each specified string and returns the first cheese that is true.
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


function theTruth(){
  return true;
}

function sayHey() {
  return "Hey!"
}

function sayHeyFriend(name){
  if (typeof name == undefined){
    var name = you
  }
  return "Hey, " + name + "!"
}

function favoriteIceCream(flavor){
  if (typeof flavor == undefined){
    var flavor = flavor
  }
  return "I love " + flavor
}

function shouting(string){
  return string.toUpperCase()
}

function roundDown(number){
  return Math.floor(number);
}

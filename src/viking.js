// Soldier
class Soldier {
  constructor(health, strength){
    this.health=health
    this.strength=strength
  }

  attack(){
    return this.strength
  }

  receiveDamage(damage){
    this.health -= damage
  }
}

// Viking
class Viking extends Soldier{
  constructor(name,health,strength){
    super(health,strength)
    this.name = name
  }

  receiveDamage(damage){
    this.health -= damage
    if(this.health>0){
      return `${this.name} has received ${damage} points of damage`
    }else{
      return `${this.name} has died in act of combat`
    }
  }

  battleCry(){
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier{
  receiveDamage(damage){
    this.health -= damage
    if(this.health>0){
      return `A Saxon has received ${damage} points of damage`
    }else{
      return `A Saxon has died in combat`
    }    
  }
}

// War
class War {
  constructor(){
    this.vikingArmy = []
    this.saxonArmy = []
  }
  addViking(viking){
    this.vikingArmy.push(viking)
  }
  addSaxon(saxon){
    this.saxonArmy.push(saxon)
  }
  vikingAttack(){
    let poorSaxon = Math.floor(Math.random() * this.saxonArmy.length)
    let gloriousViking = Math.floor(Math.random() * this.vikingArmy.length)
    let result = this.saxonArmy[poorSaxon].receiveDamage(this.vikingArmy[gloriousViking].strength)
    if(result === 'A Saxon has died in combat'){
      this.saxonArmy.splice(poorSaxon,1)
    }
    return result
  }
  saxonAttack(){/*
    let poorSaxon = Math.floor(Math.random() * this.saxonArmy.length)
    let gloriousViking = Math.floor(Math.random() * this.vikingArmy.length)
    let result = this.vikingArmy[gloriousViking].receiveDamage(this.saxonArmy[poorSaxon].strength)
    if(result === `${this.vikingArmy[gloriousViking].name} has died in act of combat`){
      this.vikingArmy.splice(gloriousViking,1)
    }
    return result*/
    this.genericAttack(this.saxonArmy,this.vikingArmy)
  }
  genericAttack(attackingArmy, defendingArmy){
    let attacker = Math.floor(Math.random() * attackingArmy.length)
    let defender = Math.floor(Math.random() * defendingArmy.length)
    let result = defendingArmy[defender].receiveDamage(attackingArmy[attacker].strength)
    if(result === 'A Saxon has died in combat' || result === `${defendingArmy[defender].name} has died in act of combat`){
      defendingArmy.splice(defender,1)
    }
    return result
  }
  showStatus(){
    if(this.vikingArmy.length === 0){
      return "Saxons have fought for their lives and survived another day..."
    }
    if(this.saxonArmy.length === 0){
      return "Vikings have won the war of the century!"
    }
    return "Vikings and Saxons are still in the thick of battle."
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}

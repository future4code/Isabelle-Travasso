export interface Character {
    name: string
    life: number
    strength: number
    defense: number
}

export const validateCharacter = (input: Character): boolean => {
    const { name, life, strength, defense } = input

    if (!name || life === undefined || strength === undefined || defense === undefined) {
        return false
    }

    if (life <= 0 || defense <= 0 || strength <= 0){
        return false
    }

    return true
}

export const performAttack = (attacker: Character, defender: Character) => {
    if(!validateCharacter(attacker) || !validateCharacter(defender)){
        throw new Error("Invalid character");
    }
    if (attacker.strength > defender.defense) {
        defender.life -= attacker.strength - defender.defense;
      }
}

export const performAttackInversion = (
    attacker: Character,
    defender: Character,
    validator: (input: Character) => boolean
  ) => {
    if (!validator(attacker) || !validator(defender)) {
      throw new Error("Invalid character");
    }
  
    if (attacker.strength > defender.defense) {
      defender.life -= attacker.strength - defender.defense;
    }
  };
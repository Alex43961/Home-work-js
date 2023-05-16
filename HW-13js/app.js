// 1) Create class Hero : damage , hp
// 1.1 ) What the raise of ur hero : Archer , Elf
// 1.2) if user hero === Archer : computer = elf , hero === Elf : computer = archer
// 2) Extend class Hero by Elf : magicKick() { return damage * 2  }
// Archer magicArrow(){ return damage * 2 / 1.2 * .4 * 2.2  }
// 3) Create while loop
// 4) Via random function pick who will attack
// 5) While hero['hp'] <= 0 : game continuous

// const ARCHER = "archer";
// const ELF = "elf";

// class Hero {
//   constructor(raise) {
//     if (raise === ARCHER || raise === ELF) this.raise = raise;
//   }
// }

// class Machine extends Hero {
//     constructor(raise){
//         super(raise)
//     }
// }

// const hero = new Hero();
/*
let chooseHero = prompt("Choose your hero: 1)Elf; 2)Archer")

class Hero {
	constructor(raise) {
		if (raise === ARCHER || raise === ELF) this.raise = raise;
		this.hp = hp;
		this.damage = damage;		
	}
	 
}
class ARCHER extends Hero {
	constructor(raise, hp, damage) {
		super(raise, hp, damage);
		this.hp = hp;
		 function attack() {
			console.log("There was an attack !");
		}
	}
} 

class ELF extends Hero {
	constructor(raise, hp, damage) {
		super(raise, hp, damage);
		this.hp = hp;
		 function attack() {
			console.log("There was an attack !");
		}
	}
} 

*/

class Hero {
	// Field , attr
	HP_BY_DEFAULT = 100;
	DAMAGE_BY_DEFAULT = 25;

	constructor(name, damage = this.DAMAGE_BY_DEFAULT, hp = this.HP_BY_DEFAULT) {
		this.name = name;
		this.damage = damage;
		this.hp = hp;
	}
}

class Elf extends Hero {
	constructor(name, damage, hp) {
		super(name, damage, hp);
	}
	magicAttack() {
		return this.damage * 2;
	}
}

class Archer extends Hero {
	constructor(name, damage, hp) {
		super(name, damage, hp);
	}
	magicAttack() {
		return ((this.damage * 2) / 1.2) * 0.4 * 2.2;
	}
}

let isRunning = true;

while (isRunning) {
	const userPick = prompt(`
		 Hello , enter raice that you wanna pick : 
		 a) Archer 
		 b) Elf
		 q) Quit 
	`);

	const queue = random();
	console.log(queue);

	switch (userPick.toLowerCase()) {
		case "a":
			const archerFirstStarts = whoIsFirstStarts(true);
			battle(archerFirstStarts, queue);
			console.log(archerFirstStarts);
			break;
		case "b":
			const elfFirstStarts = whoIsFirstStarts(false);
			battle(elfFirstStarts, queue);
			console.log(elfFirstStarts);
			break;
		case "q":
			isRunning = false;
			break;

		default:
			alert("Try once again!");
			break;
	}
}

function whoIsFirstStarts(isHero) {
	if (isHero) {
		return {
			user: new Archer("John"),
			machine: new Elf("Robot"),
		}

	} else {
		return {
			user: new Elf("John"),
			machine: new Archer("Robot"),
		}
	}
}
console.log(whoIsFirstStarts());


function battle(hero, queue) {
	if (queue === "hero") {
		while (hero.user.hp > 0 && hero.machine.hp > 0) {
			attackKick(hero.user, hero.machine);
		}
	} else {
		while (hero.user.hp > 0 && hero.machine.hp > 0) {
			attackKick(hero.machine, hero.user);
		}
	}
}

function attackKick(firstHero, secondHero) {
	firstHero.hp -= secondHero.magicAttack();
	secondHero.hp -= firstHero.magicAttack();

	console.log("[firstHero_HP]", firstHero.hp);
	console.log("[secondHero_HP]", secondHero.hp);
}

function random() {
	const value = Math.random().toString().slice(2, 3);

	if (value % 2 === 0) return "hero";

	return "bot";
}
// Creating the Parent Class

class Player {
  constructor(Name, Country) {
    this.name = Name;
    this.country = Country;
  }
   introduce() {
    console.log(`${this.name} was born in ${this.country}.`);
  }
}

// Creating an object or and instence of a class.
// firstPlayer is the caller.

const firstPlayer = new Player("Messi", "Argentina");
firstPlayer.introduce();

// Creating a subClass that inherits from the parent Class.
class TennisPlayer extends Player {
  constructor(Name,Country,Age) {
    super(Name,Country);
    this.age = Age;
  }
   playTennis() {
    console.log(
      `${this.name} is ${this.age} years old and knows how to play Tennis.`
    );
  }
}

const secondPlayer = new TennisPlayer("Rafael Nadal","Spain" ,38);
secondPlayer.playTennis();

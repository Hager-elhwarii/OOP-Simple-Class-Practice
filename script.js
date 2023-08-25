// Creating the Parent Class

class Player {
  constructor(Name, Country) {
    this.name = Name;
    this.country = Country;
  }
  get born() {
    console.log(`${this.name} was born in ${this.country}.`);
  }
}

// Creating an object or and instence of a class.
// firstPlayer is the caller.

const firstPlayer = new Player("Messi", "Argentina");
firstPlayer.born;

// Creating a subClass that inherits from the parent Class.
class TennisPlayer extends Player {
  constructor(Name, Age) {
    super(Name);
    this.age = Age;
  }
  get Age() {
    console.log(
      `${this.name} is ${this.age} years old and knows how to play Tennis.`
    );
  }
}

const secondPlayer = new TennisPlayer("Rafael Nadal", 34);
secondPlayer.Age;

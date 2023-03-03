class Human {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
}

class Flat {
  people = [];

  setHuman(human) {
    if (human instanceof Human) {
      this.people.push(human);
    } else {
      console.log('People accept only instance of class Apartment');
    }
  }
}

class Build {
  constructor(maxFlat) {
    this.flats = [];
    this.maxFlat = maxFlat;
  }

  setFlat(flat) {
    if (this.flats.length <= this.maxFlat) {
      if (flat instanceof Flat) {
        this.flats.push(flat);
      }else {
        console.log('Flats accept only instance of class Flat');
      }
    }else {
      console.log(`Max flats length ${this.maxFlat}`);
    }
  }
}

const people1 = new Human('Ivan', 'male');
const people2 = new Human('Marta', 'female');

console.log(people1);
console.log(people2);

const flat = new Flat();
const flat1 = new Flat();

flat.setHuman(people1);
flat1.setHuman(people2);

console.log(flat);
console.log(flat1);

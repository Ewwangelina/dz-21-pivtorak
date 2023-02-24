class Human {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
  getHumanType() {
    console.log(`Привет, меня зовут ${this.name}, и я ${this.sex}.`);
  }
}
const person = new Human('Иван', 'мужчина');
person.getHumanType();
const person1 = new Human('Ольга', 'женщина');
person1.getHumanType();

class Apartment {
  residents = [];
  addResident(resident) {
    if (resident instanceof Human) {
      this.residents.push(resident);
      console.log(`Житель ${resident.name} добавлен в квартиру`);
    } else {
      console.log(`Ошибка: Невозможно добавить жителя. Переданный объект не является экземпляром класса Человек.`);
    }
  }
}
const apartment = new Apartment();
const person2 = new Human('Иван', 'мужчина');
apartment.addResident(person2);
const person3 = new Human('Ольга', 'женщина');
apartment.addResident(person3); 

class House {
  static maxApartments = 10;
  static apartmentsCount = 0;
  
  residents = [];
  constructor() {
    if (House.apartmentsCount < House.maxApartments) {
      House.apartmentsCount++;
    } else {
      throw new Error('Достигнуто максимальное количество квартир.');
    }
  }
  addResident(resident) {
    if (resident instanceof Human) {
      this.residents.push(resident);
      console.log(`Житель ${resident.name} добавлен в квартиру`);
    } else {
      console.log(`Ошибка: Невозможно добавить жителя. Переданный объект не является экземпляром класса Человек.`);
    }
  }
  static getApartmentsCount() {
    return House.apartmentsCount;
  }
}


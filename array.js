let array = [1, 2, 3, 4 ,5 ,6 ,7 ,8 ,9, 10];

for (let i = 0; i < array.length; i++) {
    // console.log(array[i])
}

// the "this" keyword specifies to assign the arguments from contructor to the name, age and job properties 
class Ironhacker {
    constructor (nametest, ageOfStudent) {
        this.name = nametest;
        this.age = ageOfStudent;
        this.job = "web dev"
    }
}

// clases are a factory to build objects

let Matheus = new Ironhacker("Matheus", 26);

console.log(Matheus);

//let Osvaldo = new Ironhacker("Osvaldo", 34);

//console.log(Osvaldo);

class European {
    constructor(name, birth, living, eu) {
        this.nameOfStudent = name
        this.placeOfBirth = birth
        this.placeOfLiving = living
        this.isEUMember = eu
    }
    myNameIs() {
        return this.nameOfStudent
    }
}

let Osvaldo = new European ("Osvaldo", "Mexico", "Germany", false)

console.log(Osvaldo);
console.log(Osvaldo.myNameIs())


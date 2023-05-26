class Animal {
    constructor(species, weight, height){
        this.species = String(species)
        this.weight = String(weight)
        this.height = String(height)
    }

    getInfo() {
        console.log(
            this.species + 
            " weighs " + this.weight +
            " and is " + this.height + " tall"
        )
    }
}

class Cat extends Animal {
    constructor(species, weight, height) {
        super(species, weight, height)

        this.color = "black"
    }
    sleep() {
        document.getElementById("jotain1").innerText = this.species + " nunnii 4636 tuntii koko aja tai jotai"
        return this
    }

    speak() {
        document.getElementById("jotain2").innerText = "WAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
        return this
    }
}

const kittie = new Cat("opsfhp", 754, 4523)
kittie.sleep().speak().sleep()

//class Dog extends Animal {

//}

//const doggie = new Dog("idiot", 75457356, 34663463)
//doggie.getInfo()

//const tiger = new Animal("tiikeri", 34763, 64)
//tiger.getInfo()
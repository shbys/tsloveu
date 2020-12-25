interface Person {
    name: string;
    getDetails(): string;
}

interface DogOwner {
    dogName: string;
    getDogDetails(): string;
}

interface DogOwner1 extends Person {
    dogName: string;
    getDogDetails(): string;
}

class Employee implements Person {
    constructor(
        public readonly id: string,
        public name: string,
        public dept: string,
        public city: string
    ) { }

    getDetails(): string {
        return `${this.name} works in ${this.dept}`;
    }
}


class Customer implements Person, DogOwner {
    constructor(
        public readonly id: string,
        public name: string,
        public city: string,
        public creditLimit: number,
        public dogName: string) { }

    getDetails() {
        return `${this.name} has ${this.creditLimit} limit`;
    }

    getDogDetails() {
        return `${this.name} has a dog named ${this.dogName}`;
    }
}

class Customer1 implements DogOwner1 {
    constructor(
        public readonly id: string,
        public name: string,
        public city: string,
        public creditLimit: number,
        public dogName: string) { }

    getDetails() {
        return `${this.name} has ${this.creditLimit} limit`;
    }

    getDogDetails() {
        return `${this.name} has a dog named ${this.dogName}`;
    }
}

export function runInterfaceClasses(): void {
    let alice = new Customer("ajones", "Alice Jones", "London", 500, "Fido");
    let dogOwners: DogOwner[] = [alice];
    dogOwners.forEach(item => console.log(item.getDogDetails()));

    let dogOwners1: DogOwner1[] = [alice];
    dogOwners1.forEach(item => console.log(item.getDogDetails()));
    
    let data: Person[] = [new Employee("fvega", "Fidel Vega", "Sales", "Paris"), alice];
    data.forEach(item => console.log(item.getDetails()));
}

type Person = {
    id: string,
    name: string,
    city: string
};

type Employee = {
    id: string,
    company: string,
    dept: string
};

type PersonIntersectionWithEmploy = {
    id: string,
    name: string,
    city: string,
    company: string,
    dept: string
};

type EmployedPerson = Person & Employee;

function correlateData(peopleData: Person[], staffData: Employee[]): EmployedPerson[] {
    const defaults = { company: "None", dept: "None" };
    return peopleData.map(p =>
    (
        {
            ...p,
            ...staffData.find(e => e.id === p.id) || { ...defaults, id: p.id }
        }
    ));
}

export function runTypeIntersections(): void {
    let bob = {
        id: "bsmith", name: "Bob", city: "London",
        company: "Acme Co", dept: "Sales"
    };
    let dataItems: (Person & Employee)[] = [bob];
    dataItems.forEach(item => {
        console.log(`Person: ${item.id}, ${item.name}, ${item.city}`);
        console.log(`Employee: ${item.id}, ${item.company}, ${item.dept}`);
    });
    console.log('---------------------------------------------------------------');

    let dataItems1: PersonIntersectionWithEmploy[] = [bob];
    dataItems1.forEach(item => {
        console.log(`Person: ${item.id}, ${item.name}, ${item.city}`);
        console.log(`Employee: ${item.id}, ${item.company}, ${item.dept}`);
    });
    console.log('---------------------------------------------------------------');

    let dataItems2: EmployedPerson[] = [bob];
    dataItems2.forEach(item => {
        console.log(`Person: ${item.id}, ${item.name}, ${item.city}`);
        console.log(`Employee: ${item.id}, ${item.company}, ${item.dept}`);
    });
    console.log('---------------------------------------------------------------');

    let people: Person[] =
        [{ id: "bsmith", name: "Bob Smith", city: "London" },
        { id: "ajones", name: "Alice Jones", city: "Paris" },
        { id: "dpeters", name: "Dora Peters", city: "New York" }];
    let employees: Employee[] =
        [{ id: "bsmith", company: "Acme Co", dept: "Sales" },
        { id: "dpeters", company: "Acme Co", dept: "Development" }];
    let dataItems3: EmployedPerson[] = correlateData(people, employees);
    dataItems3.forEach(item => {
        console.log(`Person: ${item.id}, ${item.name}, ${item.city}`);
        console.log(`Employee: ${item.id}, ${item.company}, ${item.dept}`);
    });
}
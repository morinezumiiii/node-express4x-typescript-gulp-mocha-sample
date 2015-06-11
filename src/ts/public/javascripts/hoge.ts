class Student {
  fullname : string;
  constructor(public firstname, public middleinitial, public lastname) {
    this.fullname = firstname + " " + middleinitial + " " + lastname;
  }
}

interface Person {
  firstname: string;
  lastname: string;
}

function greeter(person : Person) {
  return person.firstname + person.lastname;
}

var user = new Student("Aoi", "HogeHoge", "Takahashi");

document.body.innerHTML = greeter(user);

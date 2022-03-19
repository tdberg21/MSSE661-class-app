var submitButton = document.querySelector('.submit-button');

var object = {
  name: 'tory',
  age: 35
};

class Person {
  name;
  age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

submitButton.addEventListener('click', submitForm);

function submitForm(event) {
  event.preventDefault();
  console.log('submit!');
};

console.log(new Person ('Chet', 42));

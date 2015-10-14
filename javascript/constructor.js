function Person(name,age,city){
 this.name = name;
 this.age = age;
 this.city = city;
}

var personOne = new Person('Anderson', 22, 'Salvador');
console.log( personOne.name , personOne.age , personOne.city ); // Anderson 22 Salvador
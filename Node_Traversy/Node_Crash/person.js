const person={
    name:"john",
    age:20
};
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greet=()=>{
       console.log(`name:${this.name} and age:${this.age}`);
    }
}
module.exports=Person;
class User {
    constructor(name,age,email) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.luCoins = 0;
      this.courses = [];
    }

    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }

}

class Moderator extends User{
    constructor(name,age,email,role){
        super(name,age,email);
        this.role = role;
    }

    addCoins(){
        this.luCoins++;
        console.log(`${this.name} has ${this.luCoins} coins`);
        return this;
    }

    removeCoins(){
        this.luCoins--;
        console.log(`${this.name} has ${this.luCoins} coins`);
        return this;
    }


}

class Admin extends Moderator{
   addCourse(user,course){
       user.courses.push(course);
       console.log(user);
   }
   deleteCourse(user,course){
    user.courses.pop(course);
    console.log(user);
}
}


let user1 = new User('sagar',25,'sagar@gmail.com')
let user2 = new User('sai',24,'sai@gmai.com')
let mod = new Moderator('sini',24,'sini@gmail.com','Moderator');
let admin = new Admin('shubham',25,'sss@gmail.com');
let users = [user1,user2,mod,admin];

users.forEach(element => {
    console.log(element);
});

user1.login()
mod.addCoins();
mod.addCoins();
mod.addCoins();
user1.logout();


admin.addCourse(user1,'AI');
admin.addCourse(user2,'AML');

admin.deleteCourse(user1,'AI');



const student={
    name:"Helsinki",
    age:24,
    projects: {
        dicegame:"Two player dice game using java script"
    }
}

//printing the whole object
console.log(student);

//printing the required value
console.log(student.projects.dicegame)


console.log("--------------------")

const {name,age,projects:{dicegame}}={
    name:"Helsinki",
    age:24,
    projects: {
        dicegame:"Two player dice game using java script"
    }
}

console.log(name);
console.log(age);
console.log(dicegame);
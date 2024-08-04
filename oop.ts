import inquirer from "inquirer"

class Student{
    name: string;
    constructor(n:string){
        this.name=n;
    }
}
class Person{
    students: Student[]=[];
    addStudent(obj:Student){
        this.students.push(obj)
    }
}

const persons = new Person;

const programStart = async(persons:Person) => {
    do{
    console.log("Welcome!");
    const ans = await inquirer.prompt(
        {
            name: "select",
            type: "list",
            message: "whome would you like to interact with?",
            choices: ["Staff", "Student", "Exit"]
        })
        if (ans.select == "Staff"){
            console.log("PLease approach the staff room and feel free to ask any questions.");
        }
        else if(ans.select == "Student"){
            const ans = await inquirer.prompt({
                name: "Student",
                type: "input",
                message: "Enter the name of the student you want to interact with: ",
                
            })
            const student = persons.students.find(val => val.name == ans.student)
            if(!student){
                const name = new Student(ans.student)
                persons.addStudent(name);
                console.log(`Hello i am ${name.name}. Nice to meet you.`);
                console.log("New Student Added");
                console.log("Current student List");
                console.log(persons.students);
            } else {
                    console.log(`Hello i am ${student.name}. Nice to see you again.`);
                    console.log("Existing student List");
                    console.log(persons.students);
                }
        }else if (ans.select){
            console.log("Exiting the program....");
            process.exit()
        }
    }while(true)
    }
programStart(persons)

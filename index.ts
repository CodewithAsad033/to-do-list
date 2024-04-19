#! usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList :string [] =[];

let condition = true;

//print the message
console.log(chalk.magenta.bold("\n \twelcome to Code wit Asad -ToDo-list Appliction\n"));

//while(conditions){
//   let addTask = await inquirer.prompt([
  //  {
    //    name: "task",
      //  type: "input",
         //message: "chalk.green("Enter your New Task :")
    //}
   //])
   //todoList.push(addTask.task);
  // console.log(`\n "${chalk.cyanBright.bold(add.Task.task)}"Task added inToDo-List successfully\n`);

  //let addmoretask = await inquirer.prompt([
    //{
        //name: "addmore",
        //type: "confirm",
        //message: "do you want to addmore task",
      //  default:"false"

    //}
  //]) 
  //conditions =addmoretask.addmore
//}
//console.log( , todolist"\n Your updated ToDo-list:");
let main = async  () => {
    while(condition){
        let option = await inquirer.prompt([
            {
                name: "choice",
                type:"list",
                message:"select an option you want to do",
                choices:["Add Task","Delete Task","update task","view task ToDo-List","Exit" ]
            }
        ]);
        if(option.choice === "Add Task"){
            await addTask()
        }   
        else if (option.choice === "Delete Task"){
            await deletetask()
        }
        else if (option.choice === "update task"){
            await updatetask()
        }
        else if(option.choice === "view task ToDo-List"){
            await viewTask()
        }
        else if(option.choice === "Exit"){
            condition = false
        }
        
            
    
    }
}
//Function to add new Task tothe list
let addTask =async () =>{
    let newTask = await inquirer.prompt([
        {
            name:"task",
            type: "input",
            message:"Enter tour new task;"
        }
    ]);
    todoList.push(newTask.task);
    console.log(` \n${newTask.task}Task added success fully in ToDo-List`);
    
}
// Function to view all todo new Task
let viewTask = () => {
    console.log("\n Your todo -list");
    todoList.forEach((task, Index) => {
        console.log(`${Index
        +1}:${task}`)


    })
    
}
//Function to delete task
let deletetask = async ()=>{
    await viewTask()
    let Taskindex = await inquirer.prompt([
        {
            name :"index",
            type:"number",
            message: "Enter the `index no.`of the task you want to delete; "
        }
    ]); 
    let deletedtask=todoList.splice(Taskindex.index -1, 1);
    console.log(`\n ${deletedtask} this task has been deleted success fully from your todo-list`)
}
// Function to update Task
let updatetask =async ()=>{
    await viewTask()
    let update_task_index =await inquirer.prompt([
        {
            name:"index",
            type:"number",
            message:"Enter the index of the task you want to update;"

        },
        {
            name:"new_task",
            type:"input",
            message:"Now enter the new task name",

        }
    ]) ;
    todoList[update_task_index.index-1] =update_task_index.new_task
    console.log(`\nTask at index number ${update_task_index.index-1}updated to success full[ for updated list Check option: "View ToDo-List"]`)

}
main();


const prompt = require('prompt-sync')({sigint: true});

console.log( "Welcome to the to TO-DO LIST Manager Application!");

console.log("");

console.log("Select and action: ");
console.log("");
console.log("[1] Create TO-DO item" );
console.log("");
console.log( "[2] Complete TO-DO item ");
console.log( "[3] Exit the TO-DO list! ");

console.log("");

let choice = Number(prompt("> "));

let tasks = [""];
let statusarray = [""];




while(choice !== 3){

if(choice === 1){
    console.log("Create a new task: ");
    //prompt to ask user for new task
console.log("");
    let answer = prompt(" Please enter a task! ");

    tasks.push(answer);
    statusarray.push(false);
    //console.log(tasks);

    for(let i = 1; i < tasks.length; i++){
        console.log(i + ". " + tasks[i]);

    }

    printlist();
    selectchoice();

} else if( choice === 2){
    console.log( " Select a task to complete.");
    console.log("");

    printlist();
    selectchoice();

console.log("");


}
    else{
        console.log("Please choose either option 1, 2, or 3");
        }
        printlist();
        selectchoice();
    }





// functions:

    function selectchoice(){
        console.log( " Select a task to complete.");
        console.log("");
    
    console.log("Select and action: ");
    console.log("");
    console.log("[1] Create TO-DO item" );
    console.log("");
    console.log( "[2] Complete TO-DO item ");
    console.log( "[3] Exit the TO-DO list! ");
    
    console.log("");
    choice = Number(prompt("> ")); 
    }

    function printlist(){
        console.log("\nCurrent TO-DO List: ");
        let status = "";
        for(let i = 1; i < tasks.length; i++){
            if(statusarray[i] === false) {
                status = "[Incomplete]"}
                else if(statusarray[i] === true){
                status = "[Complete]"
                }
                console.log(i + ". " + status + task[i]);

            
            console.log(i + ". " + tasks[i]);
            console.log("");
    
        }
    
    }


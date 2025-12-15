export{};

let args = process.argv.slice(2);
let oper = args[0];
let a = Number(args[1]);
let b = Number(args[2]);
let result;

    switch(oper){
    case "add" : 
    result = a+b;
    console.log(result); break;
    case "sub" : 
    result = a-b;
    console.log(result); break;
    case "mul" : 
    result = a*b
    console.log(result); break;
    case "div" : 
    if(b === 0){
        console.log("Invalid input");
    }else{
        result = a/b
        console.log(result);
    } break;
    default : console.log("Invalid operator"); break;

}
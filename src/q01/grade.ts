export{};

let args = process.argv.slice(2);
let grade = Number(args[0]);
if (Number.isNaN(grade)){
  console.log("Invalid input");  
}else if(grade < 0 || grade > 100){
  console.log("Invalid input");
} else {
  if (grade >= 80){
    console.log("You got A !");
  }else if(grade >=70){
    console.log("B");
  }else if(grade >= 60){
    console.log("C");
  }else if(grade >= 50){
    console.log("D :(");
  }else {
    console.log("F :(");
  }
}


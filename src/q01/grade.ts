export{};

let args = process.argv.slice(2);
let grade = Number(args[0]);
if (Number.isNaN(grade)){
  console.log("Invalid input");  
}else if(grade < 0 || grade > 100){
  console.log("Invalid input");
} else {
  if (grade >= 80){
    console.log("Grade is A");
  }else if(grade >=70){
    console.log("Grade is B");
  }else if(grade >= 60){
    console.log("Grade is C");
  }else if(grade >= 50){
    console.log("Grade is D");
  }else {
    console.log("Grade is F");
  }
}


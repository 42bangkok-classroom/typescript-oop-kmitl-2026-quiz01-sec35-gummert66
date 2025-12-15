export {};

let args = process.argv.slice(2);
let balance = Number(args[0]);
let withdraw = Number(args[1]);

if(!balance||!withdraw){
    console.log("Invalid Input");
}
else if (withdraw > balance) {
  console.log("Insufficient balance");
}

else if (withdraw > 5000) {
  console.log("Exceeds per-withdrawal limit");
}

else {
  console.log("Withdrawal approved");
}
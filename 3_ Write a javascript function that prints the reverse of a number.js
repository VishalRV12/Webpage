let a = 0;
let num = 132;
let lastDigit;

while(num != 0){
	lastDigit = num % 10;
  a = a * 10 + lastDigit;
  num = Math.floor(num/10);
}
console.log("Reverse number : "+a);
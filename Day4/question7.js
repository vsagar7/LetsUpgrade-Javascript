let num=prompt("Enter a number to get the prime numbers");

for (i = 2; i<= num;i++){

    let prime=isPrime(i);
    if(prime){
        console.log(i);
    }

}

function isPrime(num) {
    for(var i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }
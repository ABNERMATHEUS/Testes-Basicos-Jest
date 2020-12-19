 function fizzbuzz(number){
    
    let result =  "";

    if(number % 3 == 0){
        result +="Fizz"
    }
    if(number % 5 == 0){
        result += "Buzz"
    }
   else if(result === ""){
       result = number;
   }
   
   return result;
}


module.exports = fizzbuzz;
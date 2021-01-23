

//    https://github.com/mshakhawat89/assaignment3





/**       Bellow is My 1st task   */    


function kilometerToMeter(kilometer){

 var meter = kilometer*1000;

return meter;
}


var result = kilometerToMeter(-7);

if(result>0){

    console.log(result);
}



else{
    console.log("distance cann't be negative");
}












/**                My 2nd task      */       
 




function budgetCalculator(n){

var watchCostings   = 50 * n;
var mobileCostings = 100 * n;
var laptopCostings = 500 * n;

var totalCostings = watchCostings + mobileCostings + laptopCostings;

return totalCostings;
}

var budget = budgetCalculator(40);

if(budget>0){
    console.log(budget);
}

else{
    console.log("Nothing is free in the world even poison");
}















/**          My 3rd task is given bellow...  */          


function hotelCost(night){
cost = 0;

 if( night<=10){
 cost = night * 100;

 }
else if(night<= 20){
 var firstCost = 10*100;
 var remaining = night -10;
 var secondCost = remaining* 80;
 cost = firstCost + secondCost;

}
else{
var firstCost = 10*100;
var secondCost =10*80;
var remaining = night - 20;
var thirdCost = remaining*50;
cost = firstCost + secondCost + thirdCost;
}

return cost;
}

var totalCostings = hotelCost(36);

if(totalCostings>0){
    console.log(totalCostings);
}

else{
    console.log("please check your input  put the correct values ");
}








  
/**       my last task       */



function megaFriend(str){

var friend = str.split(" ");
var longestFriend= "";
for(var i = 0; i< friend.length; i++){
    if(friend[i].length>longestFriend){

        longestFriend = friend[i].length;
    }
    }
return longestFriend;
     }
     console.log(megaFriend("kamal Shakhawat shantono habib kamrul arif choton"));
  
















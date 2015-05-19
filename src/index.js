/**
 * Created by ryalamanchi on 08/05/2015.
 */
console.log("what is happening...")

function arraySort(list){

    list.sort(function(itemA, itemB)
    {
       return itemA > itemB;
    });
}

var listOfNumber = [3,2,6,5,1,4];
console.log(listOfNumber);
arraySort(listOfNumber);
console.log(listOfNumber);

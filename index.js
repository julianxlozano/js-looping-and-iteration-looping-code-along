// Code your solutions in this file

function writeCards(names,eventName){
    let newNames = [];
    for (let i=0; i<names.length;i++){
        newNames.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`)
    };
    return newNames
};

function countDown(number){
   let count = number
   while (count > -1){
        console.log(count)
        count--
   }
};


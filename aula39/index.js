i = 0;

while (i <= 10){
    console.log(i);
    i++;
}
console.log("-=--=-=-=-=")

function random(min, max){
    const r = Math.random()* (max-min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;

let rand = random(min, max);
    

while (rand != 10){
    rand = random(min, max);
    console.log(rand);
}

console.log("-=-==-=-=-=-")
i = 0 

do{
    console.log(i)
    i++;

}while(i <= 10);
const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const styleBody = getComputedStyle(document.body);
const bkgClrBody = styleBody.backgroundColor;
console.log(bkgClrBody)

for (let p of ps){
    p.style.backgroundColor = bkgClrBody;
    p.style.color = "white";
}
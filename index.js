const buttons = document.querySelectorAll('.button');
const body = document.body

buttons.forEach(function(button){
    console.log(button)
    button.addEventListener('click' , function(item){
console.log(item)
console.log(item.target)
if(item.target.id ==='green'){
    body.style.backgroundColor=item.target.id;
}
if(item.target.id ==='purple'){
    body.style.backgroundColor=item.target.id;
}
if(item.target.id ==='yellow'){
    body.style.backgroundColor=item.target.id;
}
if(item.target.id ==='red'){
    body.style.backgroundColor=item.target.id;
}
    })
})


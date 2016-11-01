var names = ['Rankine', 'Helen', 'Ring']
//
// names.forEach(function(name){
//     console.log('forEach', name);
// })
//
// names.forEach((name) => {
//     console.log('arrowFunc', name)
// })
//
// names.forEach((name) => console.log(name))
//
// var returnMe = (name) => name+'!';
// console.log(returnMe('Rankine Leung'))

// var person = {
//     name:'Rankine',
//     greet:function(){
//         names.forEach((name) => {
//             console.log(this.name + ' Says Hi to ' + name)
//         })
//     }
// }
//
// person.greet();


//Challenge

function add(a, b){
    return a+b;
}

//add statement
var addStatement = (a,b) =>{ return a+b };
console.log(addStatement(10, 11))
//add expression
var addStatement = (a,b) => a+b ;
console.log(addStatement(10, 11))


console.log(add(1,3));
console.log(add(9,0));

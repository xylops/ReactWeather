// function getTempCallback(location, callback){
//     callback(undefined, 78);
//     callback('City Not found')
// }
//
// getTempCallback('Hong Kong', function(err, temp){
//     if(err){
//         console.log('error : ', err)
//     }else{
//         console.log('success', temp)
//     }
// });
//
//
// function getTempPromise(location){
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             resolve(79);
//             reject('City Not found')
//         }, 5000)
//     })
// }
//
// getTempPromise('Hong Kong').then(function(temp){
//     console.log('Promise Success', temp)
// }, function(err){
//     console.log('Promise error', err)
// })

//Challenge Area

function addPromise (a, b){
    return new Promise(function(resolve, reject){
        if(typeof a === 'number' && typeof b === 'number'){
            resolve(a+b);
        }else{
            reject('this is an error')
        }
    })
}
addPromise(10,'b').then(function(numb){
    console.log('success', numb)
}, function(err){
    console.log('fail', err)
})

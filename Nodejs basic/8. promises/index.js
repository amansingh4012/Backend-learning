

function delayFn(time){
    return new Promise((resolve)=> setTimeout(resolve,time))
}

console.log('Promise lec call')
delayFn(2000).then(()=> console.log("after 2 sec"))

console.log("end")


function division(num1,num2){
    return new Promise ((resolve, reject)=> {
        if(num2 === 0) {
            reject("division is not possible");
        }
        else{
            resolve(num1/num2);

        }
    })
}

division(15,3)
.then(result=> console.log('result : ', result))
.catch(error=> console.log("error",error))
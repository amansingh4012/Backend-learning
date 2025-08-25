function delayFn (time){
    return new Promise((resolve) => setTimeout(resolve,time)
    )
}

async function Greet(name) {
    await delayFn(2000)
    console.log(`hello ${name}`)
    
}

Greet("Aman")


async function divide(num1,num2) 
{
    try{
        if(num2===0) throw new Error("can not divide by 0");
        return num1/num2;
        
    }   
    catch(error){
        console.error("error : ", error);
        return null;

    }
}

async function mainFn() 
{
    console.log(await divide(10,2));
    console.log(await divide(10,0));    
}

mainFn();
const arr = [1, 2, 3, 4, 5];
let i = 0;

const interval = setInterval(() => {
    if (i < arr.length) {
        console.log(arr[i]);
        
        i++;
    } else {
        clearInterval(interval); // Stop when done
    }
}, 3000);
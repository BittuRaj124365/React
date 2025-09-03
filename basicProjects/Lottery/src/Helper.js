    // for generating 3 random no for tickets
export function generateTicket(n){
    let arr=new Array(n);
    for (let i=0; i<n; i++){
        arr[i]=Math.floor(Math.random()*10);
    }
    return arr;
}

    // for checking the wining condition if the sum of no of ticket is 15 or not.
export function sumOfArr(arrTicket){
    let sum=0
    for (let i=0; i<arrTicket.length; i++){
        sum+=arrTicket[i];
    }
    return sum;
}
// export {generateTicket,sum}
//problem-1
function cubeNumber(number) {
    if(typeof number == 'number')
    {
        return Math.pow(number,3);
    }
    else{
        return 'Invalid Input';
    }
}
//console.log(cubeNumber(5));

//problem-2
function matchFinder(string1, string2) {
    if(typeof string1 == 'string' && typeof string2 == 'string')
    {
        if (string1.includes(string2))
        {
            return true;
        } 
        else 
        {
            return false;
        }
    }
    else{
        return 'Invalid Input(Both should be String)';
    }
   

}
//console.log(matchFinder("John Doe",5));

//problem-3
function sortMaker(arr) {
    if(arr[0]<0 || arr[1]<0)
    {
        return 'Invalid input';
    }
    else if(arr[0]>arr[1])
    {
        return arr;
    }
    else if (arr[0]<arr[1])
    {
        let swap=arr[0];
        arr[0]=arr[1];
        arr[1]=swap;
        return arr;
    }
    else
    {
        return 'equal';
    }
}
let arr=[1,2];
//console.log(sortMaker(arr));

//problem-4
function findAddress(obj) {
    if(typeof obj != 'object')
    {
        return 'Provide a valid object';
    }
    else{
       const street=obj.street || '__'; 
       const house=obj.house || '__'; 
       const society=obj.society || '__';
        let result='';
        result+=street+','+house+','+society;
        return result;
    }
    

}
let address = {
    street:10,
    house: "15A",
    society: "Earth Perfect"
};
//console.log(findAddress(address));

//problem-5
function canPay(changeArray, totalDue) {
    if(changeArray.length>0)
    {
            let sum=0;
            for(let i=0; i<changeArray.length; i++)
            {
             sum+=changeArray[i];
            }
            if(sum>=totalDue)
            {
             return true;
            }
            else{
             return false;
            }
    }
    else{
        return 'Array is Empty!';
    }
    

}
let array=[1,5,4];
let price=10;
//console.log(canPay(array,price));



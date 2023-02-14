//BINARY SEARCh
let recursiveFunction = function (arr, x, start, end) {
	
	
	if (start > end) return false;

	
	let mid=Math.floor((start + end)/2);

	
	if (arr[mid]===x) return true;
		
	
	if(arr[mid] > x)
		return recursiveFunction(arr, x, start, mid-1);
	else

		
		return recursiveFunction(arr, x, mid+1, end);
}


let arr = [1, 3, 5, 7, 8, 9];
let x = 5;

if (recursiveFunction(arr, x, 0, arr.length-1))
	document.write("Element found!<br>");
else document.write("Element not found!<br>");

x = 6;

if (recursiveFunction(arr, x, 0, arr.length-1))
	document.write("Element found!<br>");
else document.write("Element not found!<br>");

//evenish or oddish

var a = 121;
const evenishororoddish=(x)=>{
    var ans = 0;
    while(x>0){
        var rem = x%10;
        ans = ans+rem;
        x=Math.round(x/10);
    }
    if(ans%2==0){
        return "evenish";
    }else{
        return "oddish";
    }
}
var ans = evenishororoddish(a);
console.log(ans);


//concatenate

const arr=[[1],[2],[3]];

const concatenate=(arr)=>{
   var merge=[];
for(var i=0;i<arr.length;i++)
{
merge=merge.concat(arr[i]);
}
console.log(merge);
}

concatenate(arr);
var ani = [];
const binarySearch = (arr, l, r, x) =>
{ 
    if (r >= l) { 
        const mid = Math.floor(l+(r - l)/2); 

        ani.push([mid]);
        ani.push([mid]);
        // If the element is present at the middle 
        // itself 
        if (arr[mid] === x) {
           ani.push([mid]);
            //ani.push([mid])
            return mid; 
  }
        // If element is smaller than mid, then 
        // it can only be present in left subarray 
        if (arr[mid] > x) {
            ani.push([l,mid-1,"left"]);
            ani.push([l,mid-1,"left"]);
            return binarySearch(arr, l, mid - 1, x); 
  }
        // Else the element can only be present 
        // in right subarray
        else {
           ani.push([mid+1,r,"right"]);
            ani.push([mid+1,r,"right"]);
        return binarySearch(arr, mid + 1, r, x); }
    } 
  
    // We reach here when element is not 
    // present in array 
    ani.push([-1]);
    return -1; 
} 
const Binary_Search = (arr,x) => {
    ani = []
    binarySearch(arr,0,arr.length-1,x);
    //console.log(ani);
    //console.log(ani.length);
    
    
    return ani;
    
}
//iff last element in list is -1 then no need to check
//and loop will run till n-2  
//console.log(Binary_Search([1,2,3,4],-1));

export default Binary_Search;
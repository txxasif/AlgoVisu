const Bubble_Sort = (arr) => {
        var ar = arr;
        var animation = [];
    for(let i = 0;i<ar.length-1;i++) {
        for(let j = 0;j<ar.length-i-1;j++) {
            if(ar[j].Name>ar[j+1].Name) {
                animation.push([j,j+1]);
                var x = ar[j];
                ar[j] = ar[j+1];
                ar[j+1] = x;
            }
        }
    }
    return [ar,animation];
}
export default Bubble_Sort;
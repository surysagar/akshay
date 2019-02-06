function swap(arr, i1, i2) {
    var temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
  }
  
  function bubblesort(arr) {
    
    var swapped = true;
    
    // keep going unless no elements can be swapped anymore
    while (swapped) {
      
      // set swapped to false so that the loop stops
      // unless two element are actually swapped
      swapped = false;
  
      // loop through the whole array swapping adjacent elements
      for (var i = 1; i < arr.length; i++) {
        if (arr[i-1] > arr[i]) {
          swap(arr, i-1, i);
          swapped = true;
        }
      }
      
    }
    
    return arr;
           
  }


 function jsFileObject() {
    this.bubblesort([103, 45, 2, 1, 97, -4, 67]);
  };

 //var abc = "sagar";

  const abc = 'sagar';

//   export const sqrt = Math.sqrt;
// export function square(x) {
//     return x * x;
// }
// export function diag(x, y) {
//     return sqrt(square(x) + square(y));
// }
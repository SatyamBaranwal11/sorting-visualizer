const merge = async (array, setArray, l, m, r, speed) => {
    const n1 = m - l + 1;
    const n2 = r - m;
    
    // Create temp arrays
    const L = new Array(n1);
    const R = new Array(n2);
    
    // Copy data to temp arrays
    for (let i = 0; i < n1; i++) {
      L[i] = array[l + i];
    }
    for (let j = 0; j < n2; j++) {
      R[j] = array[m + 1 + j];
    }
    
    // Merge the temp arrays
    let i = 0, j = 0, k = l;
    
    while (i < n1 && j < n2) {
      // Highlight comparing bars
      const bars = document.querySelectorAll('.array-bar');
      if (bars[l + i]) bars[l + i].style.backgroundColor = '#e74c3c';
      if (bars[m + 1 + j]) bars[m + 1 + j].style.backgroundColor = '#e74c3c';
      await new Promise(resolve => setTimeout(resolve, speed));
      
      if (L[i] <= R[j]) {
        array[k] = L[i];
        i++;
      } else {
        array[k] = R[j];
        j++;
      }
      
      setArray([...array]);
      
      // Reset colors
      if (bars[l + i - 1]) bars[l + i - 1].style.backgroundColor = '#3498db';
      if (bars[m + j]) bars[m + j].style.backgroundColor = '#3498db';
      
      // Mark sorted position
      if (bars[k]) bars[k].style.backgroundColor = '#2ecc71';
      k++;
    }
    
    // Copy remaining elements of L[]
    while (i < n1) {
      array[k] = L[i];
      setArray([...array]);
      
      const bars = document.querySelectorAll('.array-bar');
      if (bars[k]) bars[k].style.backgroundColor = '#2ecc71';
      
      i++;
      k++;
      await new Promise(resolve => setTimeout(resolve, speed));
    }
    
    // Copy remaining elements of R[]
    while (j < n2) {
      array[k] = R[j];
      setArray([...array]);
      
      const bars = document.querySelectorAll('.array-bar');
      if (bars[k]) bars[k].style.backgroundColor = '#2ecc71';
      
      j++;
      k++;
      await new Promise(resolve => setTimeout(resolve, speed));
    }
  };
  
  export const mergeSort = async (array, setArray, speed, l = 0, r = array.length - 1) => {
    if (l < r) {
      const m = Math.floor((l + r) / 2);
      
      // Sort first and second halves
      await mergeSort(array, setArray, speed, l, m);
      await mergeSort(array, setArray, speed, m + 1, r);
      
      // Merge the sorted halves
      await merge(array, setArray, l, m, r, speed);
    }
    
    // Mark all elements as sorted when done
    if (l === 0 && r === array.length - 1) {
      const bars = document.querySelectorAll('.array-bar');
      bars.forEach(bar => {
        if (bar) bar.style.backgroundColor = '#2ecc71';
      });
    }
  };
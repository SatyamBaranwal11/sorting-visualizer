const partition = async (array, setArray, low, high, speed) => {
    const pivot = array[high];
    let i = low - 1;
    
    // Highlight pivot
    const bars = document.querySelectorAll('.array-bar');
    bars[high].style.backgroundColor = '#f39c12';
    
    for (let j = low; j < high; j++) {
      // Highlight comparing bars
      bars[j].style.backgroundColor = '#e74c3c';
      await new Promise(resolve => setTimeout(resolve, speed));
      
      if (array[j] < pivot) {
        i++;
        
        // Swap elements
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        setArray([...array]);
        
        // Reset color after swap
        bars[i].style.backgroundColor = '#3498db';
        bars[j].style.backgroundColor = '#3498db';
      } else {
        // Reset color if not swapped
        bars[j].style.backgroundColor = '#3498db';
      }
    }
    
    // Swap pivot to correct position
    const temp = array[i + 1];
    array[i + 1] = array[high];
    array[high] = temp;
    setArray([...array]);
    
    // Mark pivot as sorted
    bars[i + 1].style.backgroundColor = '#2ecc71';
    bars[high].style.backgroundColor = '#3498db';
    
    return i + 1;
  };
  
  export const quickSort = async (array, setArray, speed, low = 0, high = array.length - 1) => {
    if (low < high) {
      const pi = await partition(array, setArray, low, high, speed);
      
      // Recursively sort elements before and after partition
      await quickSort(array, setArray, speed, low, pi - 1);
      await quickSort(array, setArray, speed, pi + 1, high);
    }
    
    // Mark all elements as sorted when done
    if (low === 0 && high === array.length - 1) {
      const bars = document.querySelectorAll('.array-bar');
      bars.forEach(bar => {
        bar.style.backgroundColor = '#2ecc71';
      });
    }
  };
export const bubbleSort = async (array, setArray, speed) => {
    const n = array.length;
    let swapped;
    
    for (let i = 0; i < n - 1; i++) {
      swapped = false;
      
      for (let j = 0; j < n - i - 1; j++) {
        // Highlight comparing bars
        const bars = document.querySelectorAll('.array-bar');
        bars[j].style.backgroundColor = '#e74c3c';
        bars[j + 1].style.backgroundColor = '#e74c3c';
        
        await new Promise(resolve => setTimeout(resolve, speed));
        
        if (array[j] > array[j + 1]) {
          // Swap elements
          const temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
          swapped = true;
          
          // Update array state
          setArray([...array]);
        }
        
        // Reset color if not sorted
        if (array[j] <= array[j + 1]) {
          bars[j].style.backgroundColor = '#3498db';
          bars[j + 1].style.backgroundColor = '#3498db';
        }
      }
      
      // Mark last element as sorted
      const bars = document.querySelectorAll('.array-bar');
      bars[n - i - 1].style.backgroundColor = '#2ecc71';
      
      if (!swapped) break;
    }
    
    // Mark all remaining elements as sorted
    const bars = document.querySelectorAll('.array-bar');
    bars.forEach(bar => {
      bar.style.backgroundColor = '#2ecc71';
    });
  };
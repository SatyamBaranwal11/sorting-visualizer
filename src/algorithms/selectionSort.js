export const selectionSort = async (array, setArray, speed) => {
    const n = array.length;
    
    for (let i = 0; i < n - 1; i++) {
      let minIdx = i;
      
      // Highlight current min
      const bars = document.querySelectorAll('.array-bar');
      bars[minIdx].style.backgroundColor = '#f39c12';
      
      for (let j = i + 1; j < n; j++) {
        // Highlight comparing bars
        bars[j].style.backgroundColor = '#e74c3c';
        await new Promise(resolve => setTimeout(resolve, speed));
        
        if (array[j] < array[minIdx]) {
          // Reset previous min color
          bars[minIdx].style.backgroundColor = '#3498db';
          minIdx = j;
          bars[minIdx].style.backgroundColor = '#f39c12';
        } else {
          // Reset comparing bar color
          bars[j].style.backgroundColor = '#3498db';
        }
      }
      
      // Swap elements
      if (minIdx !== i) {
        const temp = array[i];
        array[i] = array[minIdx];
        array[minIdx] = temp;
        setArray([...array]);
        
        // Reset colors after swap
        bars[i].style.backgroundColor = '#2ecc71';
        bars[minIdx].style.backgroundColor = '#3498db';
      } else {
        bars[i].style.backgroundColor = '#2ecc71';
      }
    }
    
    // Mark last element as sorted
    const bars = document.querySelectorAll('.array-bar');
    bars[n - 1].style.backgroundColor = '#2ecc71';
  };
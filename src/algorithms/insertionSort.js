export const insertionSort = async (array, setArray, speed) => {
    const n = array.length;
    
    for (let i = 1; i < n; i++) {
      const key = array[i];
      let j = i - 1;
      
      // Highlight key element
      const bars = document.querySelectorAll('.array-bar');
      bars[i].style.backgroundColor = '#f39c12';
      
      while (j >= 0 && array[j] > key) {
        // Highlight comparing bars
        bars[j].style.backgroundColor = '#e74c3c';
        await new Promise(resolve => setTimeout(resolve, speed));
        
        array[j + 1] = array[j];
        setArray([...array]);
        
        // Reset color
        bars[j].style.backgroundColor = '#3498db';
        j--;
      }
      
      array[j + 1] = key;
      setArray([...array]);
      
      // Mark sorted elements
      bars[j + 1].style.backgroundColor = '#2ecc71';
    }
    
    // Mark all elements as sorted
    const bars = document.querySelectorAll('.array-bar');
    bars.forEach(bar => {
      bar.style.backgroundColor = '#2ecc71';
    });
  };
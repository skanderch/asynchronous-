//async function iterateWithAsyncAwait that takes an array of values as its argument.
const iterateWithAsyncAwait = async (values) => {
    // Iterate over the input array using a for-await-of loop
    for (const value of values) {
      // Wait for 1 second before logging the value
      await new Promise((resolve) => setTimeout(resolve, 1000)); //This means that the promise will be resolved after 1 second has elapsed.
      console.log(value);
    }
  };
  
  // Example usage:
  const values = [1, 2, 3, 4, 5];
  iterateWithAsyncAwait(values);
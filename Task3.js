const awaitCall = async () => {
    try {
      // Simulate API call using setTimeout with a delay of 2 seconds
      const response = await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simulate API failure by rejecting the promise
          reject('API failure: network error');
        }, 2000);
      });
      console.log('API response:', response);
    } catch (error) {
      console.error('Error in awaitCall:', error);
      alert('Oops! Something went wrong. Please try again later.');
    }
  };
  
  // Example usage:
  awaitCall();
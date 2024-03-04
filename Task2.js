const awaitCall = async () => {
    try {
      // Simulate API call using setTimeout with a delay of 2 seconds
      const response = await new Promise((resolve) => setTimeout(() => resolve('API response data'), 2000));
      console.log('API response:', response);
    } catch (error) {
      console.error('Error in awaitCall:', error);
    }
  };
  
  // Example usage:
  awaitCall();
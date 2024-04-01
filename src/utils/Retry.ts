async function retryWithBackoff(
  operation: () => Promise<any>,
  maxRetries: number,
  delayMs: number
): Promise<any> {
  let retries = 0;
  while (true) {
    try {
      return await operation();
    } catch (error) {
      if (retries >= maxRetries) {
        throw error;
      }
      console.error(
        `Retrying operation after ${delayMs}ms (attempt ${
          retries + 1
        }/${maxRetries})`
      );
      await new Promise((resolve) => setTimeout(resolve, delayMs));
      retries++;
      delayMs *= 2; // Exponential backoff
    }
  }
}

export { retryWithBackoff };

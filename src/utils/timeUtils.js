export const secondsToDate = (timestampSeconds) => {
    const date = new Date(timestampSeconds * 1000);
    return date.toISOString(); // You can format the date here as needed
  };
  
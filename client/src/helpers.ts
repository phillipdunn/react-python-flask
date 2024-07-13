export const timeStamp = (timeString: string) => {
  const date = new Date(timeString);
  const formattedDate = `${date.getDate().toString().padStart(2, '0')}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${date.getFullYear()} ${date.getHours().toString().padStart(2, '0')}:${date
    .getMinutes()
    .toString()
    .padStart(2, '0')}`;
  return formattedDate;
};
export const dataCleaner = (data: any[]) => {
  const cleanedData = data.map((item) => {
    const { timestamp: timeString, credits_used: creditsUsed } = item;

    const timestamp = timeStamp(timeString);
    return { timestamp, creditsUsed };
  });
  return cleanedData;
};

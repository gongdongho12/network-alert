import dayjs from 'dayjs';

export const dateFormatToDate = (
  dateString: string,
  format = ['YYYY', 'YYYY-MM-DD', 'YYYY-MM-DD HH:mm:ss', 'YYYY-MM-DD HH:mm:ss.SSS'],
): Date => {
  return dayjs(dateString, format, true).toDate();
};

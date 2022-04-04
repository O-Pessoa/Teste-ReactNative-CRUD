export const fixDigits = (value: number, digits: number) =>
  ('0'.repeat(digits) + value.toString()).slice(-digits);

export const formatDate = (date: Date) =>
  `${fixDigits(date.getDate(), 2)}/${fixDigits(
    date.getMonth() + 1,
    2,
  )}/${date.getFullYear()}`;

export const formatDateWithTime = (date: Date) =>
  `${formatDate(date)} ${fixDigits(date.getHours(), 2)}:${fixDigits(
    date.getMinutes(),
    2,
  )}`;

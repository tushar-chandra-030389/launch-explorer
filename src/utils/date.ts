export function addMonths(add = 3) {
  const date = new Date();
  const newDate = new Date(date.setMonth(date.getMonth() + add));
  return newDate;
}

export function formatDateForAPI(date: Date) {
  return date.toISOString();
}

// create a formatter for date to convert from 2023-01-01 into January 1, 2023
export function formatDate(date: Date | string): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }

  // If date is a string, convert it to a Date object
  if (typeof date === 'string') {
    date = new Date(date)
  }

  // Check if the date is valid
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date')
  }

  return date.toLocaleDateString('en-US', options)
}

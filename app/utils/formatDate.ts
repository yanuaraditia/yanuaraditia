const defaultDateOptions: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}

function normalizeDate(date: Date | string): Date {
  if (date instanceof Date) {
    return date
  }

  const dateOnlyMatch = date.match(/^(\d{4})-(\d{2})-(\d{2})$/)

  if (dateOnlyMatch) {
    const [, year, month, day] = dateOnlyMatch

    return new Date(Date.UTC(Number(year), Number(month) - 1, Number(day)))
  }

  return new Date(date)
}

export function formatDate(
  date: Date | string,
  options: Intl.DateTimeFormatOptions = defaultDateOptions
): string {
  const normalizedDate = normalizeDate(date)

  if (isNaN(normalizedDate.getTime())) {
    throw new Error('Invalid date')
  }

  return new Intl.DateTimeFormat('en-US', {
    ...options,
    timeZone: 'UTC'
  }).format(normalizedDate)
}

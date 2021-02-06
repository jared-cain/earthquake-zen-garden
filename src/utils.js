export const normalizeDate = (date) => {
  return new Date(date).toLocaleString(undefined, {
    day:    'numeric',
    month:  'short',
    year:   'numeric',
    hour:   '2-digit',
    minute: '2-digit',
  })
}
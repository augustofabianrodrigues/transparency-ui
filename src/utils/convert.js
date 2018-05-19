function stringToBoolean (val) {
  const number = parseInt(val)
  if (Number.isNaN(number)) {
    return val.toLowerCase() === 'true'
  }

  return numberToBoolean(number)
}

function numberToBoolean (val) {
  return Boolean(parseInt(val))
}

export function toBoolean (val) {
  switch (typeof val) {
    case 'string': return stringToBoolean(val)
    case 'number': return numberToBoolean(val)
  }

  return Boolean(val)
}

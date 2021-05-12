export const required = value => {
    if(value)  return undefined

    return 'Error'
}

export const maxLengthCreator = (maxLength) => (value) => {
    if(value.length > maxLength)  return `Max length ${maxLength}`

    return undefined
}


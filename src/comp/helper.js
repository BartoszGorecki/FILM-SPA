
export const calcTime = time => {
    const hours = Math.floor(time/60)
    const mins = time % 60
    return `${hours}h ${mins}m`
}

export const convertMoney = money => {

    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    })

    if ( money === 0) {
        return "no info"
    } else {   
    return formatter.format(money)
    }
}
import { utils } from 'ethers'

export function desensitization(value, start, end) {
    if (!value) {
        return value
    }
    return value.substring(0, start) + '...' + value.substring(value.length - end, value.length)
}

export function desensitizationAddress(value) {
    return desensitization(value, 15, 0)
}

export function gwei2Ether(gwei) {
    return parseFloat(utils.formatEther(gwei))
}

export function decimalTruncate(number, decimalLength) {
    const numberStr = number.toString()
    return numberStr.indexOf('.') > 0 ? numberStr.substring(0, numberStr.indexOf('.') + decimalLength + 1) : numberStr
}

export function sleep(interval) {
    return new Promise(resolve => {
        setTimeout(resolve, interval)
    })
}

export function random(max, min) {
    return Math.floor(Math.random() * (max - min) + min)
}

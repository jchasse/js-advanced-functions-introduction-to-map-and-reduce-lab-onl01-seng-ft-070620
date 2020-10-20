// pry = require('pryjs')

function mapToNegativize(sourceArray) {
    let newArray = []
    for (let element of sourceArray) {
        newArray.push(element * -1)
    }
    return newArray
}

function mapToNoChange(sourceArray) {
    let newArray = []
    for (let element of sourceArray) {
        newArray.push(element)
    }
    return newArray
}

function mapToDouble(sourceArray) {
    let newArray = []
    for (let element of sourceArray) {
        newArray.push(element*2)
    }
    return newArray
}

function mapToSquare(sourceArray) {
    let newArray = []
    for (let element of sourceArray) {
        newArray.push(element**2)
    }
    return newArray
}

function reduceToTotal(sourceArray, startingPoint=0) {
    let result = startingPoint
    for (let element of sourceArray) {
        result += element
    }
    return result
}

function reduceToAllTrue(sourceArray) {
    let result = true
    for (let element of sourceArray) {
        if (!element) return false
    }
    return true
}

function reduceToAnyTrue(sourceArray) {
    let result = true
    for (let element of sourceArray) {
        if (!!element) return true
    }
    return false
}
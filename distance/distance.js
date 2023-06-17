// Write a js function to calculate the distance between two points (x and y)

function pointIsEmpty(point) {
    return !point?.x || !point?.y
}

function distanceBetweenTwoPoint(point1, point2) {
    if(pointIsEmpty(point1) || pointIsEmpty(point2)) {
        return null
    }

    const distanceHorizontal = Math.pow(point2.x - point1.x, 2)
    const distanceVertical = Math.pow(point2.y - point1.y, 2)
    const distance = Math.sqrt(distanceHorizontal + distanceVertical)
    return Number(distance.toFixed(2))
}

module.exports = {
    distanceBetweenTwoPoint,
    pointIsEmpty
}

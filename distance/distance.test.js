const { distanceBetweenTwoPoint, pointIsEmpty } = require('./distance')

describe('Test function pointIsEmpty', () => {
    test('Point is not empty', () => {
        const point = { x: 1, y: 2 }
        expect(pointIsEmpty(point)).toBe(false)
    })
    test('One of the properties is missing', () => {
        const point = { x: 1, a: 2 }
        expect(pointIsEmpty(point)).toBe(true)
    })
    test('Both property values are omitted', () => {
        const point = {}
        expect(pointIsEmpty(point)).toBe(true)
    })
    test('Point is false value', () => {
        const point1 = null
        expect(pointIsEmpty(point1)).toBe(true)

        const point2 = undefined
        expect(pointIsEmpty(point2)).toBe(true)

        const point3 = []
        expect(pointIsEmpty(point3)).toBe(true)
    })
})

describe('Test function distanceBetweenTwoPoint', () => {
    test('Function return true result, with two point', () => {
        const point1 = { x: 3, y: 2 }
        const point2 = { x: 7, y: 8 }
        const result = 7.21

        expect(distanceBetweenTwoPoint(point1, point2)).toBeCloseTo(result)
    })

    test('Function failed, if miss one of the point', () => {
        const point1 = null
        const point2 = { x: 7, y: 8 }

        expect(distanceBetweenTwoPoint(point1, point2)).toBeNull()
    })

    test('Function failed, if point value is falsy', () => {
        const point1 = 1
        const point2 = '2'

        expect(distanceBetweenTwoPoint(point1, point2)).toBeNull()
    })
})

const arraySorted = require('./array-sorted')

test('Array sorted with param', () => {
    const classNames = [
        'header', 'menu', 'menu-item', 'menu-item', 'menu-item', 'footer', 'menu', 'link', 'link', 'link', 'link'
    ]
    const result = [ 'link', 'menu-item', 'menu', 'header', 'footer' ]

    expect(arraySorted(classNames)).toEqual(result)
})

test('Array not worked without param', () => {
    expect(arraySorted()).toEqual([])
})

test('The function accepts only an array', () => {
    expect(arraySorted(1)).toEqual([])
    expect(arraySorted('1')).toEqual([])
    expect(arraySorted(null)).toEqual([])
    expect(arraySorted(undefined)).toEqual([])
    expect(arraySorted(false)).toEqual([])
    expect(arraySorted({ classList: ['item', 'item', 'some'] })).toEqual([])
    expect(arraySorted({})).toEqual([])
})

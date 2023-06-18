// Write a function that counts the number of elements in an array
// at the output of an array with unique elements
// and which is sorted by the number of repetitions in the array from larger to smaller

function arraySorted(classNames = []) {
    if(!Array.isArray(classNames)) {
        return []
    }
    const classList = {}

    classNames.forEach(className => {
        classList[className] = classList[className] + 1 || 1
    })

    const keys = Object.keys(classList)
    return [...keys].sort((a, b) => classList[b] - classList[a])
}

module.exports = arraySorted

// Write a palindrome function
const isLetter = (char) => char.toLowerCase() === char.toUpperCase()

function isPalindrome(string) {
    if(typeof string !== 'string') {
        return false
    }

    let start = 0
    let end = string.length - 1

    while(start < end) {
        const firstChar = string[start]
        const endChar = string[end]

        if(isLetter(firstChar)) {
            start += 1;
            continue;
        }
        if(isLetter(endChar)) {
            end -= 1;
            continue;
        }

        if(firstChar.toLowerCase() !== endChar.toLowerCase()) {
            return false
        }
        start += 1
        end -= 1
    }

    return true
}

module.exports = isPalindrome
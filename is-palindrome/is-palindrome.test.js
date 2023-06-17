const isPalindrome = require('./is-palindrome.js')

test('Check value is sting', () => {
    expect(isPalindrome('As I pee sir, I see Pisa!')).toBeTruthy()
    expect(isPalindrome('Edvard, go to grave')).toBeFalsy()
    expect(isPalindrome('Кулинар, храни лук?')).toBeTruthy()
    expect(isPalindrome('Ежу же хуже')).toBeFalsy()
    expect(isPalindrome(undefined)).toBeFalsy()
    expect(isPalindrome(1)).toBeFalsy()
    expect(isPalindrome([1])).toBeFalsy()
    expect(isPalindrome({ string: 'anna' })).toBeFalsy()
})
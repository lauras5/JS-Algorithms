var a = process.argv[2]
var str = ''
var i = 1
while (i <= a) {
  str += ' '.repeat(a-i) + '#'.repeat(i) + '\n'
  i++
}

console.log(str)
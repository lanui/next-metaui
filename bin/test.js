main()

function main() {
  const n = 1041
  let result = resultion(n)
  console.log('>>>>>>>', result)
}

function resultion(N) {
  if (N == 0) return 0
  const bNStr = N.toString(2)
  const bArray = bNStr.split('')
  const len = bArray.length
  const gaps = []

  for (let i = 0; i < len; i++) {
    if (bArray[i] == '1' && i + 1 < len && bArray[i + 1] == '0') {
      const subs = bArray.slice(i + 1)

      let sunCnt = 0
      for (let j = 0; j < subs.length; j++) {
        if (subs[j] == '1') {
          break
        }
        sunCnt += 1
        if (subs[j] == '0' && j == subs.length - 1) {
          sunCnt = 0
        }
      }

      gaps.push(sunCnt)
    }
  }

  let max = 0

  if (gaps.length) {
    const MaxState = gaps.reduce((prev, curr) => {
      console.log(prev, curr)
      if (curr > prev) {
        return curr
      } else {
        return prev
      }
    }, 0)

    max = MaxState
  }

  return max
}

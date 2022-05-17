/**
 * 输出数字得32位二进制
 */

function print(num: number): void {
  let res: string = ''
  for (let i = 31; i >= 0; i--) {
    res += (num & (1 << i)) == 0 ? '0' : '1'
  }
  console.info(res)
}


(() => {
  let num: number = -10;
  print(num)
})()
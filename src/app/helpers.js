const strToBase64 = str => Buffer.from(str).toString('base64')
const base64ToStr = base64 => Buffer.from(base64, 'base64').toString('utf8')

module.exports = {
  strToBase64,
  base64ToStr
}

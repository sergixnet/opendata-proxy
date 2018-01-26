const base64ToStr = require('./helpers').base64ToStr
const request = require('request')

const urlController = (req, res, next) => {
  const url = base64ToStr(req.params.url)
  const sliceStart = 'jsonCallback('.length
  const sliceEnd = ');'.length * -1

  request.get(url, (error, response, body) => {
    if (error) {
      return res.status(404).json({error: error.message})
    }

    if (!url.includes('//opendata.euskadi.eus') || !url.endsWith('.json')) {
      return res.status(404).json({error: 'Not valid URL'})
    }

    if (response.statusCode === 200) {
      const result = body.slice(sliceStart, sliceEnd)
      res.json(JSON.parse(result))
    }
  })
}

module.exports = urlController

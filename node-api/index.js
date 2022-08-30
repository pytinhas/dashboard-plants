const express = require('express')
const cors = require('cors')

const app = express()

app.listen(5500, () => console.log('Rodando na porta 5500'))

app.use(cors())

app.use(express.json())

let climate = {
  id: 1,
  temperature: "27.10 C",
  humidity: "41.00",
  sun: "1",
  waterPump: "1",

}

app.route('/api').get((req, res) => res.json({
  climate
}))

app.route('/api/:id').get((req, res) => {
  const climateId = req.params.id

  const climate = climate.find(climate => Number(climate.id) === Number(climateId))

  if (!climate) {
    return res.json('Climate nor found!')
  }

  res.json(climate)
})

app.route('/api').post((req, res) => {
  const lastId = climate[climate.length - 1].id
  climate.push({
    id: lastId + 1,
    temperature: req.body.temperature,
    humidity: req.body.humidity,
    sun: req.body.sun,
    waterPump: 0
  })
  res.json('Saved user')
})


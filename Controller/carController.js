const fs = require('fs')
const path = require('path')
const file = path.join(__dirname, '../data/car.json')
const list = (req, res) => {
  let page = req.query.page || 1
  let size = req.query.size || 3
  //获取列表数据
  res.json(getCarData(page, size))
}
const getCarData = (page = 1, size = 5) => {
  let data = fs.readFileSync(file, 'utf-8')
  data = JSON.parse(data).list
  let result = {
    count: data.length,
    page: page,
    size: size,
    data: [],
  }
  if (page && size) {
    result.data = data.slice((page - 1) * size, page * size)
  }
  return result
}
module.exports = {
  list,
}

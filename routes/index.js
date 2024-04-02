//1.khai báo express
const express = require('express')
//2. khai báo router (controller)
const router = express.Router()

//render ra trang homepage (views/index.hbs)
// localhost:3000
router.get('/', (req, res) => {
  res.render('index')
})

//render ra trang login (views/login.hbs)
// localhost:3000/login
router.get('/login', (req, res) => {
  res.render('login')
})

router.get('/contact', (req, res) => {
  res.render('contact')
})

router.get('/demo', (req, res) => {
  //gửi dữ liệu từ BE => FE
  var year = 2023
  var country = "Vietnam"
  var grade = 7.6
  var music = ['pop', 'jazz', 'rock', 'R&B']
  var movies = ['action', 'horror','comedy']
  var countrys = ['vietnam','thailan','korea']
  res.render('demo', 
  { nam : year,
    country : country,
    university : "Greenwich Vietnam",
    grade : grade,
    music : music,
    movies : movies,
    countrys : countrys,
  })
})
//3. export module router
module.exports = router
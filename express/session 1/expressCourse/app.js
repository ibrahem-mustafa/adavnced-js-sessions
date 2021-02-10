var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const {Upload} = require('./config/upload')
const {validateToken} = require('./methods/validation')


const {connectToDB} = require('./config/db')
connectToDB();

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
const authRouter = require('./routes/auth')
const articleRouter = require('./routes/article')
const usersRouter = require('./routes/users')
const initRouter = require('./routes/init')
const uploadRouter = require('./routes/upload')


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));



// Get Request
// => Return Json 
// POST Request
// => access To The Request Body
// => console log Request Body
// => send Json Response With Msg


app.use('/auth', authRouter)
app.use('/articles', articleRouter)
app.use("/users", usersRouter);
app.use("/init", initRouter);
app.use("/upload", uploadRouter);




// app.get('/uploads', (req, res) => {
//     const file = fs.readFileSync(
//         path.join(
//             __dirname,
//             'uploads',
//             req.params.path
//         )
//     )
//     res.send(file)
// })

// app.user('/article', articleRouter)

// app.use('/', indexRouter);
// app.use('/users', usersRouter);


// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;

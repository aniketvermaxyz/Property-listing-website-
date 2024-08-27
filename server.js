const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/User'); // Define User model in models/User.js

const app = express();

mongoose.connect('mongodb://localhost/real-estate', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.post('/login', passport.authenticate('local', {
    successRedirect: '/properties.html',
    failureRedirect: '/login.html'
}));

app.post('/register', (req, res) => {
    User.register(new User({ username: req.body.username }), req.body.password, (err, user) => {
        if (err) {
            return res.redirect('/register.html');
        }
        passport.authenticate('local')(req, res, () => {
            res.redirect('/properties.html');
        });
    });
});

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});

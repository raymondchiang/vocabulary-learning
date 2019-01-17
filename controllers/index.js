const Models = require('../models/index');

exports.search = (req, res, next) => {        
    Models.search()
    .then(([rows]) => {
        res.render('index', {
            title: 'learnWord',
            data: rows
        });
        res.redirect('/');
    })
    .catch(err => console.log(err));
};

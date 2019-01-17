const Models = require('../models/practice');

exports.getWord = (req, res, next) => {        
    Models.getWord(req.query.amount)
    .then(([rows]) => {
        res.render('practice', {
            title: '單字練習',
            data: rows
        });
        console.log(rows);
        res.redirect('/practice');
    })
    .catch(err => console.log(err));
};
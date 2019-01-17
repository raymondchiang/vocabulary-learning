const Models = require('../models/AddeditDel_Word');

// Search
exports.search = (req, res, next) => {
    var word = req.query.word;
    if (word === undefined || word === null) {
        word = "";
    }
    Models.search(word)
    .then(([rows]) => {
        res.render('AddEditDel_word', {
            title: '單字庫',
            data: rows
        });
        res.redirect('/AddEditDel_word');
    })
        .catch(err => console.log(err));
};

//ADD
exports.add = (req, res, next) => {
    Models.add(req.body.addWord, req.body.addTransWord, req.body.addStar)
        .then(() => {
            res.redirect('/AddEditDel_word');
        })
        .catch(err => console.log(err));
};

// DELETE
exports.delete = (req, res, next) => {
    Models.delete(req.query.id)
        .then(() => {
            res.redirect('/AddEditDel_word');
        })
        .catch(err => console.log(err));
};

// UPDATE
exports.update = (req, res, next) => {
    Models.update(req.body.editWord, req.body.editTransWord, req.body.editStar, req.body.editId)
        .then(() => {
            res.redirect('/AddEditDel_word');
        })
        .catch(err => console.log(err));
};


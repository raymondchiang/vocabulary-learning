/* 建立資料庫連線
 ** export出去給controller使用
 */
const db = require('../util/database')

// 匯出成test, 負責執行SQL語法
module.exports = class test {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }

    // CREATE
    static add(word, transWord, star) {
        return db.execute("insert into wordlearn (word, transWord, star, proficiency) values(?,?,?,?)", [word, transWord, star, '1']);
    }

    // SEARCH
    static search(word) {
        return db.execute("SELECT * FROM wordLearn WHERE word like ? or word like ? or word like ?", [word + '%','%' + word + '%', '%'+ word])
    }

    // UPDATE
    static update(word, transWord, editStar, id) {
        return db.execute('UPDATE wordLearn SET word = ?, transWord = ?, star = ? WHERE ID = ?', [word, transWord, editStar, id])
    }

    // DELETE
    static delete(id) {
        return db.execute('DELETE FROM wordLearn WHERE ID = ?', [id])
    }

}
/* 建立資料庫連線
 ** export出去給controller使用
 */

const db = require('../util/database')

// 匯出成test, 負責執行SQL語法
module.exports = class test {
    static getWord(amount) {
        return db.execute("SELECT * FROM wordLearn where star != 'Well' ORDER BY RAND() LIMIT ?", [amount])
    }
}
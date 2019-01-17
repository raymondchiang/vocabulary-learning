
//點擊編輯按鈕時，將該筆資料寫到編輯頁面的input
function getEditPageData(word, transWord, star, id) {
    document.getElementsByName('editWord')[0].value = word;
    document.getElementsByName('editTransWord')[0].value = transWord;
    document.getElementsByName('editId')[0].value = id;   
    document.getElementsByName('editStar')[0].value = star;
    document.getElementById('editStarBtn').innerHTML = star;
}

//刪除鈕
function Delete(id) {
    var rs = confirm('Confirm to delete?');
    if (rs) {
       window.location.href = "/AddEditDel_word/delete?id=" + id;
    }
}

//搜尋鈕
function Search(){
    var word = document.getElementsByName('searchBox')[0].value;
    //若搜尋框中無值，word給空(目的:要給資料庫存取)
    if (word === undefined || word === null) {
        word = "";
    }
    window.location.href = "/AddEditDel_word/search?word=" + word;
}

//再次點擊新增按鈕時，重置新增頁面input裡的value
function inputAddClean() {
    document.getElementsByName('addWord')[0].value = "";
    document.getElementsByName('addTransWord')[0].value = "";
    document.getElementsByName('addStar')[0].value = "Weak";            
}

//檢查新增頁面資料是否完全
function addCheck() {
    var addWord = document.getElementsByName('addWord')[0].value;
    var addTransWord = document.getElementsByName('addTransWord')[0].value;
    if (addWord && addTransWord) {
        return true;
    }
    alert("資料有空!");
    return false;
}

//檢查編輯頁面資料是否完全
function EditCheck() {
    var editWord = document.getElementsByName('editWord')[0].value;
    var editTransWord = document.getElementsByName('editTransWord')[0].value;

    if (editWord && editTransWord) {
        return true;
    }
    alert("資料有空!");
    return false;
}

//回首頁
function getBack() {
    window.location.href = "../";
}

//設定下拉式選單add
function addItemWeak(star){
    document.getElementsByName('addStar')[0].value = star;
    document.getElementById('addStarBtn').innerHTML = star;
}
function addItemGood(star){
    document.getElementsByName('addStar')[0].value = star;
    document.getElementById('addStarBtn').innerHTML = star;
}
function addItemWell(star){
    document.getElementsByName('addStar')[0].value = star;
    document.getElementById('addStarBtn').innerHTML = star;
}

//設定下拉式選單edit
function editItemWeak(star){
    document.getElementsByName('editStar')[0].value = star;
    document.getElementById('editStarBtn').innerHTML = star;
}
function editItemGood(star){
    document.getElementsByName('editStar')[0].value = star;
    document.getElementById('editStarBtn').innerHTML = star;
}
function editItemWell(star){
    document.getElementsByName('editStar')[0].value = star;
    document.getElementById('editStarBtn').innerHTML = star;
}
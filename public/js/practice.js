//將所有單字存到allWord-----------------------------------
var obj = document.getElementById('wordJson').innerHTML;
var stringify = JSON.parse(obj);

var allWord = [];
for (var i = 0; i < stringify.length; i++) {
    allWord.push({
        word: stringify[i]["word"], 
        transWord: stringify[i]["transWord"], 
        star:stringify[i]["star"], 
        proficiency: stringify[i]["proficiency"]});
}
console.log(allWord);
//------------------------------------------------------

var currWordNum = 0; //紀錄目前為第幾個單字
var currWord = document.getElementById('currWord'); //紀錄目前word
var currTransWord = document.getElementById('currTransWord'); // 紀錄目前transWord

currWord.innerHTML = allWord[currWordNum]['word'];

function btnKnow() {
    document.getElementById('next').classList.remove("d-none");
    document.getElementById('notKnow').classList.add("d-none");
    document.getElementById('know').classList.add("d-none");
    currTransWord.innerHTML = allWord[currWordNum]['transWord'];
};

function btnNotKnow() {
    document.getElementById('next').classList.remove("d-none");
    document.getElementById('notKnow').classList.add("d-none");
    document.getElementById('know').classList.add("d-none");
    currTransWord.innerHTML = allWord[currWordNum]['transWord'];
};

function btnNext() {
    document.getElementById('next').classList.add("d-none");
    document.getElementById('notKnow').classList.remove("d-none");
    document.getElementById('know').classList.remove("d-none");
    if(checkWord()) {
        currTransWord.innerHTML= "?";
        currWord.innerHTML = allWord[currWordNum]['word'];
        if(allWord.length - currWordNum === 1)
            document.getElementById('cardHeader').innerHTML = "最後"+ (allWord.length - currWordNum) + "個";
        else
            document.getElementById('cardHeader').innerHTML = "還有"+ (allWord.length - currWordNum) + "個";
    }
};

//回首頁
function getBack() {
    window.location.href = "../";
}

//處理目前單字到第幾個 & 判斷是否還有單字
function checkWord() {
    //console.log('currWordNum:  ', currWordNum);
    //console.log('allWord.length:    ', allWord.length);
    if (currWordNum === allWord.length-1) {
        alert('讀完了');
        return false;
    }
    else{
        currWordNum++;
        return true;
    }
}
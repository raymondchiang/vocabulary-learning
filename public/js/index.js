
function goto_addEditDelWord() {
    window.location.href = "/AddEditDel_word";
}

function goto_practice(amountOfDB) {
    var practiceWordNum = document.getElementsByName('practiceWordNum')[0].value;
    if (parseInt(practiceWordNum, 10) > parseInt(amountOfDB, 10) || parseInt(practiceWordNum, 10) === 0) {
        alert('單字量不夠或太少喔!');
    }
    else if (practiceWordNum)
        window.location.href = "/practice?amount=" + parseInt(practiceWordNum, 10);
    else
        alert('請輸入單字數喔!');
}

//clean input
function cleanPracticeBtn() {
    document.getElementsByName('practiceWordNum')[0].value = '';
};

//input only number
function validate(evt) {
    var theEvent = evt || window.event;
  
    // Handle paste
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
    // Handle key press
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var regex = /[0-9]|\./;
    if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
    }
  }
  
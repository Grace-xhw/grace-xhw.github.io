$("#kwd").bind("taphold", function() {
  var doc = document,
    text = doc.getElementById("kwd"),
    range,
    selection;
  if (doc.body.createTextRange) { //IE
    range = document.body.createTextRange();
    range.moveToElementText(text);
    range.select();

  } else if (window.getSelection) { //FF CH SF
    selection = window.getSelection();
    range = document.createRange();
    range.selectNodeContents(text);
    selection.removeAllRanges();
    selection.addRange(range);

    //测试
    console.log(text.textContent);
    text.innerText && console.log(text.innerText); //FireFox不支持innerText
    console.log(text.textContent.length);
    text.innerText && console.log(text.innerText.length); //在Chrome下长度比IE/FF下多1
    console.log(text.firstChild.textContent.length);
    text.innerText && console.log(text.firstChild.innerText.length);
    console.log(text.firstChild.innerHTML.length);

    //注意IE9-不支持textContent
    makeSelection(0, text.firstChild.textContent.length, 0, text.firstChild);
    /*
    if(selection.setBaseAndExtent){
        selection.selectAllChildren(text);
        selection.setBaseAndExtent(text, 0, text, 4);
    }
    */
  } else {
    alert("浏览器不支持长按复制功能");
  }

});

function makeSelection(start, end, child, parent) {
  var range = document.createRange();
  //console.log(parent.childNodes[child]);
  range.setStart(parent.childNodes[child], start);
  range.setEnd(parent.childNodes[child], end);

  var sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
}

//
var valueOfInput, valueOfToBeReplaced, valueReplacement, valueOutput;

var refreshAllValue = function() {
  valueOfInput = document.querySelector('#text__input').value;
  valueOfToBeReplaced = document.querySelector('#text__replace').value;
  valueReplacement = document.querySelector('#text__replacement').value;
  console.log('value refreshed!');
};


document.querySelector('.main').addEventListener('click', refreshAllValue);

document.querySelector('#text__input').addEventListener('click', function() {
  console.log('input value: ' + valueOfInput);
});


document.querySelector('#btn_convert').addEventListener('click', function() {

  refreshAllValue();
  valueOutput = valueOfInput.split(valueOfToBeReplaced).join(valueReplacement);

  if (valueOutput === undefined || valueOutput === "") {
    document.querySelector('#text__output').setAttribute("placeholder", "請先輸入要轉換的文字!");
    document.querySelector('#text__output').value = "";

  } else {
    document.querySelector('#text__output').removeAttribute("placeholder");
    console.log('the output value now: ' + valueOutput);
    document.querySelector('#text__output').value = valueOutput;
  }
});

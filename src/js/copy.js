// function copyToClipboard(element) {
//   console.log('element :>> ', element);
//   var inp = document.createElement('input');
//   document.body.appendChild(inp);

//   inp.val(element.text()).select();
//   document.execCommand('copy', false);
//   inp.remove();
// }

// function copyToClipboard(element) {
//   var $temp = $('<input>');
//   $('body').append($temp);
//   $temp.val($(element).text()).select();
//   document.execCommand('copy');
//   $temp.remove();
// }

// function copy(that) {
//   var inp = document.createElement('input');
//   document.body.appendChild(inp);
//   inp.value = that.textContent;
//   inp.select();
//   document.execCommand('copy', false);
//   inp.remove();
// }

const copyContent = async textId => {
  let text = document.getElementById(textId).innerHTML;
  try {
    await navigator.clipboard.writeText(text);
    console.log('Content copied to clipboard');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
};

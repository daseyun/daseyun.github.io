// function copyEmail() {
//   /* Get the text field */
//   var copyText = document.getElementById("email");
//   console.log(copyText.value);
//   /* Select the text field */
//   //   copyText.select();
//   //   copyText.setSelectionRange(0, 99999); /*For mobile devices*/

//   /* Copy the text inside the text field */
//   document.execCommand("copy");

//   /* Alert the copied text */
//   alert("Copied the text: " + copyText.value);
// }

function copyEmail() {
  var copyText = document.getElementById("email");
  var textArea = document.createElement("textarea");
  textArea.value = copyText.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("Copy");
  textArea.remove();

  //   var $emailCopied = $("#emailCopied");
  //   console.log($emailCopied);
  //   //   if ($emailCopied.is(":visible")) {
  //   //     return;
  //   //   }
  $("#emailCopied").show();
  setTimeout(function() {
    $("#emailCopied").hide();
  }, 10000);
}

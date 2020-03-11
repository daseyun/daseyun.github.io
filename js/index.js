$(function() {
  $("#name-title").hover(
    function() {
      $("#name-title").html(
        '(Da<span class="text-secondary">niel</span>) \
          Se<span class="text-secondary">okju</span> Yun'
      );
    },
    function() {
      $("#name-title").html("(Daniel) Seokju Yun");
    }
  );
});

function copyEmail() {
  var copyText = document.getElementById("email");
  var textArea = document.createElement("textarea");
  textArea.value = copyText.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("Copy");
  textArea.remove();

  $("#emailCopied").show();
  setTimeout(function() {
    $("#emailCopied").hide();
  }, 10000);
}

function processForm(e) {
  if (e.preventDefault) e.preventDefault();
  $("#magic8ballAnswer").hide();
  $("#magic8ballAnswer").removeClass("text-warning text-success text-danger");
  /* do what you want with the form */
  var question = document.getElementById("magic8ballQuestion").value;
  var answer = "";
  var color = "";

  if (question.includes("hire") || question.includes("interview")) {
    answer = "Yes";
    color = "success";
    copyEmail();
  } else {
    var random = Math.random();
    if (random < 0.333) {
      color = "success";
      answer = "Yes";
    } else if (random < 0.666) {
      color = "danger";
      answer = "No";
    } else {
      color = "warning";
      answer = "Maybe";
    }
  }

  $("#magic8ballAnswer").addClass("text-" + color);
  $("#magic8ballAnswer").text(answer);
  setTimeout(function() {
    $("#magic8ballAnswer").show();
  }, 500);

  // You must return false to prevent the default form behavior
  return false;
}

var form = document.getElementById("magic8ball");
if (form.attachEvent) {
  form.attachEvent("submit", processForm);
} else {
  form.addEventListener("submit", processForm);
}

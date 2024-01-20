
function showUpdateAlert() {
  alert("New update available! Please refresh the page to apply the update.");
}

'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 10) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});



/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {

  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);

});



/**
 * skills toggle
 */

const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {

    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }
    elemToggleFunc(skillsBox);

  });
}



/**
 * dark & light theme toggle
 */

const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", function () {

  elemToggleFunc(themeToggleBtn);

  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");

    localStorage.setItem("theme", "light_theme");
  } else {
    document.body.classList.add("dark_theme");
    document.body.classList.remove("light_theme");

    localStorage.setItem("theme", "dark_theme");
  }

});

/**
 * check & apply last time selected theme from localStorage
 */

if (localStorage.getItem("theme") === "light_theme") {
  themeToggleBtn.classList.add("active");
  document.body.classList.remove("dark_theme");
  document.body.classList.add("light_theme");
} else {
  themeToggleBtn.classList.remove("active");
  document.body.classList.remove("light_theme");
  document.body.classList.add("dark_theme");
}


/**KB-tool */
var resetCounter = 0;

function copyResult() {
  var loanId = document.getElementById("loanId").value.trim();
  var idsInput = document.getElementById("ids").value.trim();

  var idsArray = idsInput.split(" ");
  var idsCount = idsArray.length;
  var idsOutput = idsArray.join(",");

  var result = "";

  if (idsCount > 0) {
    if (loanId) {
      result = loanId + ":" + idsCount + ":" + idsOutput;
    } else {
      result = idsCount + ":" + idsOutput;
    }
  }

  document.getElementById("output").innerHTML = result;

  var resultOutput = document.getElementById("output");
  var range = document.createRange();
  range.selectNode(resultOutput);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();

  // Increment reset counter
  resetCounter++;

  // Reset fields after 5 seconds
  setTimeout(function () {
    resetFields();
  }, 5000);
}

function resetFields() {
  document.getElementById("loanId").value = "";
  document.getElementById("ids").value = "";
  document.getElementById("output").innerHTML = "Result will be displayed here";
  document.getElementById("resetCount").innerHTML = resetCounter;
}

function checkEnter(event) {
  if (event.keyCode === 13) {
    copyResult();
  }
}
  //serch
  function search() {
    var companyName = document.getElementById("companyName").value;
    var searchType = document.querySelector('input[name="searchType"]:checked').value;
    var query = searchType === "site" ? "site: " + companyName : companyName + " zauba";
    window.open("https://www.google.com/search?q=" + encodeURIComponent(query));
  }

  function resetForm() {
    document.getElementById("companyName").value = "";
    document.querySelector('input[name="searchType"][value="site"]').checked = true;
  }

  function copyToClipboard(text, button) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    button.classList.add('copied');
    setTimeout(() => {
      button.classList.remove('copied');
    }, 1000);
    const copiedMessage = button.querySelector('.copied-message');
    copiedMessage.classList.add('show');
    setTimeout(() => {
      copiedMessage.classList.remove('show');
    }, 2000);
  }


  /**zuba */

  function searchZauba() {
    const companyName = document.getElementById("companyName").value;
    window.open(`https://www.google.com/search?q=zauba +${companyName}`, "_blank");
}

function searchCompanyCheck() {
    const companyName = document.getElementById("companyName").value;
    window.open(`https://www.google.com/search?q=thecompanycheck.com+${companyName}`, "_blank");
}

function searchTofler() {
    const companyName = document.getElementById("companyName").value;
    window.open(`https://www.google.com/search?q=tofler.in+${companyName}`, "_blank");
}

function siteSearch() {
    const siteQuery = document.getElementById("companyName").value;
    window.open(`https://www.google.com/search?q=site: +${siteQuery}`, "_blank");
}

function resetInput() {
    document.getElementById("companyName").value = '';
}

// copy

function showTab(tabId) {
  // Hide all tabs
  document.getElementById('approved').style.display = 'none';
  document.getElementById('reject').style.display = 'none';
  document.getElementById('pending').style.display = 'none';

  // Show the selected tab
  document.getElementById(tabId).style.display = 'block';
}

function copyToClipboard(text, button) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);

  // Hide the stored text
  button.innerText = '';

  // Display the "Copied!" animation
  const copiedAnimation = document.createElement('div');
  copiedAnimation.classList.add('copied-animation');
  copiedAnimation.innerText = 'Copied!';
  button.appendChild(copiedAnimation);

  setTimeout(() => {
    // Show the stored text again
    button.innerText = 'Copy ' + text;
    button.removeChild(copiedAnimation);
  }, 2000);
}
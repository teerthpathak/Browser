// Tab Switcher Starts
function tab_1_switcher() {
    document.getElementById("tab_1").style.display = "unset";
    document.getElementById("tab_2").style.display = "none";
    document.getElementById("tab_3").style.display = "none";
    document.getElementById("tab_4").style.display = "none";
    document.getElementById("tab_5").style.display = "none";
}

function tab_2_switcher() {
    document.getElementById("tab_1").style.display = "none";
    document.getElementById("tab_2").style.display = "unset";
    document.getElementById("tab_3").style.display = "none";
    document.getElementById("tab_4").style.display = "none";
    document.getElementById("tab_5").style.display = "none";
}

function tab_3_switcher() {
    document.getElementById("tab_1").style.display = "none";
    document.getElementById("tab_2").style.display = "none";
    document.getElementById("tab_3").style.display = "unset";
    document.getElementById("tab_4").style.display = "none";
    document.getElementById("tab_5").style.display = "none";
}

function tab_4_switcher() {
    document.getElementById("tab_1").style.display = "none";
    document.getElementById("tab_2").style.display = "none";
    document.getElementById("tab_3").style.display = "none";
    document.getElementById("tab_4").style.display = "unset";
    document.getElementById("tab_5").style.display = "none";
}

function tab_5_switcher() {
    document.getElementById("tab_1").style.display = "none";
    document.getElementById("tab_2").style.display = "none";
    document.getElementById("tab_3").style.display = "none";
    document.getElementById("tab_4").style.display = "none";
    document.getElementById("tab_5").style.display = "unset";
}

tab_1_switcher();
// Tab Switcher Ends

// Button Google Starts
function button_google_1() {
    document.getElementById("iframe_1").src = "https://www.google.com/webhp?igu=1";
}

function button_google_2() {
    document.getElementById("iframe_2").src = "https://www.google.com/webhp?igu=1";
}

function button_google_3() {
    document.getElementById("iframe_3").src = "https://www.google.com/webhp?igu=1";
}

function button_google_4() {
    document.getElementById("iframe_4").src = "https://www.google.com/webhp?igu=1";
}

function button_google_5() {
    document.getElementById("iframe_5").src = "https://www.google.com/webhp?igu=1";
}
// Button Google Ends

// Button Home Starts
function button_home_1() {
    document.getElementById("iframe_1").src = "welcome.html";
}

function button_home_2() {
    document.getElementById("iframe_2").src = "welcome.html";
}

function button_home_3() {
    document.getElementById("iframe_3").src = "welcome.html";
}

function button_home_4() {
    document.getElementById("iframe_4").src = "welcome.html";
}

function button_home_5() {
    document.getElementById("iframe_5").src = "welcome.html";
}
// Button Home Ends

// Button Go Starts
function button_go_1() {
    go_1_value = document.getElementById("text_1").value;
    document.getElementById("iframe_1").src = go_1_value;
}

function button_go_2() {
    go_2_value = document.getElementById("text_2").value;
    document.getElementById("iframe_2").src = go_2_value;
}

function button_go_3() {
    go_3_value = document.getElementById("text_3").value;
    document.getElementById("iframe_3").src = go_3_value;
}

function button_go_4() {
    go_4_value = document.getElementById("text_4").value;
    document.getElementById("iframe_4").src = go_4_value;
}

function button_go_5() {
    go_5_value = document.getElementById("text_5").value;
    document.getElementById("iframe_5").src = go_5_value;
}
// Button Go Ends
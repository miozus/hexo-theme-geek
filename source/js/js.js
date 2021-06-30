var web_style = $("#web_style").val();
var valine_appid = $("#valine_appid").val();
var valine_appKey = $("#valine_appKey").val();
// 📅 
var weekday = new Date().getDay();

new Valine({
    el: "#vcomments",
    appId: valine_appid,
    appKey: valine_appKey,
    placeholder: "发一条友善的评论",
    avatar: "retro",
});

document.addEventListener("DOMContentLoaded", (event) => {
    document.querySelectorAll("pre").forEach((block) => {
        hljs.highlightBlock(block);
    });
});

function setCookie(key, value) {
    localStorage.setItem(key, value);
}

function getCookie(key) {
    var data = localStorage.getItem(key);
    return data;
}

function updateStyle() {
    if (getCookie("style") == "white") {
        $("#footer").attr("style", "color: #51525d;");
        $(".flink").attr("style", "color: #51525d;");
        $(".ba").attr("style", "color: #51525d;");
        $("#bodyx").attr("class", "bg_while");
        $("#update_style").attr("checked", false);
    } else {
        $("#footer").attr("style", "");
        $(".flink").attr("style", "");
        $("#bodyx").attr("class", "");
        $(".ba").attr("style", "");
        $("#update_style").attr("checked", true);
    }
}

if (getCookie("style") == null) {
    setCookie("style", web_style);
    updateStyle();
} else if (getCookie("style") == "white") {
    setCookie("style", "white");
    updateStyle();
} else if (getCookie("style") == "black") {
    setCookie("style", "black");
    updateStyle();
}

$("#update_style").change(function() {
    var style = $("#update_style").is(":checked");
    if (style) {
        setCookie("style", "black");
        updateStyle();
    } else {
        setCookie("style", "white");
        updateStyle();
    }
});

$("#favicon").attr("href", "/img/favicon_" + weekday + ".ico");
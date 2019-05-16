document.write(`
<div class="topnav" id="TopNav">
    <a id="home" href="./"><i class="fa fa-home"></i></a>
    <a id="fitur" href="./fitur.html">Fitur</a>
    <div id="download" class="dropdown">
        <button class="dropbtn">Download
            <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
            <a href="./download.html">MIKHMON</a>
            <a href="./template.html">Template Login Page</a>
            <a href="./voucher.html">Template Voucher</a>
        </div>
    </div>
    <a id="tutorial" href="./tutorial.html">Tutorial</a>
    <a id="support" href="./support.html">Support</a>
    <a id="videos" href="./videos.html">Videos</a>
    <a id="tips" href="./tips.html">Tips & Trick</a>
    <a id="about" href="./about.html">About</a>
    <a href="javascript:void(0);" style="font-size:15px;" class="icon" onclick="TopNav()"><span id="amenu"></span>&nbsp;&nbsp; &#9776;</a>
</div>
`);

function TopNav() {
    var x = document.getElementById("TopNav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

var uri = window.location.pathname;
var uri = uri.split("/");
var uri = uri[uri.length - 1];
var uri = uri.split(".html")[0];

var page = [
    "",
    "home",
    "about",
    "download",
    "fitur",
    "support",
    "template",
    "tutorial",
    "quickprint",
    "voucher",
    "videos",
    "tips",
];

var indexPage = page.indexOf(uri);
console.log(uri);
if (uri === "download" || uri === "template" || uri === "voucher") {
    $(function () {
        $("#download").addClass("active");
    });
} else if (indexPage >= 1) {
    $(function () {
        $("#" + uri).addClass("active");
    });
}
document.getElementById("amenu").innerHTML = uri.toUpperCase();

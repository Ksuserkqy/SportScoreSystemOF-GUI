
function checkRadio(name) {
    var radios = document.getElementsByName(name);
    var result = '';

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            result = radios[i].value;
        }
    }

    return result;
}

function checkVersion() {
    const version = checkRadio("version");
    // var 
    if (version=="online") {
        document.getElementById("online-update").style.display = "block";
        document.getElementById("offline-update").style.display = "none";
    } else {
        document.getElementById("online-update").style.display = "none";
        document.getElementById("offline-update").style.display = "block";
    }
}

function loadCSS(href) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = href;
    document.head.appendChild(link);
}

function removeCSS(href) {
    var links = document.getElementsByTagName('link');
    for (var i = 0; i < links.length; i++) {
        if (links[i].getAttribute('rel') === 'stylesheet' && links[i].getAttribute('href') === href) {
            document.head.removeChild(links[i]);
            break;
        }
    }
}

function checkdarkmode() {
    const dark = checkRadio("darkmode");

    if (dark == "dark") {
        loadCSS("../modules/layui-v2.9.13/dist/css/layui-theme-dark.css");
        document.documentElement.classList.add('dark');
        // Cookies.set("sss_darkmode", "true", { expires: 31 });
    } else if (dark == "white") {
        document.documentElement.classList.remove('dark');
        try { removeCSS("../modules/layui-v2.9.13/dist/css/layui-theme-dark.css") } catch { }
        // Cookies.set("sss_darkmode", "false", { expires: 31 });
    } else if (dark == "any") {

        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            loadCSS("../modules/layui-v2.9.13/dist/css/layui-theme-dark.css");
        } else {
            try { removeCSS("../modules/layui-v2.9.13/dist/css/layui-theme-dark.css") } catch { }
        }
        // Cookies.set("sss_darkmode", "any", { expires: 31 });

    }
}

checkdarkmode();
// document.getElementById("offline-update").style.display = "none";
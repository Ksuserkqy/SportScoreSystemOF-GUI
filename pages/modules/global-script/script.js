// Script.js by Ksuserkqy for SSS
// 2024.6.30
// MIT Licensed


layui.use(['upload', 'element'], function () {
    var $ = layui.jquery
        , upload = layui.upload
        , element = layui.element;
    upload.render({
        elem: '#upload-standard'
        , url: './'
        , fileAccept: 'image/*'
        , exts: "jpg|png|gif|bmp|jpeg|pdf"
        , data: {}
        , done: function (res) {
            console.log(res);
        }
    });
});

var table = layui.table;
var form = layui.form;
//直接赋值数据
table.render({
    elem: "#opt-put-table"
    //,width: 900
    //,height: 274
    ,
    cols:[
        [
            {type:"checkbox",LAY_CHECKED:true},
            {field:"id",title:"序号",width:73,sort:true},
            {field:"sex",title:"性别",width:73,sort:true},
            {field:"num1",title:"立定跳远",width:101,sort:true},
            {field:"score1",title:"成绩1",width:81,sort:true},
            {field:"num2",title:"引体向上/仰卧起坐",width:163,sort:true},
            {field:"score2",title:"成绩2",width:81,sort:true},
            {field:"num3",title:"坐位体前屈",width:114,sort:true},
            {field:"score3",title:"成绩3",width:81,sort:true},
            {field:"num4",title:"50",width:62,sort:true},
            {field:"score4",title:"成绩4",width:81,sort:true},
            {field:"num5",title:"耐力跑",width:87,sort:true},
            {field:"score5",title:"成绩5",width:81,sort:true},
            {field:"num6",title:"肺活量",width:87,sort:true},
            {field:"score6",title:"成绩6",width:81,sort:true}
        ]
    ],
    data: [],
    skin: 'row',
    even: true,
    toolbar: '#table-tool-bar',
    defaultToolbar: ['filter', 'exports', 'print',
        // {title: '帮助',
        // layEvent: 'LAYTABLE_TIPS',
        // icon: 'layui-icon-tips'}
    ],
    page: true,
    limits: [1, 10, 20, 30, 40, 400],
    limit: 40
    // ,loading: false //请求数据时，是否显示loading
});

// 搜索提交
form.on('submit(demo-table-search)', function (data) {
    var field = data.field; // 获得表单字段
    // 执行搜索重载
    table.reload('opt-put-table', {
        page: {
            curr: 1 // 重新从第 1 页开始
        },
        where: field // 搜索的字段
    });
    layer.msg('搜索成功<br>此处为静态模拟数据，实际使用时换成真实接口即可');
    // console.log(1);
    return false; // 阻止默认 form 跳转
});

function table_refresh(show_data, show_cols=null) {
    if (show_cols==null) {
        var show_cols = [
            [
                {type:"checkbox",LAY_CHECKED:true},
                {field:"id",title:"序号",width:73,sort:true},
                {field:"sex",title:"性别",width:73,sort:true},
                {field:"num1",title:"立定跳远",width:101,sort:true},
                {field:"score1",title:"成绩1",width:81,sort:true},
                {field:"num2",title:"引体向上/仰卧起坐",width:163,sort:true},
                {field:"score2",title:"成绩2",width:81,sort:true},
                {field:"num3",title:"坐位体前屈",width:114,sort:true},
                {field:"score3",title:"成绩3",width:81,sort:true},
                {field:"num4",title:"50",width:62,sort:true},
                {field:"score4",title:"成绩4",width:81,sort:true},
                {field:"num5",title:"耐力跑",width:87,sort:true},
                {field:"score5",title:"成绩5",width:81,sort:true},
                {field:"num6",title:"肺活量",width:87,sort:true},
                {field:"score6",title:"成绩6",width:81,sort:true}
            ]
        ];
    }
    console.log(show_data);
    table.reload("opt-put-table", {
        cols: show_cols,
        data: show_data,
    })
}



// 要操作的元素
const menu_box = document.querySelector('.menu-box');
const menu_button = document.querySelector('.menu-button');

// 为菜单按钮绑定点击事件
menu_button.addEventListener('click', function () {
    menu_box.classList.toggle('active');
})
// var select = document.getElementById('sex-input');
// var options = select.getElementsByTagName('option');
// for (var i = 1; i < options.length; i++) {
// options[i].disabled = true;
// }
window.onload = function () {
    
    // console.log("Welcome to use SSS v1.2.2")
    // loadCSS("modules/layui-v2.9.11/dist/css/layui-theme-dark.css");
}

// console.log(2);
function chooseMemory() {
    // console.log("Get Choose Memeory");
    let perset_sex = Cookies.get("sss_sex");
    let perset_catype = Cookies.get("sss_catype");
    // let perset_dark_mode = Cookies.get("sss_darkmode");
    // console.log(perset_catype, perset_sex);

    // if (perset_dark_mode == "true") {
    //     loadCSS("modules/layui-v2.9.11/dist/css/layui-theme-dark.css");
    //     document.getElementById("darkmode_white").checked = true;
    //     Cookies.set("sss_darkmode", "true", { expires: 31 });

    // } else if (perset_dark_mode == "false") {
    //     try { removeCSS("modules/layui-v2.9.11/dist/css/layui-theme-dark.css") } catch { }
    //     document.getElementById("darkmode_dark").checked = true;
    //     Cookies.set("sss_darkmode", "false", { expires: 31 });

    // } else if (perset_dark_mode == "any") {
    //     if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    //         loadCSS("modules/layui-v2.9.11/dist/css/layui-theme-dark.css");
    //     } else {
    //         try { removeCSS("modules/layui-v2.9.11/dist/css/layui-theme-dark.css") } catch { }
    //     }
    //     document.getElementById("darkmode_any").checked = true;
    //     Cookies.set("sss_darkmode", "any", { expires: 31 });
    // }
    if (perset_sex != "boy" && perset_sex != "gril") {
        Cookies.set("sss_sex", "boy", { expires: 31 });
        perset_sex = "boy";

    }
    if (perset_catype != "variety" && perset_catype != "single") {
        Cookies.set("sss_catype", "variety", { expires: 31 });
        perset_catype = "variety";
    } else if (perset_catype == "single") {
        $("#sex-label").show();
        $("#program-boy").show();
        $("#program-girl").show();
        checksex();
    } else {
        $("#program-boy").hide();
    }
    const sex_input = document.getElementById(`sex_${perset_sex}`);
    const catype_input = document.getElementById(`catype_${perset_catype}`);
    // console.log(catype_input.checked);
    sex_input.checked = true;
    catype_input.checked = true;
    // console.log(catype_input.checked);

    // checkcatype();    
    // checksex();
    console.log("Choose Memory Loaded...")
}

function checksex() {
    const sex = checkRadio("sex");
    var select_boy = $("#program-boy");
    var select_girl = $("#program-girl");

    if (sex == "boy") {
        select_boy.show();
        select_girl.hide();
        Cookies.set("sss_sex", "boy", { expires: 31 });
    } else if (sex == "girl") {
        select_boy.hide();
        select_girl.show();
        Cookies.set("sss_sex", "girl", { expires: 31 });
    }

}

function changeStandard() {
    layer.msg('暂不支持修改，请等待后续更新~');
}

function open_contact() {
    layer.open({
        type: 1,
        title: false,
        closeBtn: 0,
        area: '1000px',
        skin: 'layui-layer-nobg', //没有背景色
        shadeClose: true,
        content: '<img src="image/contact.png" alt="联系我" style="height:400px;width:auto;">'
    });
}

function set_settings() {
    layer.msg('暂不支持修改，请等待后续更新~');
}

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

function checkSelect(name) {
    var selectElement = document.getElementById(name);
    var options = selectElement.options;


    result = options[selectElement.selectedIndex].value;

    return result;
}

function Calculate() {
    // 获取表格的原始数据单元格  
    const originalCells = document.getElementById("inputData").value.trim();
    const prossedCells = originalCells.split('\n');
    // console.log(originalCells, prossedCells);
    var showData = [];
    var id = 0;
    var catype = checkRadio("catype");
    window.copyResult_all = "";
    window.copyResult_variety = "";
    window.copyResult_score = "";
    // 遍历原始数据单元格并更新加1后的数据单元格  
    try {
        prossedCells.forEach(function (cell, index) {
            // console.log(cell, index);
            if (catype == "single") {
                // console.log(1);
                const sex = checkRadio("sex");
                const grade = Number(checkRadio("grade"));
                if (sex == "girl") {
                    var program = checkSelect("girl-program");
                    var show_sex = "女";
                    // console.log(2);
                } else {
                    var program = checkSelect("boy-program");
                    var show_sex = "男";
                    // console.log(1);
                }
                if (program == "run1000" || program == "run800") {
                    var type = "time_long";
                } else if (program == "run50") {
                    var type = "time_short";
                } else {
                    var type = "num";
                }
                // const incrementedValue = getScore(cell, sports_standard[sex][program][grade], type);

                if (cell != "\\") { var incrementedValue = getScore(cell, sports_standard[sex][program][grade], type)["Score"]; } else { var incrementedValue = "\\" };

                id += 1;
                var newData = {
                    "id": id,
                    "sex": show_sex,
                    "num1": cell,
                    "score1": incrementedValue
                }
                
                var newCols = [[
                        {type:"checkbox",LAY_CHECKED:true},
                        {field:"id",title:"序号",width:73,sort:true},
                        {field:"sex",title:"性别",width:73,sort:true},
                        {field:"num1",title:"项目",width:101,sort:true},
                        {field:"score1",title:"成绩",width:81,sort:true},
                    ]]

                console.log(
                    "Data", id, ": ",
                    "\n\tmode: ", "single",
                    "\n\tsex: ", sex,
                    "\n\tgrade: ", grade,
                    "\n\tprogram: ", program,
                    "\n\ttype: ", type,
                    "\n\tvalue: ", cell,
                    "\n\tscore: ", incrementedValue
                );
                // if (!isNaN(incrementedValue)) {
                //     // 获取对应的加1后的数据单元格  
                //     const incrementedCell = originalCells[index].parentElement.children[2];
                //     incrementedCell = incrementedValue;
                //     // 如果+1后的数据低于60，则给这个<td>添加一个class  
                //     if (incrementedValue < 60) {
                //         incrementedCell.classList.add("layui-bg-red");
                //     } else if (incrementedValue == 100) {
                //         incrementedCell.classList.add("layui-bg-green");
                //     } else if (incrementedValue < 0 || incrementedValue > 100) {
                //         incrementedCell.classList.add("layui-bg-orange");
                //     } else {
                //         incrementedCell.classList.add("layui-bg-gray");
                //     }
                // }

                copyResult_all = `${copyResult_all}${cell}\t${incrementedValue}\n`;
                copyResult_score = `${copyResult_score}${incrementedValue}\n`;
                copyResult_variety = `${copyResult_variety}${id}\t${show_sex}\t${cell}\t${incrementedValue}\n`;
                // console.log(copyResult_all, copyResult_score, copyResult_variety); 

                // table_refresh(showData, newCols);

            } else if (catype == "variety") {
                // console.log(2);
                const dataArray = cell.split('\t');
                // console.log(dataArray);
                const sex_show = dataArray[0];
                const grade = Number(checkRadio("grade"));
                const num1 = dataArray[1];
                const num2 = dataArray[2];
                const num3 = dataArray[3];
                const num4 = dataArray[4];
                const num5 = dataArray[5];
                const num6 = dataArray[6];
                // console.log(num6);

                if (sex_show == "男") {
                    var sex = "boy";
                    if (num2 != "\\") { var score2 = getScore(num2, sports_standard[sex]["chining"][grade])["Score"]; } else { var score2 = "\\" };
                    if (num5 != "\\") { var score5 = getScore(num5, sports_standard[sex]["run1000"][grade], "time_long")["Score"]; } else { var score5 = "\\" };
                } else if (sex_show == "女") {
                    var sex = "girl";
                    if (num2 != "\\") { var score2 = getScore(num2, sports_standard[sex]["abdominal_curl"][grade])["Score"]; } else { var score2 = "\\" };
                    if (num5 != "\\") { var score5 = getScore(num5, sports_standard[sex]["run800"][grade], "time_long")["Score"]; } else { var score5 = "\\" };
                }


                if (num1 != "\\") { var score1 = getScore(num1, sports_standard[sex]["longjump"][grade])["Score"]; } else { var score1 = "\\" };
                if (num3 != "\\") { var score3 = getScore(num3, sports_standard[sex]["sitting_forward_flexion"][grade])["Score"]; } else { var score3 = "\\" };
                if (num4 != "\\") { var score4 = getScore(num4, sports_standard[sex]["run50"][grade], "time_short")["Score"]; } else { var score4 = "\\" };
                if (num6 != "\\") { var score6 = getScore(num6, sports_standard[sex]["vital_capacity"][grade])["Score"]; } else { var score6 = "\\" };
                id += 1;
                // const incrementedValue = 0;
                var newData = {
                    "id": id,
                    "sex": sex_show,
                    "num1": num1,
                    "score1": score1,
                    "num2": num2,
                    "score2": score2,
                    "num3": num3,
                    "score3": score3,
                    "num4": num4,
                    "score4": score4,
                    "num5": num5,
                    "score5": score5,
                    "num6": num6,
                    "score6": score6
                }

                var newCols = null;

                console.log(
                    "Data", id, ": ",
                    "\n\tmode: ", "variety",
                    "\n\tsex: ", sex,
                    "\n\tgrade: ", grade,
                    "\n\tnum1: ", num1,
                    "\n\tscore1: ", score1,
                    "\n\tnum2: ", num2,
                    "\n\tscore2: ", score2,
                    "\n\tnum3: ", num3,
                    "\n\tscore3: ", score3,
                    "\n\tnum4: ", num4,
                    "\n\tscore4: ", score4,
                    "\n\tnum5: ", num5,
                    "\n\tscore5: ", score5,
                    "\n\tnum6: ", num6,
                    "\n\tscore6: ", score6
                );

                copyResult_all = `${copyResult_all}${num1}\t${score1}\t${num2}\t${score2}\t${num3}\t${score3}\t${num4}\t${score4}\t${num5}\t${score5}\t${num6}\t${score6}\n`;
                copyResult_score = `${copyResult_score}${score1}\t${score2}\t${score3}\t${score4}\t${score5}\t${score6}\n`;
                copyResult_variety = `${copyResult_variety}${id}\t${show_sex}\t${num1}\t${score1}\t${num2}\t${score2}\t${num3}\t${score3}\t${num4}\t${score4}\t${num5}\t${score5}\t${num6}\t${score6}\n`;
                console.log(copyResult_all, copyResult_score, copyResult_variety);
            }
            showData.push(newData);
            // console.log(showData, newData);
            table_refresh(showData, newCols);
        });
        
    } catch (error) {
        if (document.getElementById("specific-msg").checked) {
            const alert = layer.alert(`<div class="font">计算遇到错误<br>请检查你<span style="color:red;">输入的格式与选择的模式</span>是否符合<br><br>错误代码：\n\t${error}</div>`, {
                time: 10 * 1000
                , success: function (layero, index) {
                    var timeNum = this.time / 1000, setText = function (start) {
                        layer.title((start ? timeNum : --timeNum) + ' 秒后关闭', index);
                    };
                    setText(!0);
                    this.timer = setInterval(setText, 1000);
                    if (timeNum <= 0) clearInterval(this.timer);
                }
                , end: function () {
                    clearInterval(this.timer);
                }
            });
        } else {
            layer.msg('计算遇到错误，请检查你输入的格式与选择的模式是否符合', { icon: 2 });
        }
    }
}

layui.use('layer', function () {
    var $ = layui.jquery,
        layer = layui.layer;
    //return

    // var index = layer.msg('hello');
    //layer.close(index);
    //runTest(1, $, layer);

    $('.demo').on('click', function () {
        var type = $(this).data('type');
        active[type] ? active[type].call(this) : '';
    });
});
function stick_variety_tips() {
    layer.open({
        title: '综合模式使用教程',
        type: 1,
        skin: 'layui-layer-rim',
        area: ['1000px', '580px'],
        content: $('#stick-variety-tips'),
        maxmin: true,
        minStack: false, //最小化不堆叠在左下角
        id: 'page1', //定义 ID，防止重复弹出
        min: function (layero, index) {

            layer.msg('阻止了默认的最小化');
            layer.style(index, {
                top: 'auto',
                bottom: 0
            });

            return false;
        },
        end: function () {
            $("#stick-variety-tips").hide();
        }
    });
}

function stick_single_tips() {
    layer.open({
        title: '单项模式使用教程',
        type: 1,
        skin: 'layui-layer-rim',
        area: ['1000px', '580px'],
        content: $('#stick-single-tips'),
        maxmin: true,
        minStack: false, //最小化不堆叠在左下角
        id: 'page2', //定义 ID，防止重复弹出
        min: function (layero, index) {

            layer.msg('阻止了默认的最小化');
            layer.style(index, {
                top: 'auto',
                bottom: 0
            });

            return false;
        },
        end: function () {
            $("#stick-single-tips").hide();
        }
    });

}

function checkcatype() {
    const catype = checkRadio("catype");
    // console.log(catype);
    var sex_label = $("#sex-label");
    var select_boy = $("#program-boy");
    var select_girl = $("#program-girl");

    if (catype == "variety") {
        sex_label.hide();
        select_girl.hide();
        select_boy.hide();
        Cookies.set("sss_catype", "variety", { expires: 31 });
    } else if (catype == "single") {
        sex_label.show();
        select_girl.show();
        select_boy.show();
        Cookies.set("sss_catype", "single", { expires: 31 });
        checksex();
        // console.log(1);
    }
}

// console.log(1);
function checkdarkmode() {
    const dark_checkbox = document.getElementById("dark-mode");
    const dark = dark_checkbox.checked;

    if (dark) {
        document.documentElement.classList.add('dark');
        // Cookies.set("sss_darkmode", "true", { expires: 31 });
    } else if (!dark) {
        document.documentElement.classList.remove('dark');
        // Cookies.set("sss_darkmode", "false", { expires: 31 });
    }
}

function clearTable() {
    // 清除表格  
    const outputBody = document.getElementById('outputTable');
    outputBody.tBodies[0].innerHTML = '<tr><td>1</td><td>None</td><td>None</td></tr>';
    // outputBody.tBodies[0].innerHTML = '';
}

function copy(type) {
    var data;
    if (type == "variety") {
        data = copyResult_variety;
    } else if (type == "score") {
        data = copyResult_score;
    } else {
        data = copyResult_all;
    }

    // let data = '';

    // 移除最后一个换行符（如果有的话）  
    if (data.endsWith('\n')) {
        data = data.slice(0, -1);
    }

    navigator.clipboard.writeText(data)
        .then(() => {
            if (document.getElementById("specific-msg").checked) {
                layer.alert(`<div class="font">数据已复制到剪贴板，直接前往Excel粘贴即可<br><br>剪贴板内容：\n\t${data}</div>`, {
                    time: 4 * 1000
                    , success: function (layero, index) {
                        var timeNum = this.time / 1000, setText = function (start) {
                            layer.title((start ? timeNum : --timeNum) + ' 秒后关闭', index);
                        };
                        setText(!0);
                        this.timer = setInterval(setText, 1000);
                        if (timeNum <= 0) clearInterval(this.timer);
                    }
                    , end: function () {
                        clearInterval(this.timer);
                    }
                });
            } else {
                layer.msg('数据已复制到剪贴板，直接前往Excel粘贴即可', { icon: 1 });
            }
        })
        .catch(err => {
            if (document.getElementById("specific-msg").checked) {
                layer.alert(`<div class="font">复制遇到错误<br>请检查你的<span style="color:red;">设备和浏览器版本</span><br><br>错误代码：\n\t${err}</div>`, {
                    time: 3 * 1000
                    , success: function (layero, index) {
                        var timeNum = this.time / 1000, setText = function (start) {
                            layer.title((start ? timeNum : --timeNum) + ' 秒后关闭', index);
                        };
                        setText(!0);
                        this.timer = setInterval(setText, 1000);
                        if (timeNum <= 0) clearInterval(this.timer);
                    }
                    , end: function () {
                        clearInterval(this.timer);
                    }
                });
            } else {
                layer.msg('复制遇到错误，请检查你的设备和浏览器版本', { icon: 2 });
            }
        });
}

// 点击表头排序
function sortTable(idx) {
    var otable = document.querySelector('table'), //获取表格
        obody = otable.tBodies[0], //表格正文tbody
        otr = obody.rows, //表格的行
        tarr = []; //临时数组
    for (var i = 1; i < otr.length; i++) {
        // 把除了表头之外的每一行都赋值到临时数组
        tarr[i - 1] = otr[i - 1];
    }
    // sortCol属性时额外给table添加的属性，用于作顺反两种顺序排序时的判断，区分首次排序和后面的有序反转
    if (obody.sortCol == idx) {
        // 反序
        tarr.reverse();
    } else {
        tarr.sort(function (tr1, tr2) {
            var value1 = tr1.cells[idx].innerHTML;
            var value2 = tr2.cells[idx].innerHTML;
            if (!isNaN(value1) && !isNaN(value2)) {
                // 数字排序
                return value1 - value2;
            } else {
                // 字符串排序
                return value1.localeCompare(value2);
            }
        })
    }
    // 创建虚拟的节点对象，节点对象包含所有属性和方法
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < tarr.length; i++) {
        // 把排序号的数组追加到节点对象
        fragment.appendChild(tarr[i]);
    }
    // 把节点对象追加到tbody
    obody.appendChild(fragment);
    // 更新sortCol
    obody.sortCol = idx;
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
        loadCSS("modules/layui-v2.9.13/dist/css/layui-theme-dark.css");
        document.documentElement.classList.add('dark');
        // Cookies.set("sss_darkmode", "true", { expires: 31 });
    } else if (dark == "white") {
        document.documentElement.classList.remove('dark');
        try { removeCSS("modules/layui-v2.9.13/dist/css/layui-theme-dark.css") } catch { }
        // Cookies.set("sss_darkmode", "false", { expires: 31 });
    } else if (dark == "any") {

        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            loadCSS("modules/layui-v2.9.13/dist/css/layui-theme-dark.css");
        } else {
            try { removeCSS("modules/layui-v2.9.13/dist/css/layui-theme-dark.css") } catch { }
        }
        // Cookies.set("sss_darkmode", "any", { expires: 31 });

    }
}

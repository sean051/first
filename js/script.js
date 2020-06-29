
function f_newSignUp(p_path) {
    if (!p_path) {
        window.open("회원가입.html", "signUp", "width=400,height=600, left=100, top=100");   
    } else {
        window.open(p_path + "회원가입.html", "signUp", "width=400,height=600, left=100, top=100");        
    }
}

function f_newLogin(p_path) {
    if (!p_path) {
        window.open("로그인.html", "login", "width=400,height=600, left=100, top=100");   
    } else {
        window.open(p_path + "로그인.html", "login", "width=400,height=600, left=100, top=100");  
    }
}

function f_exit() {
    window.close();
}

function f_modalAlert() {
    v_mo.style.display = "none"
    v_moCh.style.display = "none"           
}

function f_logout() {
    sessionStorage.clear();
    document.getElementById("id_menu2").innerHTML = "<a href='' onclick='f_newLogin('public/')'>로그인</a>";          
    document.getElementById("id_menu4").innerHTML = "";
}

function f_pwBlind(p_val) {    
    var v_tmp = "";
    for(var i=0; i<p_val.length; i++) {                
        v_tmp += "*";
    }
    return v_tmp;
}

function f_repeatChk(p_arr) {
    var v_chk = true;
    for (var i=0; i<p_arr.length; i++) {
        if (!p_arr[i].checked) {
            v_chk = false;
            break;
        }                    
        return v_chk;
    }
}

function f_statusChk() {       
    if (sessionStorage.key(0)) {
        var v_mem = JSON.parse(sessionStorage.getItem(sessionStorage.key(0)));
        document.getElementById("id_menu2").innerHTML = "<a href='#' onclick='f_logout()'>로그아웃</a>";          
        document.getElementById("id_menu4").innerHTML = v_mem.name + "님 반갑습니다.";            
    }
}
// 여우 이미지 버튼으로 나타내기
function f_imgView() {
    var v_imgBtn = document.getElementById("id_imgBtn");
    var v_imgFox = document.getElementById("id_imgFox");
    
    v_imgBtn.style.display = "none";
    v_imgFox.style.display = "block";            
}

function f_getName() {
    if (sessionStorage.key(0)) {
        var v_mem = JSON.parse(sessionStorage.getItem(sessionStorage.key(0)));
        return v_mem.name + "님";
    }  else {
        return "당신";
    }
}

var v_deg = 0;
function f_spin() {
    var v_disp = document.getElementById("id_disp");
    v_deg += 1;
    v_disp.style.transform = "rotate(180deg) rotateY(" + v_deg  + "deg)";
    if (v_deg >= 360) v_deg=0;  

    setTimeout(f_spin, 10);    
}

function f_triMake() {      
    var v_disp = document.getElementById("id_disp");
    var v_max = 11;
    v_disp.innerHTML = "";
    for (var i=1; i<=v_max; i++) {
        for (var j=1; j<=i*2 - 1; j++) { 
            if(i == 11) {
                j += 0.25;
                if(18>j && j>3) {
                    v_disp.appendChild(retDiv("")); 
                    j++;
                } else {
                    v_disp.appendChild(retDiv("*"));    
                }
            } else if (i == 10) { 
                j += 0.25;
                if(14>j && j>7) {
                    v_disp.appendChild(retDiv("")); 
                    j++;
                } else {
                    v_disp.appendChild(retDiv("*"));    
                }
            } else if (i == 9) {
                j += 0.1;
                v_disp.appendChild(retDiv("*"));          
            } else {    
                v_disp.appendChild(retDiv("*"));          
            }
        }            
    v_disp.innerHTML += "<br>";
    }
    setTimeout(f_triMake, 500);
}

function retColor() {
    var v_red = Math.round(Math.random() * 255);
    var v_green = Math.round(Math.random() * 255);
    var v_blue = Math.round(Math.random() * 255);
    var v_alpha = "0." + Math.round(Math.random() * 9);
    if(v_alpha == "0.0") v_alpha = "1";
    return "rgba(" + v_red + "," + v_green + "," + v_blue + "," + 1 + ")";
}    

function retDiv(p_char) {   // 네모난 div를 리턴해주는 함수
    var v_div = document.createElement("div");
    if(p_char) {
        v_div.setAttribute("class", "vNemo");
        v_div.style.backgroundColor = retColor();
        v_div.style.color = retColor();
        v_div.innerHTML = p_char;
    } else {
        v_div.setAttribute("class", "aNemo");
    }
    return v_div;
}

var request = {};
request.getParameter = function getParameter(p_name) {
    var v_jusoVal = location.href;
    if (v_jusoVal.indexOf("?") == -1) return null;  
    v_jusoVal = decodeURIComponent(v_jusoVal.split("?")[1]).split("&");
    for (var i = 0; i < v_jusoVal.length; i++) {
        if (v_jusoVal[i].split("=")[0] == p_name) {
            return v_jusoVal[i].split("=")[1];
        }
    }
}


// 네비게이션 하위메뉴 활성/비활성
var v_menuToggle = false;
function f_menu() {
    var v_subMenu = document.getElementById("id_ui");
    if (!v_menuToggle) {
        v_subMenu.style.display = "block";
        v_menuToggle = true;
    } else {
        v_subMenu.style.display = "none";
        v_menuToggle = false;
    }
}
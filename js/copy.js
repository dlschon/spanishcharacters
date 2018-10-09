function copyText(text) {
  var copyFrom = document.createElement("textArea");
  copyFrom.innerHTML = text;
  var main = document.getElementById('main');
  main.appendChild(copyFrom);
  copyFrom.select();
  document.execCommand('copy');
  main.removeChild(copyFrom);
}

document.addEventListener('DOMContentLoaded', function() 
{
    var a = document.getElementById('a');
    a.addEventListener('click', function() {
        copyText('&#225;');
		window.close();
    });
	
    var e = document.getElementById('e');
    e.addEventListener('click', function() {
        copyText('&#233;');
		window.close();
    });

    var i = document.getElementById('i');
    i.addEventListener('click', function() {
        copyText('&#237;');
		window.close();
    });
	
	var o = document.getElementById('o');
    o.addEventListener('click', function() {
        copyText('&#243;');
		window.close();
    });
	
	var u = document.getElementById('u');
    u.addEventListener('click', function() {
        copyText('&#250;');
		window.close()
    });
	
	var n = document.getElementById('n');
    n.addEventListener('click', function() {
        copyText('&#241;');
		window.close()
    });
	
	var A = document.getElementById('A');
    A.addEventListener('click', function() {
        copyText('&#193;');
		window.close()
    });
	
	var E = document.getElementById('E');
    E.addEventListener('click', function() {
        copyText('&#201;');
		window.close()
    });
	
	var I = document.getElementById('I');
    I.addEventListener('click', function() {
        copyText('&#205;');
		window.close()
    });
	
	var O = document.getElementById('O');
    O.addEventListener('click', function() {
        copyText('&#211;');
		window.close()
    });
	
	var U = document.getElementById('U');
    U.addEventListener('click', function() {
        copyText('&#218;');
		window.close()
    });
	
	var N = document.getElementById('N');
    N.addEventListener('click', function() {
        copyText('&#209;');
		window.close()
    });
	
	var exc = document.getElementById('!');
    exc.addEventListener('click', function() {
        copyText('&#161;');
		window.close()
    });
	
	var que = document.getElementById('?');
    que.addEventListener('click', function() {
        copyText('&#191;');
		window.close()
    });
	
});

var cssf="";
var scr="";


function update()
{
  var idoc = document.getElementById('iframe').contentWindow.document;
  try {
    cssf = css.getValue();
  }
  catch(err) {
    console.log("CSS ERROR!");
  }
  try {
    scr = script.getValue();
  }
  catch(err) {
    console.log("JS ERROR!");
  }
  
  

  idoc.open();
	idoc.write(
    `<html>
    <head>`
    +
    head.getValue()
    +
    `<style type="text/css">`
    +
    cssf
    +
    `</style>`
    +
    `</head>`
    +
    `<body>`
    +
    html.getValue()
    +
    `<script type="text/javascript">`
    +
     scr
    +
    `</script>
     </body>
     </html>`
    );

	idoc.close();
}

function setupEditor()
{
  window.head = ace.edit("head1");
  head.setTheme("ace/theme/monokai");
  head.getSession().setMode("ace/mode/html");

  head.getSession().on('change', function() {
    update();
  });

  

  head.focus();
  
  head.setOptions({
    fontSize: "16pt",
    showLineNumbers: false,
    showGutter: false,
    vScrollBarAlwaysVisible:true,
    enableBasicAutocompletion: false, enableLiveAutocompletion: false
  });

  head.setShowPrintMargin(false);
  head.setBehavioursEnabled(false);

  window.html = ace.edit("html1");
  html.setTheme("ace/theme/monokai");
  html.getSession().setMode("ace/mode/html");

  html.getSession().on('change', function() {
    update();
  });

  
        
  html.focus();
  
  html.setOptions({
    fontSize: "16pt",
    showLineNumbers: false,
    showGutter: false,
    vScrollBarAlwaysVisible:true,
    enableBasicAutocompletion: false, enableLiveAutocompletion: false
  });

  html.setShowPrintMargin(false);
  html.setBehavioursEnabled(false);


  window.css = ace.edit("css1");
  css.setTheme("ace/theme/monokai");
  css.getSession().setMode("ace/mode/html");

  css.getSession().on('change', function() {
    update();
  });

  css.focus();
  
  css.setOptions({
    fontSize: "16pt",
    showLineNumbers: false,
    showGutter: false,
    vScrollBarAlwaysVisible:true,
    enableBasicAutocompletion: false, enableLiveAutocompletion: false
  });

  css.setShowPrintMargin(false);
  css.setBehavioursEnabled(false);


  window.script = ace.edit("script1");
  script.setTheme("ace/theme/monokai");
  script.getSession().setMode("ace/mode/html");

  script.getSession().on('change', function() {
    update();
  });

  script.focus();
  
  script.setOptions({
    fontSize: "16pt",
    showLineNumbers: false,
    showGutter: false,
    vScrollBarAlwaysVisible:true,
    enableBasicAutocompletion: false, enableLiveAutocompletion: false
  });

  script.setShowPrintMargin(false);
  script.setBehavioursEnabled(false);
  
}

setupEditor();
update();
  
//TOGGLE DIV MOBILE
function htmle()
{
  if($("#header-ide").is(":visible"))
      {
          $('#output').hide();
          $('#html').show();
          $('#css').hide();
          $('#head').hide();
          $('#script').hide();
          $('#docs').hide();


          $('.mbt').addClass("active");
          $('.hbt').removeClass("active");
          $('.obt').removeClass("active");
          $('.cbt').removeClass("active");
          $('.sbt').removeClass("active");
          
      }
}
function heade()
{
  if($("#header-ide").is(":visible"))
      {
          $('#output').hide();
          $('#html').hide();
          $('#css').hide();
          $('#head').show();
          $('#script').hide();
          $('#docs').hide();


          $('.hbt').addClass("active");
          $('.obt').removeClass("active");
          $('.mbt').removeClass("active");
          $('.cbt').removeClass("active");
          $('.sbt').removeClass("active");
          
      }
}
function csse()
{
  if($("#header-ide").is(":visible"))
      {
          $('#output').hide();
          $('#html').hide();
          $('#css').show();
          $('#head').hide();
          $('#script').hide();
          $('#docs').hide();


          $('.cbt').addClass("active");
          $('.hbt').removeClass("active");
          $('.mbt').removeClass("active");
          $('.obt').removeClass("active");
          $('.sbt').removeClass("active");
          
      }
}
function scripte()
{
  if($("#header-ide").is(":visible"))
      {
          $('#output').hide();
          $('#html').hide();
          $('#css').hide();
          $('#head').hide();
          $('#script').show();
          $('#docs').hide();


          $('.sbt').addClass("active");
          $('.hbt').removeClass("active");
          $('.mbt').removeClass("active");
          $('.cbt').removeClass("active");
          $('.obt').removeClass("active");
          
      }
}
function output()
{
  if($("#header-ide").is(":visible"))
      {
          $('#output').show();
          $('#html').hide();
          $('#css').hide();
          $('#head').hide();
          $('#script').hide();
          $('#docs').hide();


          $('.obt').addClass("active");
          $('.hbt').removeClass("active");
          $('.mbt').removeClass("active");
          $('.cbt').removeClass("active");
          $('.sbt').removeClass("active");
          
      }
}

function ide()
{
  if($("#header-ide").is(":visible"))
      {
          $('#container').show();
          $('#output').hide();
          $('#html').show();
          $('#css').hide();
          $('#head').hide();
          $('#script').hide();
          $('#docs').hide();


          $('.mbt').addClass("active");
          $('.hbt').removeClass("active");
          $('.obt').removeClass("active");
          $('.cbt').removeClass("active");
          $('.sbt').removeClass("active");
          
      }
}
function docs()
{
  if($("#header-ide").is(":visible"))
      {
          $('#container').hide();
          $('#docs').show();
      }
}

//TOGGLE DIV DESKTOP
function code_desktop()
{
  if($("#header").is(":visible"))
      {
          $('#output').hide();
          $('#code').show();
          $('#code').addClass("col-md-12");
          $('#code').removeClass("col-md-6");

          $('.cbt').addClass("active");
          $('.obt').removeClass("active");  
      }
}
function output_desktop()
{
  if($("#header").is(":visible"))
      {
        $('#output').show();
        $('#code').hide();
        $('#output').addClass("col-md-12");
        $('#output').removeClass("col-md-6");

        $('.obt').addClass("active");
        $('.cbt').removeClass("active");  
      }
}
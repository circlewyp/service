
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" >
	<meta name="viewport" content="width=device-width,initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
	<meta name="format-detection" content="telphone=no, email=no" >


(function(doc,win){
        doc.documentElement.style.fontSize=doc.documentElement.clientWidth/375*50+"px";
    })(document,window)


@charset "UTF-8";
* {
  margin: 0px;
  padding: 0px;
  text-decoration: none;
  box-sizing: border-box;
  font-size: .14rem; }

ul, li {
  list-style: none; }

html {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -o-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 50px; }

img, div, body, html, ul, li, a {
  -webkit-touch-callout: none; 
input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
  color: #999; }}


input {
  outline: 0; }

%full{
  width:100%;
  height:100%;
}
%text{
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
}
%more{
  word-break:break-all;
  -webkit-line-clamp:2;
  overflow:hidden;
  text-overflow:ellipsis;
  display:-webkit-box;
  -webkit-box-orient:vertical;
}
@mixin num($h){
  width:100%;
  height:$h;
}
@mixin flex($f){
  display:flex;
  justify-content:$f;
  align-items:center;
}
@mixin pos($p:relative){
    position:$p;
}
html,body,.wrap{
  @extend %full; 
}

bootstrap基本模板
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
    <title>Bootstrap 101 Template</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://cdn.bootcss.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
    <h1>你好，世界！</h1>

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
  </body>
</html>








<?php

    header("Content-Type:text/html;charset=utf-8;");
    #1. 从前端拿来数据
    $username = @$_GET["username"];
    $password = @$_GET["password"];
    $password1 = @$_GET["password1"];
    # 判断是否为空
    if ($username == "" || $password == "" || $password1 == ""){
        die("参数不全");
    }
    #2.把数据放入到数据库之中；
    #1.如何连接数据
    #mysql_connect(servername,username,password);
    $con = mysql_connect("localhost","root","123456");
    #判断
    # 阻止执行下面的代码
    if(!$con){
        die ("数据库连接失败");
        #die 代表终止并返回代码
    }
    #向某一个表中写入东西
    #1.选中数据库
    mysql_select_db("userlist",$con);
    #判定是否存在相同用户名
    #result 查找 *代表所有
    #$result = mysql_query("SELECT * FROM detaillist");
    $result = mysql_query("SELECT username FROM 
                            detaillist WHERE username='$username'");
     #解析数据 变成php中的数组
     #while($row = mysql_fetch_array($result))
//   {echo $row['FirstName'] . " " . $row['LastName'];
//     echo "<br />";}
     $count = 0;
     while ($row = mysql_fetch_array($result)){
        $count++;
     }
     if($count != 0){
         die("用户名重名");
     }
    #2.  写sql语句 加密密码
    $password = md5($password);
    $password1 = md5($password1);
    mysql_query("INSERT INTO detaillist (password,password1,username)
     VALUES('$password','$password1','$username')");
     #检测数据类型
     #echo mysql_error();
     if(mysql_error()){
         die("数据库错误".mysql_error());
     }
     echo "注册成功"
    
?>
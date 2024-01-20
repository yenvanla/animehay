<?php
include("../db/config.php");

if(isset($_GET["action"]) && $_GET["action"] == "signup"){
    $username = mysqli_real_escape_string($conn, $_POST['username']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $password = md5($_POST['password']);
    if(!empty($username) && !empty($email) && !empty($password)){
        $sql = "SELECT * FROM user WHERE email = ? OR username = ?";
        $result = mysqli_query($conn,$sql);
        $count = mysqli_num_rows($result);
        if($count == 0){
            $sql = "INSERT INTO user(username,email,password) VALUES('$username','$email', '$password')";
            if(mysqli_query($conn , $sql)){
                echo json_encode(["code" => 1, "msg" => "Đăng ký thành công."]);
            }else {
                die ("Error : ".mysqli_error($conn));
                echo json_encode(["code" => 0, "msg" => "Lỗi hệ thống vui lòng thử lại sau."]);
            }
        } else {
            echo json_encode(["code" => 0, "msg" => "Email đã tồn tại vui lòng thử mới email khác."]);
        }
    }
}

if (isset($_GET["action"]) && $_GET["action"] == "signin") {
    $user_name = mysqli_real_escape_string($conn, $_POST['username']);
    $pass_word = md5($_POST['password']);
    $sql = "SELECT * FROM user WHERE username = ? AND passw = ?";

    if ($res = mysqli_prepare($conn, $sql)) {
        mysqli_stmt_bind_param($res, "ss", $user_name, $pass_word);
        if (mysqli_stmt_execute($res)) {
            mysqli_stmt_store_result($res);
            $count = mysqli_stmt_num_rows($res);
            if ($count == 1) {
                session_start();
                $_SESSION["username"] = $user_name;
                echo json_encode(["code" => 1, "msg" => "Đăng nhập thành công!"]);
            } else {
                echo json_encode(["code" => 0, "msg" => "Tài khoản hoặc mật khẩu sai! Vui lòng kiểm tra lại!"]);
            }
        } else {
            echo json_encode(["code" => 0, "msg" => "Error executing statement: " . mysqli_stmt_error($res)]);
        }
        mysqli_stmt_close($res);
    } else {
        echo json_encode(["code" => 0, "msg" => "Prepare statement failed: " . mysqli_error($conn)]);
    }
}

if(isset($_GET["action"]) && $_GET["action"] == "add_the_loai"){
    $ten = isset($_POST['txtTen']) ? $_POST['txtTen'] : "";
    $mota = isset($_POST['txtMota']) ? $_POST['txtMota']: "";
    if($ten == "" || $mota == ""){
        die(json_encode(["code" => 1, "msg" => "Vui lòng nhập đầy đủ thông tin"]));
    }else{
        $sql = "INSERT INTO category (name, description) VALUES ('$ten', '$mota')";
        mysqli_query($conn,$sql);
        if(mysqli_affected_rows($conn) > 0){
            echo json_encode(["code" => 1, "msg" => "Thêm thành công!"]);
        }
    }
}

if(isset($_GET["action"]) && $_GET["action"] == "add_new_film"){

}

if(isset($_GET["action"]) && $_GET["action"] == "add_new_episodes"){

}
if(isset($_GET["action"]) && $_GET["action"] == "edit_film"){

}

if(isset($_GET["action"]) && $_GET["action"] == "edit_episodes"){

}

if(isset($_GET["action"]) && $_GET["action"] == "remove_id"){

}

?>
<?php
    if(isset($_POST['submit'])){
        $conn = mysqli_connect('localhost','root','','portfolio') or die('connection failed');
        $fname = mysqli_real_escape_string($conn, $_POST['fname']);
        $lname = mysqli_real_escape_string($conn, $_POST['lname']);
        $mail = mysqli_real_escape_string($conn, $_POST['mail']);
        $phone = mysqli_real_escape_string($conn, $_POST['phone']);

    $select = mysqli_query($conn, "SELECT * FROM contact WHERE mail = '$mail' AND phone = '$phone'") or die('query lost');
    if(mysqli_num_rows($select) > 0){
        $message[] = 'User already exits!';
    }else{
        $insert = mysqli_query($conn, "INSERT INTO contact (fname,lname, mail, phone) VALUES('$fname','$lname','$mail','$phone') ");

        if($insert){
            move_uploaded_file($image_tmp_name,$image_folder);
            $message[] = 'registered successfully!';
            header('location: index.php');
        }else{
            $message[] = 'registeration failed!';
        }
    }
    }
    ?>
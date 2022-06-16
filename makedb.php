<?php
$host = 'localhost';
$user = 'root';
$pswd = '';
$db = 'test';
$conn = mysqli_connect($host, $user, $pswd, $db);
if(!$conn){
    die('Could not connect to database'.mysqli_connect_error());
}
else{
    echo 'Connected to db successfully';
}
// $sql = "CREATE TABLE wtrecs(ldate INT, lift VARCHAR(80), wt INT, PRIMARY KEY(ldate))";
// if(mysqli_query($conn, $sql)){
//     echo '<h1>table created to record weights</h1>';
// }
// else{
//     echo "<h1>table to record weights couldn't be created!</h1>";
// }
$ldate = $_POST["ldate"];
$lift = $_POST["lift"];
$wt = $_POST["wt"];
$sql1 = "INSERT INTO wtrecs(ldate, lift, wt) VALUES('$ldate', '$lift', '$wt')";
$rs = mysqli_query($conn, $sql1);
if($rs){
    echo '<h1>Record added</h1>';
}

// Table making
$sql3 = "SELECT * FROM wtrecs";
$rs1 = mysqli_query($conn, $sql3);
echo '<tr>';
echo '<table border="1">';
while($row = mysqli_fetch_assoc($rs1)){
    echo '<tr>';
    foreach($row as $value){
        echo "<td>" . $value . "</td>";
    }
    echo '</tr>';

}
echo '</table>';

$avg = 0;
$sql4 = "SELECT wt FROM wtrecs ORDER BY ldate DESC LIMIT 3";
$rs2 = mysqli_query($conn, $sql4);
while($row = mysqli_fetch_assoc($rs2)){
    foreach($row as $value){
        echo $value . "<br>";
        $avg = (int)$value + $avg ;
    }
}
echo "Lift this much today: " . 1.25 * ($avg/3);

?>
<?php session_start();
//Test backend
$_SESSION["page"] = 1;
include __DIR__ . "/database/Database.php";
use assets\php\database\Database;
?>
<!DOCTYPE html>
<html>
<body>
<div class="content">
<?php 
$data = new Database(__DIR__ . "/comments.json");
if($data->getAll()){
$all = array_slice($data->getAll(), $_SESSION["page"]*10-10, 10);
foreach($all as $txt_comment => $info){
if(isset($info["rep"])){
$user = $info["username"];
$date = $info["date"];
$id = $info["id"];
$rep_user = $info["rep"]["user"];
echo "<table cellpadding='5' cellspacing='2'>
<tr>
<td>$user</td>
<td>$date</td>
<td>Đã trả lời $rep_user</td>
</tr>
<tr>
<td>$txt_comment</td>
</tr>
<tr>
<td><span style='color: gray'>$id</span></td>
</tr>
</table>";
}
}
}
?>
</div>
</body>
</html>

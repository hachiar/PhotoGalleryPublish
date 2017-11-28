<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
 
// include database and object files
include_once '../config/database.php';
include_once '../objects/photo.php';
 
// instantiate database and photo object
$database = new Database();
$db = $database->getConnection();
 
// initialize object
$photo = new Photo($db);
 
// query photo
$stmt = $photo->read();
$num = $stmt->rowCount();
 
// check if more than 0 record found
if($num>0){
 
    // photos array
    $photos_arr=array();
    $photos_arr["records"]=array();
 
    // retrieve our table contents
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        extract($row);
 
        $photo_item=array(
            "id" => $id,
            "title" => $title,
            "url" => $url,
            "desc" => $desc,
            "rating" => $rating
        );
 
        array_push($photos_arr["records"], $photo_item);
    }
 
    echo json_encode($photos_arr);
}
 
else{
    echo json_encode(
        array("message" => "No photo found.")
    );
}
?>
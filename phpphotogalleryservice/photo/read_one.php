<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');
 
// include database and object files
include_once '../config/database.php';
include_once '../objects/photo.php';
 
// get database connection
$database = new Database();
$db = $database->getConnection();
 
// prepare photo object
$photo = new Photo($db);
 
// set ID property of photo to be edited
$photo->id = isset($_GET['id']) ? $_GET['id'] : die();
 
// read the details of photo to be edited
$photo->readOne();
 
// create array
$photo_arr = array(
    "id" =>  $photo->id,
    "title" => $photo->title,
    "url" => $photo->url,
    "desc" => $photo->desc,
    "rating" => $photo->rating,
);
    // make it json format
    print_r(json_encode($photo_arr));
?>
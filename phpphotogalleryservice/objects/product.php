<?php
class Product{
 
    // database connection and table name
    private $conn;
    private $table_name = "photogallery";
 
    // object properties
    public $id;
    public $title;
    public $url;
    public $desc;
    public $rating;
 
    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }
    // read products
    function read(){
    
       // select all query
       $query = "SELECT * FROM " . $this->table_name ;
    
       // prepare query statement
       $stmt = $this->conn->prepare($query);
    
       // execute query
       $stmt->execute();
    
       return $stmt;
   }

// used when filling up the update product form
function readOne(){
    
       // query to read single record
       $query = "SELECT
                    p.id, p.title, p.url, p.desc, p.rating
               FROM
                   " . $this->table_name . " p
               WHERE
                   p.id = ?
               LIMIT
                   0,1";
    
       // prepare query statement
       $stmt = $this->conn->prepare( $query );
    
       // bind id of product to be updated
       $stmt->bindParam(1, $this->id);
    
       // execute query
       $stmt->execute();
    
       // get retrieved row
       $row = $stmt->fetch(PDO::FETCH_ASSOC);
    
       // set values to object properties
       $this->title = $row['title'];
       $this->url = $row['url'];
       $this->desc = $row['desc'];
       $this->rating = $row['rating'];
    }
}

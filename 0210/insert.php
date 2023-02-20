<!-- image php upload to load -->

<?php
// Path: JavaScript/0210/insert.php

// include of form tag 'file_upload'
include 'db.php';

// Get image name
$image = $_FILES['image']['name'];
// Get text
$image_text = mysqli_real_escape_string($conn, $_POST['image_text']);

// Insert the image into the database
$sql = "INSERT INTO images (image, image_name, image_type, image_size) VALUES ('$image', '$image_name', '$image_type', '$image_size')";
$result = mysqli_query($conn, $sql);
if ($result) {
    echo "Image uploaded successfully";
} else {
    echo "Image upload failed";
}
?>
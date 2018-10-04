<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <link rel="stylesheet" href="css/app.css">
</head>
<body>

<div class="container">
    <h1>Keele page templates</h1>
    <?php
        $files = glob("*.html");
        echo '<ul class="list-group">'.implode('', array_map('sprintf', array_fill(0, count($files), '<li class="list-group-item"><a href="%s">%s</a></li>'), $files, $files)).'</ul>';
    ?>
</div>  
</body>
</html>
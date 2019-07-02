<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Mirrorplane</title>
    <link rel="icon" href="{{ url('img/logo.png') }}" type="image/png"> 

    <!-- Bootstrap Core CSS -->
    <link href="{{ url('css/bootstrap.css') }}" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="{{ url('css/main.css') }}" rel="stylesheet">

    <!-- Custom Fonts -->
    <style type="text/css">
        @font-face {
          font-family: 'RPGAwesome';
          src: url("{{ url('css/fonts/rpgawesome-webfont.eot?v=0.1.0') }}");
          src: url("{{ url('css/fonts/rpgawesome-webfont.eot?#iefix&v=0.1.0') }}") format("embedded-opentype"), url("{{ url('css/fonts/rpgawesome-webfont.woff?v=0.1.0') }}") format("woff"), url("{{ url('css/fonts/rpgawesome-webfont.ttf?v=0.1.0') }}") format("truetype"), url("{{ url('css/fonts/rpgawesome-webfont.svg?v=0.1.0#rpg-awesome') }}") format("svg");
          font-weight: normal;
          font-style: normal;
        }
    </style>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="{{ url('css/rpg-awesome.css') }}">
    <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Righteous" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Quicksand" rel="stylesheet">

    <!-- jQuery -->
    <script src="{{ url('js/jquery.js') }}"></script>
    <script src="{{ url('js/jquery.cookie.js') }}"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="{{ url('js/bootstrap.js') }}"></script>

    <!-- CUSTOM Script-->
    <script src="{{ url('js/main.js') }}"></script>


	<style type="text/css">
		.main-card {
			background-image: url("{{ url('img/diamond-dark.jpg') }}"); }
	</style>
    
    <script type="text/javascript"> 
        <?php 
            $imgcount = 20;
            $portraits = array();
            for ($i=1; $i<$imgcount+1; $i++) {
                array_push($portraits, url('img/portraits/p'.$i.'.png'));
            }
            $jsportraits = json_encode($portraits);
            echo "var portraits = ". $jsportraits . ";\n";
        ?>
    </script>
</head>

<body>
	@yield('main')	
</body>

</html>

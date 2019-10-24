<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Mirrorplane | Dash</title>
    <link rel="icon" href="{{ url('img/logo.png') }}" type="image/png"> 

    <!-- Custom Fonts -->
    <style type="text/css">
        @font-face {
          font-family: 'RPGAwesome';
          src: url("{{ url('css/fonts/rpgawesome-webfont.eot') }}");
          src: url("{{ url('css/fonts/rpgawesome-webfont.eot') }}") format("embedded-opentype"), url("{{ url('css/fonts/rpgawesome-webfont.woff') }}") format("woff"), url("{{ url('css/fonts/rpgawesome-webfont.ttf') }}") format("truetype"), url("{{ url('css/fonts/rpgawesome-webfont.svg') }}") format("svg");
          font-weight: normal;
          font-style: normal;
        }
    </style>
    <!-- <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous"> -->
    <!-- <script src="https://kit.fontawesome.com/0b16c14e67.js" crossorigin="anonymous"></script> -->
    <link rel="stylesheet" type="text/css" href="{{ url('css/rpg-awesome.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ url('css/font-awesome/all.css') }}">
    <!-- <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet"> -->
    <link href="https://fonts.googleapis.com/css?family=Righteous" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Quicksand" rel="stylesheet">

    <!-- CSS -->
    <link href="{{ url('css/bootstrap.css') }}" rel="stylesheet">
    <link href="{{ url('css/multi-select.css') }}" rel="stylesheet">

    <link href="{{ url('css/dash/main.css') }}" rel="stylesheet">
    <link href="{{ url('css/dash/mirrorgrid.css') }}" rel="stylesheet">

    <!-- jQuery -->
    <script src="{{ url('js/jquery.js') }}"></script>
    <script src="{{ url('js/jquery.multi-select.js') }}"></script>
    <script src="{{ url('js/velocity.js') }}"></script>
    <script src="{{ url('js/bootstrap.js') }}"></script>
    <script src="{{ url('js/font-awesome/all.js') }}"></script>

    <script src="{{ url('js/dash/main.js') }}"></script>
    <script src="{{ url('js/dash/mirrorgrid.js') }}"></script>
    <!-- <script src="{{ url('js/dash/popup-form.js') }}"></script> -->

</head>

<body class="dash">
	@yield('main')	
</body>

</html>

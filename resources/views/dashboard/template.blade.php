<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Mirrorplane | Dashboard</title>
    <link rel="icon" href="{{ url('img/logo.png') }}" type="image/png"> 

    <!-- Bootstrap Core CSS -->
    <link href="{{ url('css/bootstrap.css') }}" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/dt/dt-1.10.18/sc-1.5.0/datatables.min.css"/>

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
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="{{ url('css/rpg-awesome.css') }}">
    <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Righteous" rel="stylesheet">
    <!-- <link href="https://fonts.googleapis.com/css?family=Quicksand" rel="stylesheet"> -->

    <!-- jQuery -->
    <script src="{{ url('js/jquery.js') }}"></script>
    <script src="{{ url('js/jquery.cookie.js') }}"></script>
    <script src="{{ url('js/jquery.scrollTo.js') }}"></script>
    <script src="{{ url('js/getr.js') }}"></script>
    <script src="{{ url('js/field.js') }}"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/v/dt/dt-1.10.18/sc-1.5.0/datatables.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="{{ url('js/bootstrap.js') }}"></script>

    <style type="text/css">
        body {
            font-family: "Quicksand"; }

        a, a:hover, a:focus, a:active {
        text-decoration: none; }

        .main {
            float: left;
            height: 100vh; }
            .grid-view {
                width: 70%;
                background-color: #eee; }
            .grid-input {
                width: 30%;
                background-color: #155a54;
                color: white; }

        .main .title {
            font-family: "Righteous";
            font-size: 20px;
            text-transform: uppercase;
            padding: 5px 15px; }

        .main .tabs .tab {
            float: left;
            width: calc(100% / 7);
            background-color: #7bdab3;
            color: white;
            font-weight: bold;
            text-align: center;
            border: 1px solid #eee;
            padding: 9px 15px;
            cursor: pointer; }
            .main .tabs .tab:first-child { border-left-width: 2px;  }
            .main .tabs .tab:last-child { border-right-width: 2px;  }
            .main .tabs .tab.active { 
                background-color: transparent;
                color: grey; }

        .table {
            float: left;
            width: 100%;
            padding: 20px 2px 0; }
            .table table {
                float: left;
                width: 100%; }
                .table table .btn {
                    float: left;
                    width: 30px;
                    height: 30px;
                    color: white;
                    text-align: center;
                    padding: 4px 0;
                    margin-right: 2px; }
                    .table table .btn.view { background-color: #9c27b0; }
                    .table table .btn.delt { background-color: #f44336; }

            .table .color-box {
                float: left;
                /*height: 30px;*/
                color: white;
                background-color: grey;
                text-transform: uppercase;
                padding: 5px;
                border-radius: 4px;
                margin-right: 2px; }
                .table .color-box img {
                    width: 30px; }
                .table .color-box.status-buff { background-color: #8BC34A; }  
                .table .color-box.status-debuff { background-color: #f44336; } 
                .table .color-box.status-other { background-color: #ffc107; }  
                .table .color-box.status-disable { background-color: #9c27b0; }   

                .table .color-box.char-grade {
                    font-size: 10px;
                    width: 55px;
                    text-align: center;
                    padding: 5px 0;
                    margin: 0 0 3px; }

        .table .field {
            position: relative;
            float: right;
            width: 62px;
            height: 62px;
            margin: 0 -5px 0 5px; }
            .table .field .tile {
                position: absolute;
                background-color: rgba(0,0,0,0.2);
                border: 0;
                border-radius: 1px; }
            .table .field .tile.caster { background-color: #00bcd4; }
            .table .field .tile.inrange { border: 1px solid rgba(0,0,0,0.3); }
            .table .field .tile.target { background-color: #8bc34a; }

        .input-div {
            border-top: 1px solid rgba(0,0,0,0.2);
            padding: 30px 15px; }
            .input-div .box { display: none; } 
            .input-div input,
            .input-div textarea,
            .input-div select {
                float: left;
                width: 100%;
                height: 26px;
                color: #333;
                font-size: 14px;
                line-height: 1.2;
                border: 0;
                padding: 5px 25px;
                margin-bottom: 1px; }
            .input-div textarea { height: 150px; }
            .input-div input[type="radio"], 
            .input-div input[type="checkbox"] {
                margin: 0 0 1px; }
            .input-div .half {
                width: 50%; }

            .input-div .btn {
                background-color: rgba(255,255,255,0.5);
                padding: 10px 15px; }

        .input-div .table {
            width: calc(100% + 2px);
            max-width: unset; 
            padding: 5px 0;
            margin: 0 -1px;}
            .input-div .table input {
                height: 26px;
                padding: 5px;
                margin: 0 1px 1px; }

        .input-div .char-traits .table input {
            width: calc(100% / 5 - 2px); }
        .input-div .char-weapons .table input {
            width: calc(100% / 3 - 2px); }
        .input-div .char-skills .table input {
            width: calc(100% / 3 - 2px); }
        .input-div .char-status .table input {
            width: calc(100% / 3 - 2px); }
        .input-div .char-ground .table input {
            width: calc(100% / 2 - 2px); }

        .buff img {
            float: none !important;
            width: 20px !important;
            background-color: grey !important;
            color: #333 !important;
            padding: 1px !important;
            border-radius: 3px !important;
            margin-right: 0 !important; }

    </style>

</head>

<body>
	@yield('main')	

    <script type="text/javascript">
        var baseUrl = "<?=url('/')?>";
        var mirChars = <?=json_encode($mirChars)?>;
        var charAffinities = <?=json_encode($charAffinities)?>;
        var charTraits = <?=json_encode($charTraits)?>;
        var charWeapons = <?=json_encode($charWeapons)?>;
        var charSkills = <?=json_encode($charSkills)?>;
        var charStatus = <?=json_encode($charStatus)?>;
        var charGround = <?=json_encode($charGround)?>;
    </script>
</body>

</html>

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Parser;


class HomeController extends Controller {

	public function index() {
        $skyStatus = $this->metas("skies"); 
        $mirChars = $this->metas("chars"); 

	    foreach ($mirChars as $key => $row) {
	        $name[$key]  = $row['name']; }
	    array_multisort($name, SORT_ASC, $mirChars);

		return view('pages/init')->with('skyStatus',$skyStatus)->with('mirChars',$mirChars);
	}

	public function home() {
        $skyStatus = $this->metas("skies"); 
        $newsCasts = $this->metas("news"); 
		return view('pages/home')->with('skyStatus',$skyStatus)->with('newsCasts',$newsCasts);
	}

	public function mystic($myma) {
        $viewmyma = 'pages/myma/'.$myma;
        $skyStatus = $this->metas("skies"); 
		return view($viewmyma)->with('skyStatus',$skyStatus);
	}

      public function city($divi) {
        $viewmyma = 'pages/divi/'.$divi;
        $skyStatus = $this->metas("skies"); 
            return view($viewmyma)->with('skyStatus',$skyStatus);
      }

	// =====================================================================================================================
	// =====================================================================================================================
	// =====================================================================================================================
	public function metas($req) {

		// SKIES
		// =====================================================================================================================
		$skyStatus = array(
			array('name'=>'Auburn Leaves', 'mcolor'=>'#F3DA1B', 'scolor'=>'#ED5C19'),
			array('name'=>'Urban Skyline', 'mcolor'=>'#AA47DE', 'scolor'=>'#EDC519'),
			array('name'=>'Everest Peaks', 'mcolor'=>'#4793DE', 'scolor'=>'#19B9ED'),
			array('name'=>'Morning Glory', 'mcolor'=>'#F9D50B', 'scolor'=>'#5CD91C'),
			array('name'=>'Plain Cyanide', 'mcolor'=>'#18FF81', 'scolor'=>'#009688'),
			);
		if ($req == "skies") return $skyStatus;

		// NEWS CASTS
		// =====================================================================================================================
		$newsCasts = array(
			array('headline'=>'Geios wins Sports Club for the first time in 7 Recursions!',
				'detail'=>'Back then, Geios seems to have a monopoly on Sports Club trophies. But Luminos manage to get themselves together and win over the tyranical rule of Geios. Now, Geios takes the trophy home once again, but everyone who would have been proud of the event are already dead and/or depressed.'),
			array('headline'=>'Another attack on Landar Industries!',
				'detail'=>'As expected, another attack on one of Landar Industries\' factories had taken place and the Psykeepers are doing nothing about it.'),
			array('headline'=>'All\'s Good!',
				'detail'=>'Tauroscene\'s Head, Helios Skyforge, remains unbothered by citywide events. "Everything\'s totally fine," he says, as he continues to make weapons of mass destruction that keeps getting stolen.'),
			array('headline'=>'Fire on the boats!',
				'detail'=>'A small fire has ironically taken place at one of Geios\' famous watering hole, The Anchor. Several injured.'),
			); 
		if ($req == "news") return $newsCasts;

		// CHARACTERS
		// =====================================================================================================================
		$mirChars = array(
            array ( 'name'=>'general','sur'=>'','year'=>0,'color'=>'','subcolor'=>'','ico'=>'fa fa-circle-o-notch' ),  
            array ( 'name'=>'versus','sur'=>'','year'=>0,'color'=>'','subcolor'=>'','ico'=>'ra ra-double-team' ),  

            array ( 'name'=>'dom','sur'=>'','year'=>0,'color'=>'#009688','subcolor'=>'#8BC34A','ico'=>'ra ra-castle-emblem' ),
            array ( 'name'=>'cin','sur'=>'','year'=>0,'color'=>'#8BC34A','subcolor'=>'#009688','ico'=>'ra ra-castle-emblem' ),

            array ( 'name'=>'andrei','sur'=>'','year'=>1666,'color'=>'','subcolor'=>'','ico'=>'ra ra-crystals' ),
            array ( 'name'=>'avery','sur'=>'gambol','year'=>1668,'color'=>'#91DA2D','subcolor'=>'#9D2DDA','ico'=>'fa fa-paper-plane' ),
            array ( 'name'=>'ceicil','sur'=>'leicel','year'=>0,'color'=>'#17EF79','subcolor'=>'#623ea7','ico'=>'ra ra-gear-heart' ),
            array ( 'name'=>'bono','sur'=>'vasili','year'=>1568,'color'=>'#ec891a','subcolor'=>'#e71d72','ico'=>'ra ra-blade-bite' ),
            array ( 'name'=>'ceniza','sur'=>'corvera','year'=>1667,'color'=>'#9e0cd4','subcolor'=>'#f39b0f','ico'=>'ra ra-crystal-wand' ),
            array ( 'name'=>'chance','sur'=>'linus','year'=>1668,'color'=>'#673Ab7','subcolor'=>'#203E46','ico'=>'ra ra-diamond' ),
            array ( 'name'=>'daud','sur'=>'irwin','year'=>1674,'color'=>'#E64C15','subcolor'=>'#8C0B0B','ico'=>'ra ra-reverse' ),
            array ( 'name'=>'denise','sur'=>'','year'=>1662,'color'=>'#b40000','subcolor'=>'#efbe15','ico'=>'ra ra-suits' ),
            array ( 'name'=>'frederick','sur'=>'lemaitre','year'=> 1543,'color'=>'#21efd9','subcolor'=>'#258d77','ico'=>'ra ra-bird-mask' ),
            array ( 'name'=>'froxy','sur'=>'rennis','year'=> 1668, 'color' =>'','subcolor'=>'','ico'=>'ra ra-crossed-axes' ),
            array ( 'name'=>'gemini','sur'=>'','year'=> 1676, 'color' =>'#009dd0','subcolor'=>'#f8900b','ico'=>'ra ra-gemini' ),
            array ( 'name'=>'griff','sur'=>'wolgraff','year'=>1662,'color'=>'#DDAF47','subcolor'=>'#26618c','ico'=>'ra ra-wolf-head' ),
            array ( 'name'=>'herschel','sur'=>'','year'=>1667,'color'=>'#9C27B0','subcolor'=>'#00BCD4','ico'=>'ra ra-supersonic-arrow' ),
            array ( 'name'=>'jeanne','sur'=>'ark','year'=> 1665,'color'=>'#3F51B5','subcolor'=>'#1B2D92','ico'=>'ra ra-fluffy-swirl' ),
            array ( 'name'=>'kalli','sur'=>'','year'=> 1669,'color'=>'#b31b1b','subcolor'=>'#5b2064','ico'=>'ra ra-crossbow' ),
            array ( 'name'=>'kash','sur'=>'lorielle','year'=> 1668,'color'=>'#2590ab','subcolor'=>'#d0f30f','ico'=>'ra ra-crab-claw' ),
            array ( 'name'=>'kianna','sur'=>'halley','year'=>1670,'color'=>'#0D4E84','subcolor'=>'#00BCD4','ico'=>'ra ra-snowflake' ),
            array ( 'name'=>'koom','sur'=>'','year'=>1685,'color'=>'','subcolor'=>'','ico'=>'ra ra-fox' ),
            array ( 'name'=>'llaxine','sur'=>'loquintez','year'=>1677,'color'=>'#EC78A0','subcolor'=>'#EFE167','ico'=>'ra ra-fairy' ),
            array ( 'name'=>'lupe','sur'=>'wolgraff','year'=>1665,'color'=>'#DDAF47','subcolor'=>'#882826','ico'=>'ra ra-wolf-howl' ),
            array ( 'name'=>'maximus','sur'=>'redgrave','year'=>1673,'color'=>'#17EF79','subcolor'=>'#3D7D7A','ico'=>'ra ra-reactor' ),
            array ( 'name'=>'mikael','sur'=>'clayford','year'=> 1667,'color'=>'#00e7e7','subcolor'=>'#0067CD','ico'=>'ra ra-kitchen-knives' ),
            array ( 'name'=>'moon','sur'=>'beleaguer','year'=>1668,'color'=>'#26DC9F','subcolor'=>'#D2A368','ico'=>'ra ra-slash-ring' ),
            array ( 'name'=>'noemi','sur'=>'allium','year'=> 1664,'color'=>'#FFEB3B','subcolor'=>'#8BC34A','ico'=>'ra ra-flowers' ),
            array ( 'name'=>'rigel','sur'=>'','year'=>1666,'color'=>'#00BCD4','subcolor'=>'#D824A2','ico'=>'ra ra-daggers' ),
            array ( 'name'=>'riza','sur'=>'harmilton','year'=>1671,'color'=>'#E61547','subcolor'=>'#CD15E6','ico'=>'fa fa-cogs' ),
            array ( 'name'=>'rustom','sur'=>'kepler','year'=>1670,'color'=>'#E2C926','subcolor'=>'#D41818','ico'=>'ra ra-splash' ),
            array ( 'name'=>'seline','sur'=>'loquintez','year'=>1668,'color'=>'#EFE167','subcolor'=>'#00BCD4','ico'=>'ra ra-focused-lightning' ),              
            array ( 'name'=>'theodore','sur'=>'orcullo','year'=>1665,'color'=>'#18ff81','subcolor'=>'#B1127F','ico'=>'ra ra-axe' ),
            array ( 'name'=>'valkyr','sur'=>'soltaire','year'=>1664,'color'=>'#F3A40C','subcolor'=>'#F54C04','ico'=>'ra ra-heartburn' ),
            array ( 'name'=>'vines','sur'=>'roderick','year'=>1668,'color'=>'#18FF81','subcolor'=>'#E91E63','ico'=>'ra ra-dragonfly' ),
            array ( 'name'=>'vriskvin','sur'=>'dirk','year'=>1667,'color'=>'#E91E63','subcolor'=>'#5F0B28','ico'=>'ra ra-clockwork' ),
            array ( 'name'=>'zedrik','sur'=>'azrael','year'=>1661,'color'=>'#FFC107','subcolor'=>'#00BCD4','ico'=>'ra ra-flaming-claw' ), 

            // non main
            array ( 'name'=>'amelia','sur'=>'beleaguer','year'=>0,'color'=>'','subcolor'=>'','ico'=>'ra ra-snowflake' ),
            array ( 'name'=>'markus','sur'=>'beleaguer','year'=>0,'color'=>'','subcolor'=>'','ico'=>'ra ra-flame-symbol' ),
            array ( 'name'=>'duellie','sur'=>'beleaguer','year'=>0,'color'=>'','subcolor'=>'','ico'=>'ra ra-flame-symbol' ),

            array ( 'name'=>'kilosh','sur'=>'elizer','year'=> 1675,'color'=>'','subcolor'=>'','ico'=>'ra ra-shuriken' ),
            array ( 'name'=>'ismael','sur'=>'immen','year'=> 1675,'color'=>'','subcolor'=>'','ico'=>'ra ra-heart-bottle' ), 
            // heads
            array ( 'name'=>'thomas','sur'=>'dirk','year'=>0,'color'=>'','subcolor'=>'','ico'=>'ra ra-frostfire' ),  
            array ( 'name'=>'george','sur'=>'holland','year'=>0,'color'=>'','subcolor'=>'','ico'=>'ra ra-circular-saw' ), 
            array ( 'name'=>'zaldy','sur'=>'ruiz','year'=>0,'color'=>'','subcolor'=>'','ico'=>'' ),  
            array ( 'name'=>'jon','sur'=>'horacio','year'=>0,'color'=>'','subcolor'=>'','ico'=>'' ),
            array ( 'name'=>'gamora','sur'=>'asbistos','year'=>0,'color'=>'','subcolor'=>'','ico'=>'' ),  
            array ( 'name'=>'samtiel','sur'=>'vance','year'=>0,'color'=>'','subcolor'=>'','ico'=>'' ),  
            // landar
            array ( 'name'=>'sandra','sur'=>'redgrave','year'=>0,'color'=>'','subcolor'=>'','ico'=>'ra ra-jigsaw-piece' ),  
            array ( 'name'=>'landar','sur'=>'redgrave','year'=>0,'color'=>'','subcolor'=>'','ico'=>'ra ra-reactor' ),
            array ( 'name'=>'leanne','sur'=>'dominus','year'=>0,'color'=>'','subcolor'=>'','ico'=>'ra ra-quill-ink' ), 
            // rings united
            // array ( 'name'=>'borkus','sur'=>'demeano','year'=>0,'color'=>'','subcolor'=>'','ico'=>'ra ra-crown' ),  
            array ( 'name'=>'mio','sur'=>'','year'=>0,'color'=>'','subcolor'=>'','ico'=>'ra ra-three-keys' ),
            // irwin 
            array ( 'name'=>'cross','sur'=>'irwin','year'=>0,'color'=>'','subcolor'=>'','ico'=>'ra ra-ankh' ),  
            array ( 'name'=>'dianne','sur'=>'irwin','year'=>0,'color'=>'','subcolor'=>'','ico'=>'' ), 
            // val
            array ( 'name'=>'mig','sur'=>'salatiel','year'=>0,'color'=>'','subcolor'=>'','ico'=>'ra ra-burning-eye' ),  
            array ( 'name'=>'gene','sur'=>'salatiel','year'=>0,'color'=>'','subcolor'=>'','ico'=>'ra ra-jigsaw-piece' ),  
            array ( 'name'=>'fae','sur'=>'soltaire','year'=>0,'color'=>'','subcolor'=>'','ico'=>'ra ra-heartburn' ),
            // teammates   
            array ( 'name'=>'berex','sur'=>'fritzie','year'=>0,'color'=>'','subcolor'=>'','ico'=>'ra ra-coffee-mug' ),
            array ( 'name'=>'aguilia','sur'=>'cristina','year'=>0,'color'=>'','subcolor'=>'','ico'=>'' ),   
            array ( 'name'=>'hadji','sur'=>'feralte','year'=>0,'color'=>'','subcolor'=>'','ico'=>'ra ra-health' ),  
            array ( 'name'=>'colin','sur'=>'forth','year'=>0,'color'=>'','subcolor'=>'','ico'=>'' ),   
            array ( 'name'=>'marina','sur'=>'maramba','year'=>0,'color'=>'','subcolor'=>'','ico'=>'' ),
            // leicel
            array ( 'name'=>'cristine','sur'=>'leicel','year'=>0,'color'=>'','subcolor'=>'','ico'=>'ra ra-gear-heart' ),
            // linus   
            array ( 'name'=>'eva','sur'=>'linus','year'=>0,'color'=>'','subcolor'=>'','ico'=>'' ),  
            // skyforge
            array ( 'name'=>'helios','sur'=>'skyforge','year'=>0,'color'=>'','subcolor'=>'','ico'=>'ra ra-anvil' ),
            array ( 'name'=>'jupiter','sur'=>'skyforge','year'=>0,'color'=>'','subcolor'=>'','ico'=>'ra ra-anvil' ),
            // demeter
            array ( 'name'=>'demeter','sur'=>'von lehrer','year'=>0,'color'=>'','subcolor'=>'','ico'=>'ra ra-book' ),
            array ( 'name'=>'romania','sur'=>'mars','year'=>0,'color'=>'','subcolor'=>'','ico'=>'ra ra-apple' ),
            // mandalas
            array ( 'name'=>'karissa','sur'=>'arvy','year'=>0,'color'=>'','subcolor'=>'','ico'=>'ra ra-snowflake' ),
            array ( 'name'=>'gliciero','sur'=>'quivince','year'=>0,'color'=>'','subcolor'=>'','ico'=>'ra ra-brain-freeze' ),
            array ( 'name'=>'cryo','sur'=>'arvy','year'=>0,'color'=>'','subcolor'=>'','ico'=>'ra ra-snowflake' ),
            array ( 'name'=>'felix','sur'=>'zacharias','year'=>0,'color'=>'','subcolor'=>'','ico'=>'ra ra-castle-emblem' ),
            // kepler
            array ( 'name'=>'porlo','sur'=>'kepler','year'=>0,'color'=>'','subcolor'=>'','ico'=>'ra ra-bleeding-hearts' ),
            array ( 'name'=>'rainier','sur'=>'de rain','year'=>0,'color'=>'','subcolor'=>'','ico'=>'' ),
            // loquintez
            array ( 'name'=>'sylvia','sur'=>'loquintez','year'=>0,'color'=>'','subcolor'=>'','ico'=>'ra ra-queen-crown' ),
            array ( 'name'=>'elliot','sur'=>'ebrahim','year'=>0,'color'=>'','subcolor'=>'','ico'=>'' ),
            array ( 'name'=>'royd','sur'=>'calixto','year'=>0,'color'=>'','subcolor'=>'','ico'=>'' ),
            // nacer
            array ( 'name'=>'nacer','sur'=>'witfield','year'=>0,'color'=>'','subcolor'=>'','ico'=>'ra ra-angel-wings' ),
            array ( 'name'=>'knightier','sur'=>'golwerd','year'=>0,'color'=>'','subcolor'=>'','ico'=>'ra ra-angel-wings' ),
            array ( 'name'=>'lance','sur'=>'dalton','year'=>0,'color'=>'','subcolor'=>'','ico'=>'ra ra-angel-wings' ),

            //alts
            array ( 'name'=>'djerick','sur'=>'beleaguer','year'=>1668,'color'=>'#26DC9F','subcolor'=>'#D8A37C','ico'=>'ra ra-slash-ring' ),

            // randoms
            array ( 'name'=>'carol','sur'=>'montenegro','year'=>0,'color'=>'','subcolor'=>'','ico'=>'ra ra-sherif' ),

            array ( 'name'=>'jack','sur'=>'baulley','year'=>0,'color'=>'','subcolor'=>'','ico'=>'' ),
            array ( 'name'=>'koba','sur'=>'gothlite','year'=>0,'color'=>'','subcolor'=>'','ico'=>'' ),
            array ( 'name'=>'olive','sur'=>'ceniza','year'=>0,'color'=>'','subcolor'=>'','ico'=>'' ),
            array ( 'name'=>'cathrine','sur'=>'montes','year'=>0,'color'=>'','subcolor'=>'','ico'=>'' ),
            array ( 'name'=>'dian','sur'=>'biano','year'=>0,'color'=>'','subcolor'=>'','ico'=>'' ),
            array ( 'name'=>'telik','sur'=>'obek','year'=>0,'color'=>'','subcolor'=>'','ico'=>'' ),
            array ( 'name'=>'gorgo','sur'=>'demalino','year'=>0,'color'=>'','subcolor'=>'','ico'=>'' ),
            array ( 'name'=>'jonto','sur'=>'cruz','year'=>0,'color'=>'','subcolor'=>'','ico'=>'' ),
            array ( 'name'=>'leonard','sur'=>'cliff','year'=>0,'color'=>'','subcolor'=>'','ico'=>'' ),
            array ( 'name'=>'kuzma','sur'=>'thaddeus','year'=>0,'color'=>'','subcolor'=>'','ico'=>'' ),
            array ( 'name'=>'warner','sur'=>'zosimo','year'=>0,'color'=>'','subcolor'=>'','ico'=>'' ),
            array ( 'name'=>'kendrik','sur'=>'manol','year'=>0,'color'=>'','subcolor'=>'','ico'=>'' ),
            array ( 'name'=>'shakara','sur'=>'po','year'=>0,'color'=>'','subcolor'=>'','ico'=>'' ),
            array ( 'name'=>'jogun','sur'=>'basher','year'=>0,'color'=>'','subcolor'=>'','ico'=>'' ),
            array ( 'name'=>'gary','sur'=>'fruitcake','year'=>0,'color'=>'','subcolor'=>'','ico'=>'' ),
            array ( 'name'=>'fiano','sur'=>'king','year'=>0,'color'=>'','subcolor'=>'','ico'=>'' ),
            array ( 'name'=>'north','sur'=>'east','year'=>0,'color'=>'','subcolor'=>'','ico'=>'' ),
            array ( 'name'=>'selina','sur'=>'koyle','year'=>0,'color'=>'','subcolor'=>'','ico'=>'' ),
            array ( 'name'=>'ivan','sur'=>'ratemen','year'=>0,'color'=>'','subcolor'=>'','ico'=>'fa fa-user-o' ),
            array ( 'name'=>'sherkey','sur'=>'holes','year'=>0,'color'=>'','subcolor'=>'','ico'=>'' ),
            array ( 'name'=>'plis','sur'=>'no','year'=>0,'color'=>'','subcolor'=>'','ico'=>'' ),
            );
		if ($req == "chars") return $mirChars;
	}

}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Parser;


class HomeController extends Controller {

	public function index() {
            $skyStatus = $this->metas("skies"); 
            $mirChars = $this->getData('char-chars');
            $charAffinities = $this->getData('char-affinities');
            $charTraits = $this->getData('char-traits');
            $charWeapons = $this->getData('char-weapons');
            $charSkills = $this->getData('char-skills');
            $charStatus = $this->getData('char-status');
            $charGround = $this->getData('char-ground');

            foreach ($mirChars as $key => $row) {
                  $name[$key]  = $row['name']; }
            array_multisort($name, SORT_ASC, $mirChars);

            return view('pages/init')->with('skyStatus',$skyStatus)->with('mirChars',$mirChars)->with('charAffinities',$charAffinities)->with('charTraits',$charTraits)->with('charWeapons',$charWeapons)->with('charSkills',$charSkills)->with('charStatus',$charStatus)->with('charGround',$charGround);
	}

	public function home() {
            $skyStatus = $this->metas("skies"); 
            $newsCasts = $this->metas("news"); 
		return view('pages/home')->with('skyStatus',$skyStatus)->with('newsCasts',$newsCasts);
	}

      public function character($char) {
            $viewchar = 'pages/chars/'.$char;
            $skyStatus = $this->metas("skies"); 
            $mirChars = $this->getData('char-chars');
            $charAffinities = $this->getData('char-affinities');
            $charTraits = $this->getData('char-traits');
            $charWeapons = $this->getData('char-weapons');
            $charSkills = $this->getData('char-skills');
            $charStatus = $this->getData('char-status');
            $charGround = $this->getData('char-ground');

            return view($viewchar)->with('skyStatus',$skyStatus)->with('mirChars',$mirChars)->with('charAffinities',$charAffinities)->with('charTraits',$charTraits)->with('charWeapons',$charWeapons)->with('charSkills',$charSkills)->with('charStatus',$charStatus)->with('charGround',$charGround);
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

      public function dashboard() {
            $mirChars = $this->getData('char-chars');
            $charAffinities = $this->getData('char-affinities');
            $charTraits = $this->getData('char-traits');
            $charWeapons = $this->getData('char-weapons');
            $charSkills = $this->getData('char-skills');
            $charStatus = $this->getData('char-status');
            $charGround = $this->getData('char-ground');

            return view('dashboard/view')->with('mirChars',$mirChars)->with('charAffinities',$charAffinities)->with('charTraits',$charTraits)->with('charWeapons',$charWeapons)->with('charSkills',$charSkills)->with('charStatus',$charStatus)->with('charGround',$charGround);
      }

      public function getData($txt) {
            $txtfile = storage_path('app/'.$txt.'.txt');
            $txtStory = "";
            foreach(file($txtfile) as $line) $txtStory .= $line;
            return json_decode($txtStory, true);
      }


      public function saveData($base) {

            // print_r('The php script is called....');
            // var_dump($_POST['info']);

            $post_data = $_POST['info'];

            if ($base == 'chars') $filename = storage_path('app/char-chars.txt');
            if ($base == 'affinities') $filename = storage_path('app/char-affinities.txt');
            if ($base == 'traits') $filename = storage_path('app/char-traits.txt');
            if ($base == 'weapons') $filename = storage_path('app/char-weapons.txt');
            if ($base == 'skills') $filename = storage_path('app/char-skills.txt');
            if ($base == 'status') $filename = storage_path('app/char-status.txt');
            if ($base == 'ground') $filename = storage_path('app/char-ground.txt');

            chmod($filename, 0777); 
            file_put_contents($filename, $post_data.PHP_EOL , LOCK_EX);
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
			array('name'=>'Morning Glory', 'mcolor'=>'#F9D50B', 'scolor'=>'#68EA8E'),
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
	}


      // =====================================================================================================================
      // =====================================================================================================================
      // =====================================================================================================================
      public function training() {
            $viewchar = 'pages/adve/training';
            $skyStatus = $this->metas("skies"); 
            $mirChars = $this->getData('char-chars');
            $charAffinities = $this->getData('char-affinities');
            $charTraits = $this->getData('char-traits');
            $charWeapons = $this->getData('char-weapons');
            $charSkills = $this->getData('char-skills');
            $charStatus = $this->getData('char-status');
            $charGround = $this->getData('char-ground');

            return view($viewchar)->with('skyStatus',$skyStatus)->with('mirChars',$mirChars)->with('charAffinities',$charAffinities)->with('charTraits',$charTraits)->with('charWeapons',$charWeapons)->with('charSkills',$charSkills)->with('charStatus',$charStatus)->with('charGround',$charGround);

      }

}

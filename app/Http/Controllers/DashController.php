<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Parser;

use App\Affinities;
use App\Divisions;

class DashController extends Controller {

	public function index() {
        $menus = array(

            array(  'name' => 'Characters', 
                    'icon' => 'fas fa-id-badge', 
                    'type' => '', 
                    'link' => '/dash/characters'),
            array(  'name' => 'Traits', 
                    'icon' => 'fas fa-user-astronaut', 
                    'type' => '', 
                    'link' => '/dash/traits'),
            array(  'name' => 'Weapons', 
                    'icon' => 'ra ra-bowie-knife', 
                    'type' => '', 
                    'link' => '/dash/weapons'),
            array(  'name' => 'Skills', 
                    'icon' => 'ra ra-blade-bite', 
                    'type' => '',
                    'link' => '/dash/affinities'),
            array(  'name' => 'Affinities', 
                    'icon' => 'fas fa-bacon', 
                    'type' => '', 
                    'link' => '/dash/affinities'),
            array(  'name' => 'Arts', 
                    'icon' => 'fab fa-superpowers', 
                    'type' => '', 
                    'link' => '/dash/arts'),
            array(  'name' => 'Divisions', 
                    'icon' => 'fas fa-chart-pie', 
                    'type' => '', 
                    'link' => '/dash/divisions'),
            array(  'name' => 'Origins', 
                    'icon' => 'fab fa-redhat', 
                    'type' => '', 
                    'link' => '/dash/origins'),

            array(  'name' => 'Constants', 
                    'icon' => '', 
                    'type' => 'head', 
                    'link' => ''),
                    array(  'name' => 'Attributes', 
                            'icon' => 'fas fa-angle-right', 
                            'type' => 'sub', 
                            'link' => '/dash/attributes'),
                    array(  'name' => 'Damage Types', 
                            'icon' => 'fas fa-angle-right', 
                            'type' => 'sub', 
                            'link' => '/dash/damage-types'),
        );

        return view('dash/dash-home', ['menus' => $menus]);
	}
}

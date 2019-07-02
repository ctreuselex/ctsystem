<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'HomeController@index');

Route::get('/home', 'HomeController@home');

Route::get('/mystic/{myma}', 'HomeController@mystic')->name('myma');
Route::get('/city/{divi}', 'HomeController@city')->name('divi');
Route::get('/timeline', 'HomeController@timeline');
Route::get('/profile/{char}', 'HomeController@character')->name('char');

Route::get('/training', 'HomeController@training');

Route::get('/dashboard', 'HomeController@dashboard');
Route::post('/dashboard/save/{base}', 'HomeController@saveData')->name('base');


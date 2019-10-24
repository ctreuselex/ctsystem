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

Route::get('/dash', 'DashController@index');

Route::resource('/dash/characters', 'DashCharactersController');
Route::post('/dash/characters/saveDescription', array('as' => 'saveDescription', 'uses' => 'DashCharactersController@saveDescription'));
Route::post('/dash/characters/getData', array('as' => 'getData', 'uses' => 'DashCharactersController@getData'));

Route::resource('/dash/affinities', 'DashAffinitiesController');
Route::post('/dash/affinities/saveDescription', array('as' => 'saveDescription', 'uses' => 'DashAffinitiesController@saveDescription'));
Route::post('/dash/affinities/getData', array('as' => 'getData', 'uses' => 'DashAffinitiesController@getData'));

Route::resource('/dash/divisions', 'DashDivisionsController');
Route::post('/dash/divisions/saveDescription', array('as' => 'saveDescription', 'uses' => 'DashDivisionsController@saveDescription'));
Route::post('/dash/divisions/getData', array('as' => 'getData', 'uses' => 'DashDivisionsController@getData'));

Route::resource('/dash/origins', 'DashOriginsController');
Route::post('/dash/origins/saveDescription', array('as' => 'saveDescription', 'uses' => 'DashOriginsController@saveDescription'));
Route::post('/dash/origins/getData', array('as' => 'getData', 'uses' => 'DashOriginsController@getData'));


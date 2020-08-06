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

Route::get('/', function () {
   return redirect()->action('Auth\LoginController@showLoginForm');
});

// RUTAS AUTENTICACION
Route::namespace('Auth')->group(function () {
	Route::get('login', 'LoginController@showLoginForm');
	Route::post('login', 'LoginController@login')->name('login');
	Route::get('logout', 'LoginController@logout')->name('logout');    
});

// RUTAS CON PERMISOS

Route::middleware('auth')->group(function () {
	Route::get('/home', 'HomeController@index')->name('home');
});

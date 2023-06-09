<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\FavsController;
use App\Http\Controllers\BlocksController;
use App\Http\Controllers\InfoController;

Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
    Route::get('me', 'me');
});

Route::get('/{id}',[UserController::class,'getUser']);
Route::get('/users/{id}',[UserController::class,'getUsers']);
Route::post('/messages',[MessageController::class,'SendMessage']);
Route::post('/chat',[MessageController::class,'GetMessage']);
Route::post('/setfav',[FavsController::class,'setFav']);
Route::post('/getFav',[FavsController::class,'getFav']);
Route::post('/setBlock',[BlocksController::class,'setBlock']);
Route::post('/getBlock',[BlocksController::class,'getBlock']);
Route::get('/info/{id}',[InfoController::class,'getInfo']);
Route::post('/info',[InfoController::class,'profile']);
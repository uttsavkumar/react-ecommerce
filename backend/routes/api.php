<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProductImageController;
use App\Http\Controllers\SizeController;
use App\Http\Controllers\SizeUnavailableController;
use App\Models\ProductImage;
use App\Models\SizeUnavailable;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::apiResource('category',CategoryController::class);
Route::apiResource('product',ProductController::class);
Route::apiResource('size',SizeController::class);

Route::post('/sizeUnavailable',[SizeUnavailableController::class,'store']);
Route::get('/sizeUnavailable',[SizeUnavailableController::class,'index']);
Route::delete('/sizeUnavailable/{id}',[SizeUnavailableController::class,'delete']);

Route::get('/image',[ProductImageController::class,'index']);
Route::post('/image',[ProductImageController::class,'store']);


Route::get('/men',[ProductController::class,'men']);
Route::get('/women',[ProductController::class,'women']);
Route::get('/kid',[ProductController::class,'kid']);
Route::get('/mencat',[ProductController::class,'mencat']);
Route::get('/kidcat',[ProductController::class,'kidcat']);
Route::get('/womencat',[ProductController::class,'womencat']);
Route::get('/filter/{id}',[ProductController::class,'filter']);
Route::get('/singleprd/{id}',[ProductController::class,'singleprd']);
Route::get('/unsize/{id}',[ProductController::class,'unsize']);
Route::get('/sorting',[ProductController::class,'sorting']);


Route::controller(AuthController::class)->group(function () {
    Route::post('register', 'register');
    Route::post('login', 'login');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
    
});
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

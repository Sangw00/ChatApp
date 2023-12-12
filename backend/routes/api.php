<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

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


Route::post('/register', [UserController::class, 'register']);
Route::post('/login', [UserController::class, 'login']);
Route::get('/email/verify/{id}', [UserController::class, 'verify'])->name('verification.verify'); // Make sure to keep this as your route name
// Route::get('/email/resend', )->name('verification.resend');
/*Route::middleware(['auth:sanctum', 'verified'])->get('/user', function () {
  
}); */

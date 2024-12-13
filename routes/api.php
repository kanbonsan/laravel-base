<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/test', function (Request $request) {
    return response()->json('ちゃんとログインできてますよ');
})->middleware('auth:sanctum');

Route::post('/login', function (Request $request) {
    $credentials = $request->validate([
        'email' => ['required', 'email'],
        'password' => ['required'],
    ]);
    if (Auth::guard('web')->attempt($credentials)) {
        $request->session()->regenerate();
        return response()->json(['authenticated' => true]);
    } else {
        return response()->json(['authenticated' => false]);
    }
});
Route::post('/logout', function (Request $request) {
    Auth::logout();
    
    $request->session()->invalidate();
    $request->session()->regenerate();
    return response()->json(['authenticated' => false]);
})->middleware('auth:web');

Route::middleware(['auth:sanctum'])->group(function () {

    Route::get('/logged-in', function (Request $request) {
        return response()->json([
            'authenticated' => true,
            'user' => $request->user()->only('id', 'email')
        ]);
    });
});

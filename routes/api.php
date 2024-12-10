<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/test',function (Request $request){
    return 'hello svelte how are you?';
})->middleware('auth:sanctum');

Route::middleware(['auth:sanctum'])->group( function(){
    Route::post('/login', function(Request $request){
        $credentials = $request->validate([
            'email'=>['required', 'email'],
            'password'=>['required'],
        ]);
        return response()->json(['authenticated'=>Auth::attempt($credentials)]);
    });

    Route::get('/logged-in',function(Request $request){
        return response()->json([
            'user'=>$request->user()->only('id','email')
        ]);
    });

    Route::match(['get','post'],'/logout',function(Request $request){
        \Illuminate\Support\Facades\Auth::logout();
        return response()->json(['authenticated'=>false]);
    });
});
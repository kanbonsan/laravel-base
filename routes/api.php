<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/test',function (Request $request){
    return 'hello svelte how are you?';
})->middleware('auth:sanctum');

Route::post('/login', function(Request $request){
    $credentials = $request->validate([
        'email'=>['required', 'email'],
        'password'=>['required'],
    ]);
    if( Auth::guard('web')->attempt($credentials)){
        $request->session()->regenerate();
        return response()->json(['authenticated'=>true]);
    } else {
        return response()->json(['authenticated'=>false]);
    }
});
Route::get('/logout',function(Request $request){
        Auth::logout();
        return response()->json(['authenticated'=>false]);
    });
Route::middleware(['auth:sanctum'])->group( function(){
    
    Route::get('/logged-in',function(Request $request){
        return response()->json([
            'user'=>$request->user()->only('id','email')
        ]);
    });

    
});
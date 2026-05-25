<?php

use Illuminate\Support\Facades\Route;
// 1. Importar o GameController aqui em cima
use App\Http\Controllers\GameController;

Route::get('/', function () {
    return view('welcome');
});

// 2. A rota do exercício que aceita o parâmetro {nome}
Route::get('/buscar/{nome}', [GameController::class, 'search']);
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class GameController extends Controller
{
    // Método que recebe o nome do jogo como parâmetro
    public function search($nome)
    {
        return "Procurando pelo jogo: " . $nome . "...";
    }
}
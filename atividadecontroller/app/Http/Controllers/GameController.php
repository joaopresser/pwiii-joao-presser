<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class GameController extends Controller
{
    public function search() {
        $games = input("Digite o nome do livro:");

        return view("Procurando pelo jogo", $games);
    }
}

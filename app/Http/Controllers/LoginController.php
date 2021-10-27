<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    public function Login(Request $request){
        $user = User::where('email', $request->email)->first();
        if($user && Hash::check($request->pword, $user->password)){
            return $user;
        }
     }
}

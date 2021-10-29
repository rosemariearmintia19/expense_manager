<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{

    public function index(){
        return User::whereNUll('users.deleted_at')
        ->join('roles','roles.role_id','users.role')
        ->select('users.id','users.name','users.email','roles.role_id','roles.name as role','users.created_at')
        ->get();
    }

    public function store(Request $request){
        $User = new User();
        $User->name = $request->fullname;
        $User->email = $request->email;
        $User->role = $request->role;
        $User->password = Hash::make($request->password);
        $User->created_by = $request->user_id;
        $User->save();

        return response()->json(['message'=>'Data has been created successfully!'],201);
    }

    public function SaveEditUser(Request $request){
        User::where('id',$request->user_id)
        ->update(["name" => $request->name,"email" => $request->email,"role" => $request->role_id,"updated_by" => $request->updated_by,"updated_at" => Carbon::now()]);
        return response()->json(['message'=>'Data has been created successfully!'],201);   
    }

    public function DeleteUser(Request $request){
        User::where('id',$request->user_id)
        ->update(["deleted_at" => Carbon::now(),"updated_by" => $request->updated_by,"updated_at" => Carbon::now()]);
        return response()->json(['message'=>'Data has been created successfully!'],201);   
    }

    public function checkpassword(Request $request){
        $user = User::where('id', $request->id)->first();
        if($user && Hash::check($request->old_password, $user->password)){
            return 1;
        }else{
            return 0;
        }
        
    }

    public function SaveNewPassword(Request $request){
        User::where('id',$request->id)
        ->update(["password" => Hash::make($request->new_password),"updated_by" => $request->user_id,"updated_at" => Carbon::now()]);
        return response()->json(['message'=>'Data has been created successfully!'],201);   
    }

    public function Register (Request $request){
        $NewUser = new User();
        $NewUser->name = $request->name;
        $NewUser->email = $request->email;
        $NewUser->password = Hash::make($request->password);
        $NewUser->role = $request->role;
        $NewUser->created_by = 1;
        $NewUser->save();
        return response()->json(['message'=>'Data has been created successfully!'],201);
    }

}

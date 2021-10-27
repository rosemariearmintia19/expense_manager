<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{

    public function index(){
        return User::join('roles','roles.role_id','users.role')
        ->select('users.id','users.firstname','users.lastname','users.email','roles.role_id','roles.name','users.deleted_at')
        ->get();
    }

    public function store(Request $request){
        $User = new User();
        $User->firstname = $request->firstname;
        $User->lastname = $request->lastname;
        $User->email = $request->email;
        $User->role = $request->role;
        $User->password = Hash::make($request->password);
        $User->created_by = $request->user_id;
        $User->save();

        return response()->json(['message'=>'Data has been created successfully!'],201);
    }

    public function SaveEditUser(Request $request){
        User::where('id',$request->id)
        ->update(["firstname" => $request->firstname,"lastname" => $request->lastname,"email" => $request->email,"role" => $request->role,"updated_by" => $request->user_id,"updated_at" => Carbon::now()]);
        return response()->json(['message'=>'Data has been created successfully!'],201);   
    }

    public function DeleteUser(Request $request){
        User::where('id',$request->id)
        ->update(["deleted_at" => Carbon::now(),"updated_by" => $request->user_id,"updated_at" => Carbon::now()]);
        return response()->json(['message'=>'Data has been created successfully!'],201);   
    }

    public function RestoreUser(Request $request){
        User::where('id',$request->id)
        ->update(["deleted_at" => null,"updated_by" => $request->user_id,"updated_at" => Carbon::now()]);
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
        $NewUser->firstname = $request->firstname;
        $NewUser->lastname = $request->lastname;
        $NewUser->email = $request->email;
        $NewUser->password = Hash::make($request->password);
        $NewUser->role = $request->role;
        $NewUser->created_by = 1;
        $NewUser->save();
        return response()->json(['message'=>'Data has been created successfully!'],201);
    }

}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Role;
use Carbon\Carbon;

class RoleController extends Controller
{

    public function index(){
        return Role::all();
    }

    public function store(Request $request){
        $Expenses = new Role();
        $Expenses->name = $request->permission_type;
        $Expenses->created_by = $request->user_id;
        $Expenses->save();

        return response()->json(['message'=>'Data has been created successfully!'],201);
    }

    public function SaveEditPermission(Request $request){
        Role::where('role_id',$request->role_id)
        ->update(["name" => $request->name,"updated_by" => $request->user_id,"updated_at" => Carbon::now()]);
        return response()->json(['message'=>'Data has been created successfully!'],201);   
    }

    public function DeletePermission(Request $request){
        Role::where('role_id',$request->role_id)
        ->update(["deleted_at" => Carbon::now(),"updated_by" => $request->user_id,"updated_at" => Carbon::now()]);
        return response()->json(['message'=>'Data has been created successfully!'],201);   
    }

    public function RestorePermission(Request $request){
        Role::where('role_id',$request->role_id)
        ->update(["deleted_at" => null,"updated_by" => $request->user_id,"updated_at" => Carbon::now()]);
        return response()->json(['message'=>'Data has been created successfully!'],201);   
    }

    public function GetRoles(){
        $roles = Role::whereNull('deleted_at')->get();
        return $roles;
    }
}

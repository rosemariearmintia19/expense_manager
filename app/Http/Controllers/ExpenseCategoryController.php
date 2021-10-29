<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ExpenseCategory;
use Carbon\Carbon;

class ExpenseCategoryController extends Controller
{

    public function index(){
        return ExpenseCategory::whereNull('deleted_at')->get();
    }

    public function store(Request $request){

        $Category = new ExpenseCategory();
        $Category->category_name = $request->category_name;
        $Category->description = $request->description;
        $Category->created_by = $request->user_id;
        $Category->save();

        return response()->json(['message'=>'Data has been created successfully!'],201);

    }

    public function SaveEditCategory(Request $request){
        ExpenseCategory::where('category_id',$request->category_id)
        ->update(["category_name" => $request->category_name,"description" => $request->description,"updated_by" => $request->updated_by,"updated_at" => Carbon::now()]);
        return response()->json(['message'=>'Data has been created successfully!'],201);   
    }

    public function DeleteCategory(Request $request){
        ExpenseCategory::where('category_id',$request->category_id)
        ->update(["deleted_at" => Carbon::now(),"updated_by" => $request->user_id,"updated_at" => Carbon::now()]);
        return response()->json(['message'=>'Data has been created successfully!'],201);   
    }

    public function GetCategory(){
        $categories = ExpenseCategory::whereNull('deleted_at')->get();
        return $categories;
    }



}

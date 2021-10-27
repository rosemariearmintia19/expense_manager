<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Expense;
use Carbon\Carbon;

class ExpenseController extends Controller
{
    public function index(Request $request){
        return Expense::join('expense_categories as ec','ec.category_id','expenses.category_id')
        ->where('expenses.created_by',$request->user_id)
        ->select('expenses.expense_id','ec.category_name','expenses.description','expenses.description','expenses.amount','expenses.created_at','expenses.deleted_at')
        ->get();
    }

    public function store(Request $request){
        $Expenses = new Expense();
        $Expenses->category_id = $request->expense_category;
        $Expenses->description = $request->description;
        $Expenses->amount = $request->amount;
        $Expenses->created_by = $request->user_id;
        $Expenses->save();

        return response()->json(['message'=>'Data has been created successfully!'],201);
    }

    public function SaveEditExpenses(Request $request){
        Expense::where('expense_id',$request->expense_id)
        ->update(["description" => $request->description,"amount" => $request->amount,"updated_by" => $request->user_id,"updated_at" => Carbon::now()]);
        return response()->json(['message'=>'Data has been created successfully!'],201);   
    }

    public function DeleteExpenses(Request $request){
        Expense::where('expense_id',$request->expense_id)
        ->update(["deleted_at" => Carbon::now(),"updated_by" => $request->user_id,"updated_at" => Carbon::now()]);
        return response()->json(['message'=>'Data has been created successfully!'],201);   
    }

    public function RestoreExpenses(Request $request){
        Expense::where('expense_id',$request->expense_id)
        ->update(["deleted_at" => null,"updated_by" => $request->user_id,"updated_at" => Carbon::now()]);
        return response()->json(['message'=>'Data has been created successfully!'],201);   
    }

    public function GetUsersExpenses(){
        return Expense::join('expense_categories as ec','ec.category_id','expenses.category_id')
        ->join('users','users.id','expenses.created_by')
        ->select('users.firstname','users.lastname','expenses.expense_id','ec.category_name','expenses.description','expenses.description','expenses.amount','expenses.created_at','expenses.deleted_at')
        ->get();
    }
}

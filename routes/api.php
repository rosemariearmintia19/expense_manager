<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('login','LoginController@Login'); //Login

Route::get('Category','ExpenseCategoryController@index'); // view expense categories

Route::post('Category','ExpenseCategoryController@store'); // save categories

Route::post('SaveEditCategory','ExpenseCategoryController@SaveEditCategory'); // save edit categories

Route::post('DeleteCategory','ExpenseCategoryController@DeleteCategory'); // delete categories

Route::post('RestoreCategory','ExpenseCategoryController@RestoreCategory'); // restore categories

Route::get('GetCategory','ExpenseCategoryController@GetCategory'); // get categories

Route::post('GetExpenses','ExpenseController@index'); // show expenses

Route::post('Expenses','ExpenseController@store'); // save expenses

Route::post('SaveEditExpenses','ExpenseController@SaveEditExpenses'); //  edit expenses

Route::post('DeleteExpenses','ExpenseController@DeleteExpenses'); //  delete expenses

Route::post('RestoreExpenses','ExpenseController@RestoreExpenses'); //  restore expenses

Route::post('User','UserController@store'); // save user

Route::get('User','UserController@index'); // get all users

Route::post('SaveEditUser','UserController@SaveEditUser'); //  edit users

Route::post('DeleteUser','UserController@DeleteUser'); //  delete users

Route::post('RestoreUser','UserController@RestoreUser'); //  restore users

Route::post('checkpassword','UserController@checkpassword'); //  check users password

Route::post('SaveNewPassword','UserController@SaveNewPassword'); //  change password

Route::post('Register','UserController@Register');

Route::get('GetUsersExpenses','ExpenseController@GetUsersExpenses');

Route::get('Permission','RoleController@index');

Route::post('Permission','RoleController@store');

Route::post('SaveEditPermission','RoleController@SaveEditPermission');

Route::post('DeletePermission','RoleController@DeletePermission');

Route::post('RestorePermission','RoleController@RestorePermission');

Route::get('GetRoles','RoleController@GetRoles');



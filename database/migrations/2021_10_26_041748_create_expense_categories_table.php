<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateExpenseCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('expense_categories', function (Blueprint $table) {
            $table->id('category_id');
            $table->string('category_name');
            $table->string('description')->nullable();
            $table->dateTime('created_at');
            $table->integer('created_by');
            $table->dateTime('deleted_at')->nullable();
            $table->integer('updated_by')->nullable();   
            $table->dateTime('updated_at')->nullable();
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('expense_categories');
    }
}

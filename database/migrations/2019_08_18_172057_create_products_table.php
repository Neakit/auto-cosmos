<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->string('product_number');
            $table->string('product_number_replacements');
            $table->string('product_number_inner');
            // связь с таблицей product_model
            $table->integer('product_model_id');
            $table->text('description');
            $table->text('description_full');
            $table->integer('price');
            // связь с таблицей category 
            $table->integer('category_id');
            $table->boolean('product_recommend');
            $table->string('images')->default('[]');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}

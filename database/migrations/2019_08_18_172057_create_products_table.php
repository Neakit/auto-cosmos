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
            $table->integer('product_number');
            $table->string('product_number_replacements');
            $table->string('product_number_inner');
            $table->integer('product_model_id');
            $table->string('description');
            $table->string('description_full');
            $table->integer('price');
            $table->integer('category_id');
            $table->boolean('product_recommend');
            $table->integer('currency_id')->nullable();
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

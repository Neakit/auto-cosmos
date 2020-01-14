<?php

use Illuminate\Database\Seeder;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     * @throws Exception
     */
    public function run()
    {
        $products = [
            [
                "title" => "Двигатель MERSEDES OM 904 LA 2-я комплектация",
                "product_number" => "12345",
                "product_number_replacements" => "123456 / 123456",
                "product_number_inner" => "12345",
                "product_model_id" => 1,
                "description" => "Lorem ipsum dolor sit amet, consectetur consequat.",
                "description_full" => "Lorem ipsum dolor sit amet, consectetur consequat.",
                "price" => 200.10,
                "category_id" => 1,
                "currency_id" => 1,
                "product_recommend" => false,
                'images' => '[]',
                'created_at' => new DateTime,
                'updated_at' => null,
            ]
        ];

        DB::table('products')->insert($products);
    }
}

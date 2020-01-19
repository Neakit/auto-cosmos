<?php

use Illuminate\Database\Seeder;
// use App\database\BuyingTableSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            UsersTableSeeder::class,
            ProductsCategoriesTableSeeder::class,
            ProductsModelTableSeeder::class,
            ProductsTableSeeder::class,
          ]);
    }
}



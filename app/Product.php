<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        "title",
        "product_number",
        "product_number_replacements",
        "product_number_inner",
        "product_model_id",
        "description",
        "description_full",
        "price",
        "category_id",
        "product_recommend",
        "images"
    ];

    protected $hidden = [
        'deleted_at',
        'updated_at'
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function model()
    {
        return $this->belongsTo(ProductModel::class, 'product_model_id');
    }

}

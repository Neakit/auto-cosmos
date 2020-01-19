<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'title',
        'description',
        'price',
        'image',
        'images',
        'product_model_id',
        'category_id',
        'status_id'
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

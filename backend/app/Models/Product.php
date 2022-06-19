<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    public function category(){
        return $this->hasOne(Category::class,'id','category_id');
    }
  
    public function sizeun(){
        return $this->hasMany(SizeUnavailable::class,'product_id','id');
    }
    public function image(){
        return $this->hasMany(ProductImage::class,'product_id','id');
    }
}

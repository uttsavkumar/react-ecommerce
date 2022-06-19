<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    
    public function parent()
    {
       return  $this->hasOne(Category::class, 'id', 'parent_id');
    }
    public function productcat(){
        return $this->hasMany(Product::class,'category_id','id');
    }
}

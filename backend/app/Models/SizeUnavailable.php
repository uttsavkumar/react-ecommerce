<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SizeUnavailable extends Model
{
    use HasFactory;

    public function sizeprd(){
        return $this->hasOne(Product::class,'id','product_id');
    }
    public function size(){
        return $this->hasOne(Size::class,'id','size_id');
    }
}

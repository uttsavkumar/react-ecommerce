<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Size extends Model
{
    use HasFactory;
    public function sizeun(){
        return $this->hasMany(SizeUnavailable::class,'size_id','id');
    }
}

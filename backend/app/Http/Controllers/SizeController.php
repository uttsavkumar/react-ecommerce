<?php

namespace App\Http\Controllers;

use App\Models\Size;
use Illuminate\Http\Request;

class SizeController extends Controller
{
   
    public function index()
    {
        return Size::all();
    }

   
   
  
    public function store(Request $request)
    {
        $s = new Size();
        $s->size = $request->size;
        $s->save();

        return "Size inserted";
    }

  
    public function show(Size $size)
    {
        //
    }

   

  
    public function update(Request $request, Size $size)
    {
        //
    }

    
    public function destroy($id)
    {
        $s = Size::find($id);
        $s->delete();

        return "Size Deleted";
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\ProductImage;
use Illuminate\Http\Request;

class ProductImageController extends Controller
{
 
    public function index()
    {
        return ProductImage::with('product')->get();
    }

  
 
    public function store(Request $request)
    {
        $i = new ProductImage();
        $i->product_id = $request->product_id;
        $filename = $request->more_image->getClientOriginalName();
        // $f_name = date("YmdHis").".".$request->image->getClientOriginalExtension();
        $request->more_image->move(public_path('more_images'),$filename);
        $i->more_image = $filename;
        $i->save();
        return "Image inserted";

    }

    
    public function show(ProductImage $productImage)
    {
        //
    }

  

    public function update(Request $request, ProductImage $productImage)
    {
        //
    }

    
    public function destroy(ProductImage $productImage)
    {
        //
    }
}

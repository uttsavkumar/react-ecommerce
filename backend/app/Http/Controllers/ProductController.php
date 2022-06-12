<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{

    public function index()
    {
        return Product::all();
    }




    public function store(Request $request)
    {
        $p = new Product();
        $p->title = $request->title;
        $p->category_id = $request->category_id;
        $p->description = $request->description;
        $p->price = $request->price;
        $filename = $request->image->getClientOriginalName();
        $request->image->move(public_path('images'),$filename);
        $p->image = $filename;
        $p->save();
        return "Product Inserted";
    }


    public function show($id)
    {
        return Product::find($id);
    }



    public function update(Request $request, $id)
    {
        $p = Product::find($id);
        $p->title = $request->title;
        $p->category_id = $request->category_id;
        $p->description = $request->description;
        $p->price = $request->price;
        $p->save();
        return "Product Updated";
    }


    public function destroy($id)
    {
        $p = Product::find($id);
        $p->delete();
        return "Product Deleted";
    }
}

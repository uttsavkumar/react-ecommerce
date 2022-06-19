<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use App\Models\Size;
use App\Models\SizeUnavailable;
use Illuminate\Http\Request;
use Symfony\Component\Console\Input\Input;

class ProductController extends Controller
{

    public function index()
    {
        // return Product::with('category')->get();
        return Product::with('category')->get();
    }

    public function store(Request $request)
    {

        $p = new Product();
        $p->title = $request->title;
        $p->category_id = $request->category_id;
        $p->description = $request->description;
        $p->price = $request->price;
        $filename = $request->image->getClientOriginalName();
        // $f_name = date("YmdHis").".".$request->image->getClientOriginalExtension();
        $request->image->move(public_path('images'), $filename);
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
        $filename = $request->image->getClientOriginalName();
        // $f_name = date("YmdHis").".".$request->image->getClientOriginalExtension();
        $request->image->move(public_path('images'), $filename);
        $p->image = $filename;
        $p->save();
        return "Product Updated";
    }


    public function destroy($id)
    {
        $p = Product::find($id);
        $p->delete();
        return "Product Deleted";
    }

    public function men()
    {
        $cat = Category::where('parent_id', 1)->get();
        $data = [];
        foreach ($cat as $c) {
            $prd =  Product::with('category')->where('category_id', $c->id)->get();
            foreach ($prd as $p) {
                array_push($data, $p);
            }
        }
        return $data;
    }
    public function women()
    {
        $cat = Category::where('parent_id', 2)->get();
        $data = [];
        foreach ($cat as $c) {
            $prd =  Product::with('category')->where('category_id', $c->id)->get();
            foreach ($prd as $p) {
                array_push($data, $p);
            }
        }
        return $data;
    }
    public function kid()
    {
        $cat = Category::where('parent_id', 3)->get();
        $data = [];
        foreach ($cat as $c) {
            $prd =  Product::with('category')->where('category_id', $c->id)->get();
            foreach ($prd as $p) {
                array_push($data, $p);
            }
        }
        return $data;
    }
    public function filter($id)
    {
        $data = [];
        $prd =  Product::with('category')->where('category_id', $id)->get();
        foreach ($prd as $p) {
            array_push($data, $p);
        }
        return $data;
    }
    public function mencat()
    {
        $cat = Category::where('parent_id', 1)->get();
        return $cat;
    }
    public function womencat()
    {
        $cat = Category::where('parent_id', 2)->get();
        return $cat;
    }
    public function kidcat()
    {
        $cat = Category::where('parent_id', 3)->get();
        return $cat;
    }
    public function singlePrd($id){
        return Product::where('id',$id)->with(['image','category'])->first();
    }
    public function unsize($id){
        if($prd = Product::where('id',$id)->with('sizeun')->first()){  
             if(count($prd->sizeun) < 1){
                return Size::all();
            }
            else{            
                $s = Size::all(); 
                foreach($s as $size){
                   //unavialable size 
                }
            return $prd;
            }
        }
    }
   
}

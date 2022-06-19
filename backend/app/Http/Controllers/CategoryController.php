<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
   
    public function index()
    {
        return Category::with('parent')->get();
    }

    
  
    
    public function store(Request $request)
    {
        $cat = new Category();
        $cat->parent_id = $request->parent_id;
        $cat->cat_title = $request->cat_title;
        $cat->save();
        return "Category Inserted";
    }

   
    public function show(Category $category)
    {
        //
    }


    public function update(Request $request, $id)
    {
        $cat = Category::find($id);
        $cat->cat_title = $request->cat_title;
        $cat->parent_id = $request->parent_id;
        $cat->save();

        return "Category Updated";
    }

    public function destroy($id)
    {
        $cat = Category::find($id);
        $cat->delete();

        return "Category Deleted";
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\SizeUnavailable;
use Illuminate\Http\Request;

class SizeUnavailableController extends Controller
{
    public function store(Request $req){
        $s = new SizeUnavailable();
        $s->product_id = $req->product_id;
        $s->size_id = $req->size_id;
        $s->save();
        return "size Una inserted";
    }
    public function index(){
        return SizeUnavailable::with(['size','sizeprd'])->get();
    }
    public function delete($id){
        $del = SizeUnavailable::find($id);
        $del->delete();
        return "size Una deleted";

    }
}

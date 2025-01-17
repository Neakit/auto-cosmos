<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\File;

class ProductController extends Controller
{

    public function index(Request $request)
    {
        if($request->has('all')) {
            $results = Product::with(['category', 'model'])
                ->where('product_model_id', $request->product_model_id)
                ->get();
            return response()->json($results, 200);
        }

        $results = Product::with(['category', 'model'])
            ->where(function($q) use ($request){
                if(isset($request->title)){
                    $q->where('title', 'like', "%" . urldecode($request->title) . "%");
                }
            })->whereHas('category', function($q) use ($request){
                 if(isset($request->category_id)){
                     $q->where('category_id', '=', $request->category_id);
                 }
            })->whereHas('model', function($q) use ($request){
                 if(isset($request->product_model_id)){
                     $q->where('product_model_id', '=', $request->product_model_id);
                 }
            })->paginate(9);

        return response()->json($results, 200);
    }

    /**
    * Создание продукта
     */
    public function store(Request $request)
    {
        $product = Product::create([
            "title" => $request->title,
            "product_number" => $request->product_number,
            "product_number_replacements" => $request->product_number_replacements,
            "product_number_inner" => $request->product_number_inner,
            "product_model_id" => $request->product_model_id,
            "description" => $request->description,
            "description_full" =>  $request->description_full,
            "price" => $request->price,
            "category_id" => $request->category_id,
            "product_recommend" => $request->product_recommend,
            'images' => $request->images,
        ]);

        $data = Product::where('id', $product->id)->with(['category', 'model'])->first();

        return response()->json([
            'status' => (bool) $product ? 1 : 0,
            'data' => $data,
            'message' => $product ? 'Product Created!' : 'Error Creating Product'
        ]);
    }

    public function uploadFile(Request $request)
    {
        if($request->hasFile('image')){
            $name = time()."_".$request->file('image')->getClientOriginalName();
            // $request->file('image')->move(public_path('images'), $name);
            $request->file('image')->move(base_path().'/public_html/images/products', $name);
            // $request->file('image')->move(base_path().'/public/images/products', $name);
        }
        return response()->json(asset("images/products/$name"),201);
    }

    public function deleteFile(Request $request)
    {
        $file_path = base_path().'/public_html/images/products/'.$request->name;

        if(isset($request->id)) {
            $status = Product::find($request->id);
            $status->update(['images' => $request->images]);

            $data = Product::where('id', $request->id)->with(['category', 'model'])->first();
            return response()->json([
                'data' => $data,
                'status' => $status ? 1 : 0,
                'message' => $status ? 'Product Updated!' : 'Error Updating Product'
            ]);
        }
        if(File::exists($file_path) ) {
            File::delete($file_path);
        }
    }

    public function show(Product $product)
    {
        return response()->json($product, 200);
    }

    public function update(Request $request, Product $product)
    {
        $status = $product->update(
            $request->only([
                'image',
                'images',
                'title',
                'product_model_id',
                'category_id',
                'status_id',
                'price',
                'description'
            ])
        );

        $data = Product::where('id', $request->id)->with(['category', 'model', 'status'])->first();

        return response()->json([
            'data' => $data,
            'status' => $status ? 1 : 0,
            'message' => $status ? 'Product Updated!' : 'Error Updating Product'
        ]);
    }

    public function updateUnits(Request $request, Product $product)
    {
        $product->units = $product->units + $request->get('units');
        $status = $product->save();

        return response()->json([
            'status' => $status,
            'message' => $status ? 'Units Added!' : 'Error Adding Product Units'
        ]);
    }

    public function destroy(Product $product)
    {
        $status = $product->delete();

        return response()->json([
            'status' => $status,
            'message' => $status ? 'Product Deleted!' : 'Error Deleting Product'
        ]);
    }

}

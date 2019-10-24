<?php namespace App\Http\Controllers;

use Illuminate\Support\Facades\Input;
use Illuminate\Http\Request;
use Validator;
use Response;
use View;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Parser;

use App\Origins;
use App\Divisions;

class DashOriginsController extends Controller {

	public function index() {
        $data = Origins::getData();
        $divisions = Divisions::orderBy('name')->get();

        return view('dash/origins', ['data' => $data, 'divisions' => $divisions]);
	}

    public function create() { }

    public function store(Request $request) {
        $post = new Origins();
        $post->division = $request->division;
        $post->name = $request->name;
        $post->icon = $request->icon;
        $post->image = $request->image;
        $post->description = $request->description;
        $post->color = $request->color;
        $post->save();

        $data = Origins::getData();
        return response()->json($data);
    }

    public function show($id) {
        $post = Origins::findOrFail($id);
        return view('post.show', ['post' => $post]);
    }

    public function edit($id) { }

    public function update(Request $request, $id) {
        $post = Origins::findOrFail($id);
        $post->division = $request->division;
        $post->name = $request->name;
        $post->icon = $request->icon;
        $post->image = $request->image;
        $post->description = $request->description;
        $post->color = $request->color;
        $post->save();
        
        $data = Origins::getData();
        return response()->json($data);
    }

    public function destroy($id) {
        $post = Origins::findOrFail($id);
        $post->delete();

        $data = Origins::getData();
        return response()->json($data);
    }

    public function saveDescription() {
        $id = Input::get('id');

        $post = Origins::findOrFail($id);
        $post->description = Input::get('description');
        $post->save();

        $data = Origins::getData();
        return response()->json($data);
    }

    public function getData() {
        $name = Input::get('name');

        $data = Origins::where('name', $name)->first();
        $data->block_id = Input::get('block_id');
        $data->alt = Input::get('alt');
        return response()->json($data);
    }
}
    
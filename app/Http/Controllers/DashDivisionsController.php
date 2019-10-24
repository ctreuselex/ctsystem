<?php namespace App\Http\Controllers;

use Illuminate\Support\Facades\Input;
use Illuminate\Http\Request;
use Validator;
use Response;
use View;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Parser;

use App\Divisions;

class DashDivisionsController extends Controller {

	public function index() {
        $data = Divisions::orderBy('name')->get();
        return view('dash/divisions', ['data' => $data]);
	}

    public function create() { }

    public function store(Request $request) {
        $post = new Divisions();
        $post->name = $request->name;
        $post->logo = $request->logo;
        $post->image = $request->image;
        $post->description = $request->description;
        $post->color_primary = $request->color_primary;
        $post->color_secondary = $request->color_secondary;
        $post->save();

        $data = Divisions::orderBy('name')->get();
        return response()->json($data);
    }

    public function show($id) {
        $post = Divisions::findOrFail($id);
        return view('post.show', ['post' => $post]);
    }

    public function edit($id) { }

    public function update(Request $request, $id) {
        $post = Divisions::findOrFail($id);
        $post->name = $request->name;
        $post->logo = $request->logo;
        $post->image = $request->image;
        $post->description = $request->description;
        $post->color_primary = $request->color_primary;
        $post->color_secondary = $request->color_secondary;
        $post->save();
        
        $data = Divisions::orderBy('name')->get();
        return response()->json($data);
    }

    public function destroy($id) {
        $post = Divisions::findOrFail($id);
        $post->delete();

        $data = Divisions::orderBy('name')->get();
        return response()->json($data);
    }

    public function saveDescription() {
        $id = Input::get('id');

        $post = Divisions::findOrFail($id);
        $post->description = Input::get('description');
        $post->save();

        $data = Divisions::getData();
        return response()->json($data);
    }

    public function getData() {
        $name = Input::get('name');

        $data = Divisions::where('name', $name)->first();
        $data->block_id = Input::get('block_id');
        $data->alt = Input::get('alt');
        return response()->json($data);
    }
}
    
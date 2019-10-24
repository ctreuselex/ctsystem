<?php namespace App\Http\Controllers;

use Illuminate\Support\Facades\Input;
use Illuminate\Http\Request;
use Validator;
use Response;
use View;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Parser;

use App\Affinities;

class DashAffinitiesController extends Controller {

	public function index() {
        $data = Affinities::orderBy('name')->get();
        return view('dash/affinities', ['data' => $data]);
	}

    public function create() { }

    public function store(Request $request) {
        $post = new Affinities();
        $post->name = $request->name;
        $post->icon = $request->icon;
        $post->color = $request->color;
        $post->image = $request->image;
        $post->description = $request->description;
        $post->save();

        $data = Affinities::orderBy('name')->get();
        return response()->json($data);
    }

    public function show($id) {
        $post = Affinities::findOrFail($id);
        return view('post.show', ['post' => $post]);
    }

    public function edit($id) { }

    public function update(Request $request, $id) {
        $post = Affinities::findOrFail($id);
        $post->name = $request->name;
        $post->icon = $request->icon;
        $post->color = $request->color;
        $post->image = $request->image;
        $post->description = $request->description;
        $post->save();
        
        $data = Affinities::orderBy('name')->get();
        return response()->json($data);
    }

    public function destroy($id) {
        $post = Affinities::findOrFail($id);
        $post->delete();

        $data = Affinities::orderBy('name')->get();
        return response()->json($data);
    }

    public function saveDescription() {
        $id = Input::get('id');

        $post = Affinities::findOrFail($id);
        $post->description = Input::get('description');
        $post->save();

        $data = Affinities::getData();
        return response()->json($data);
    }

    public function getData() {
        $name = Input::get('name');

        $data = Affinities::where('name', $name)->first();
        $data->block_id = Input::get('block_id');
        $data->alt = Input::get('alt');
        return response()->json($data);
    }
}
    
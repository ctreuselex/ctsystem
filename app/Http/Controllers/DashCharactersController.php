<?php namespace App\Http\Controllers;

use Illuminate\Support\Facades\Input;
use Illuminate\Http\Request;
use Validator;
use Response;
use View;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Parser;

use App\Characters;
use App\Affinities;
use App\Divisions;
use App\Origins;

class DashCharactersController extends Controller {

	public function index() {
        $characters = Characters::getData();
        $affinities = Affinities::orderBy('name')->get();
        $divisions = Divisions::orderBy('name')->get();
        $origins = Origins::orderBy('name')->get();

        return view('dash/characters', [
            'characters' => $characters, 
            'affinities' => $affinities, 
            'divisions' => $divisions, 
            'origins' => $origins
        ]);
	}

    public function create() { }

    public function store(Request $request) {
        $post = new Characters();
        $post->icon = $request->icon;
        $post->image = $request->image;
        $post->name = $request->name;
        $post->surname = $request->surname;
        $post->birth_year = $request->birth_year;
        $post->color_primary = $request->color_primary;
        $post->color_secondary = $request->color_secondary;
        $post->affinity = $request->affinity;
        $post->origin = $request->origin;
        $post->forum_name = $request->forum_name;
        $post->description = $request->description;
        $post->save();

        $characters = Characters::getData();
        return response()->json($characters);
    }

    public function show($id) {
        $post = Characters::findOrFail($id);
        return view('post.show', ['post' => $post]);
    }

    public function edit($id) { }

    public function update(Request $request, $id) {
        $post = Characters::findOrFail($id);
        $post->icon = $request->icon;
        $post->image = $request->image;
        $post->name = $request->name;
        $post->surname = $request->surname;
        $post->birth_year = $request->birth_year;
        $post->color_primary = $request->color_primary;
        $post->color_secondary = $request->color_secondary;
        $post->affinity = $request->affinity;
        $post->origin = $request->origin;
        $post->forum_name = $request->forum_name;
        $post->description = $request->description;
        $post->save();

        $characters = Characters::getData();
        return response()->json($characters);
    }

    public function destroy($id) {
        $post = Characters::findOrFail($id);
        $post->delete();

        $characters = Characters::getData();
        return response()->json($characters);
    }

    public function saveDescription() {
        $id = Input::get('id');

        $post = Characters::findOrFail($id);
        $post->description = Input::get('description');
        $post->save();

        $characters = Characters::getData();
        return response()->json($characters);
    }

    public function getData() {
        $name = Input::get('name');

        $characters = Characters::where('name', $name)->first();
        $characters->block_id = Input::get('block_id');
        $characters->alt = Input::get('alt');
        return response()->json($characters);
    }
}
    
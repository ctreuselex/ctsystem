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
        $data = Characters::getData();
        $affinities = Affinities::orderBy('name')->get();
        $origins = Origins::orderBy('name')->get();

        return view('dash/characters', ['data' => $data, 'affinities' => $affinities, 'origins' => $origins]);
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

        $data = Characters::getData();
        return response()->json($data);
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

        $data = Characters::getData();
        return response()->json($data);
    }

    public function destroy($id) {
        $post = Characters::findOrFail($id);
        $post->delete();

        $data = Characters::getData();
        return response()->json($data);
    }

    public function saveDescription() {
        $id = Input::get('id');

        $post = Characters::findOrFail($id);
        $post->description = Input::get('description');
        $post->save();

        $data = Characters::getData();
        return response()->json($data);
    }
}
    
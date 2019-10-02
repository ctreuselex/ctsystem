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
        $data = Origins::leftJoin('divisions', 'origins.division', '=', 'divisions.id')
                ->select(
                    'origins.*',
                    'divisions.name as division_name',
                    'divisions.color_primary as division_color' )
                ->orderBy('name')->get();
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

        $data = Origins::leftJoin('divisions', 'origins.division', '=', 'divisions.id')
                ->select(
                    'origins.*',
                    'divisions.name as division_name',
                    'divisions.color_primary as division_color' )
                ->orderBy('name')->get();
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
        
        $data = Origins::leftJoin('divisions', 'origins.division', '=', 'divisions.id')
                ->select(
                    'origins.*',
                    'divisions.name as division_name',
                    'divisions.color_primary as division_color' )
                ->orderBy('name')->get();
        return response()->json($data);
    }

    public function destroy($id) {
        $post = Origins::findOrFail($id);
        $post->delete();

        $data = Origins::leftJoin('divisions', 'origins.division', '=', 'divisions.id')
                ->select(
                    'origins.*',
                    'divisions.name as division_name',
                    'divisions.color_primary as division_color' )
                ->orderBy('name')->get();
        return response()->json($data);
    }
}
    
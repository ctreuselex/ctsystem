<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Characters extends Model {
    protected $table = 'characters';
    protected $fillable = [
    	'name', 
    	'surname', 
    	'forum_name', 
    	'birth_year', 
    	'affinity', 
    	'icon', 
    	'image', 
    	'color_primary', 
    	'color_seondary', 
    	'origin',
    	'description', 
    ];

    public static function getData() {
    	$data = Characters::leftJoin('affinities', 'characters.affinity', '=', 'affinities.id')
            ->leftJoin('origins', 'characters.origin', '=', 'origins.id')
            ->leftJoin('divisions', 'origins.division', '=', 'divisions.id')
            ->select(
                'characters.*',
                'affinities.name as affinity_name',
                'affinities.icon as affinity_icon',
                'affinities.color as affinity_color',
                'origins.name as origin_name',
                'origins.color as origin_color',
                'divisions.name as division_name',
                'divisions.color_primary as division_color' )
            ->orderBy('name')->get();

        return $data;
    }
}
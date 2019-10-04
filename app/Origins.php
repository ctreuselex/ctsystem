<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Origins extends Model {
    protected $table = 'origins';
    protected $fillable = [
    	'name', 
    	'icon', 
    	'image', 
    	'description', 
    	'color', 
    	'division',
    ];

    public static function getData() {
        $data = Origins::leftJoin('divisions', 'origins.division', '=', 'divisions.id')
                ->select(
                    'origins.*',
                    'divisions.name as division_name',
                    'divisions.color_primary as division_color' )
                ->orderBy('name')->get();

        return $data;
    }
}
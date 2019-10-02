<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Origins extends Model {
    protected $table = 'origins';
    protected $fillable = ['name', 'icon', 'image', 'description', 'color', 'division',];
}
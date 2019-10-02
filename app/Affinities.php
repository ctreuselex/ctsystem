<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Affinities extends Model {
    protected $table = 'affinities';
    protected $fillable = ['name', 'icon', 'color', 'image', 'description'];
}
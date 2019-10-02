<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Divisions extends Model {
    protected $table = 'divisions';
    protected $fillable = ['name', 'logo', 'image', 'description', 'color_primary', 'color_secondary'];
}
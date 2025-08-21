<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Schedules;

class Sections extends Model
{
    /** @use HasFactory<\Database\Factories\SectionsFactory> */
    use HasFactory;

    protected $table = 'sections';
    protected $primaryKey = 'id';
    protected $fillable = [
        'section',
        'year',
        'program',
    ];

    public function Schedules()
    {
        return $this->hasMany(Schedules::class, 'section_id');
    }
}

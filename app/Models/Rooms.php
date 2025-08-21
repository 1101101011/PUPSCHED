<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Schedules;

class Rooms extends Model
{
    /** @use HasFactory<\Database\Factories\RoomsFactory> */
    use HasFactory;

    protected $table = 'rooms';
    protected $primaryKey = 'id';
    protected $fillable = [
        'room',
    ];

    public function Schedules()
    {
        return $this->hasMany(Schedules::class, 'room_id');
    }

}

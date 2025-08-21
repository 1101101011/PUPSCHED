<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Rooms;
use App\Models\Subjects;
use App\Models\Sections;
use App\Models\User;

class Schedules extends Model
{
    /** @use HasFactory<\Database\Factories\SchedulesFactory> */
    use HasFactory;

    protected $table = 'schedules';
    protected $primaryKey = 'id';
    protected $fillable = [
        'subject_id',
        'section_id',
        'room_id',
        'professor_id',
        'day',
        'start_time',
        'end_time',
    ];

    public function Professor()
    {
        return $this->belongsTo(User::class, 'professor_id');
    }

    public function Subject()
    {
        return $this->belongsTo(Subjects::class, 'subject_id');
    }

    public function Section()
    {
        return $this->belongsTo(Sections::class, 'section_id');
    }

    public function Room()
    {
        return $this->belongsTo(Rooms::class, 'room_id');
    }
}

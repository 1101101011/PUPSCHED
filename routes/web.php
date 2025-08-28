<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('export', function () {
        return Inertia::render('export');
    })->name('export');

    Route::get('courses', function () {
        return Inertia::render('courses');
    })->name('courses');

    Route::get('classes', function () {
        return Inertia::render('classes');
    })->name('classes');

    Route::get('instructors', function () {
        return Inertia::render('instructors');
    })->name('instructors');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';

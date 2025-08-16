<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('export', function () {
        return Inertia::render('export');
    })->name('export');

    Route::get('subject', function () {
        return Inertia::render('subject');
    })->name('subject');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';

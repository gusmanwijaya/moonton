<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = User::create([
            'name' => 'Admin',
            'email' => 'admin@moonton.test',
            'password' => bcrypt('admin123')
        ]);
        $data->assignRole('admin');
    }
}

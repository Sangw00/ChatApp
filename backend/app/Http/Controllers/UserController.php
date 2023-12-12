<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Response;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Hash;
use Illuminate\Auth\Events\Registered;

class UserController extends Controller
{
    //

    public function register(Request $request)
{
    $validateData = $request->validate([
        'username' => 'required|string|min:8',
        'email' => 'required|email|unique:users,email',
        'password' => 'required|min:8',
        'password_confirmation' => 'required|same:password',
    ]);

    $user = User::create([
        'username' => $validateData['username'],
        'email' => $validateData['email'],
        'password' => Hash::make($validateData['password']),
        'password_confirmation' => Hash::make($validateData['password']),
    ]);

    $user->sendEmailVerificationNotification();

    if ($user->hasVerifiedEmail()) {
        $user->remember_token = $user->createToken('auth_token')->plainTextToken;
        $user->save();
        event(new Registered($user));

        return response()->json([
            'message' => 'User registered successfully',
            'access_token' => $user->remember_token,
            'data' => new UserResource($user),
            'status' => Response::HTTP_OK
        ]);
    } else {
        return response()->json(['message' => 'Registration failed'], 401);
    }
}
    
    public function login(Request $request){

        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json([
                'message' => 'Invalid login details'
            ], 401);
        }
    
        $user = User::where('email', $request['email'])->findOrFail();
        if ($user->remember_token !== $request->header('Authorization')) {
            return response()->json(['message' => 'Invalid token'], 401);
        }
    
        return response()->json([
            'message' => 'User registered successfully',
            'status' => Response::HTTP_OK
        ]);
    } 

}

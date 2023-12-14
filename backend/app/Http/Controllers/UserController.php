<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Response;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Hash;
use Illuminate\Auth\Events\Registered;
use App\Mail\RegisterMail;

class UserController extends Controller
{
    //

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'username' => 'required|string|min:8',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:8',
            'password_confirmation' => 'required|same:password',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $user = User::create([
            'username' => $request->input('username'),
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('password')),
        ]);

        // Send email verification notification
        
        $user->sendEmailVerificationNotification();

        return response()->json(['message' => 'Email verification sent'], 200);
    }

    public function verifyEmail(Request $request)
{
    $user = User::where('email', $request->email)->first();

    if (!$user) {
        return response()->json(['message' => 'User not found'], 404);
    }

    if ($user->hasVerifiedEmail()) {
        return response()->json(['message' => 'Email already verified'], 200);
    }

    $user->markEmailAsVerified();

    // Generate a token for the user
    $token = $user->createToken('auth_token')->plainTextToken;

    event(new Registered($user));

    return response()->json([
        'message' => 'Email verified successfully',
        'access_token' => $token,
        'data' => new UserResource($user),
        'status' => Response::HTTP_OK
    ]);
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

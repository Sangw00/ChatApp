@component('mail::message')
    {{-- Header --}}
    @slot('header')
        @component('mail::header', ['url' => config('app.url')])
            {{ config('app.name') }}
        @endcomponent
    @endslot

    {{-- Body --}}
    <p>Hello {{ $user->username }},</p>

    @component('mail::button', ['url' => url('/email/verify/'.$user->id.'/'.$user->remember_token), 'color' => 'green'])
        Verify your email
    @endcomponent

    <p >In case you face any issues, don't hesitate to contact us.</p>

    <br/>

    {{-- Footer --}}
    @slot('footer')
        @component('mail::footer')
            &copy; {{ date('Y') }} {{ config('app.name') }}. All rights reserved.
        @endcomponent
    @endslot
@endcomponent

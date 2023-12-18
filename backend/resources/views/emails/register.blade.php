@component('mail::message')
<p> hello {{ $user->name }} hhhh</p>

@component('mail::button',['url'=>url('verifyEmail/'.$user->remembertoken )])


@endcomponent;
<p> in case you face any issues , don't hesitate to contact us </p>
<br/>

{{ config('app.name') }}

@endcomponent;


@extends('layouts.default')

@section('content')
  <a href="{{route('article.flux')}}"><- Retour</a>
  <img src="{{$image['url']}}" alt="{{$image['alt']}}">
  <h1>{{$title}}</h1>
  <p>{{$description}}</p>
@endsection

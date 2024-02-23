@extends('layouts.default')

@section('content')
  <ul>
    @foreach($articles as $article)
      <li>
        <a href="{{ route('article.show', ['id' => $article['id']]) }}">{{ $article['title'] }}</a>
      </li>
    @endforeach
  </ul>
@endsection

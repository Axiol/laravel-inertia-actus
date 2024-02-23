<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\View\View;

class ArticleController extends Controller
{
  public function flux(): View
  {
    $response = Http::get(env('BFF_URL').'/articles?_sort[majorUpdatedAt]=desc&_limit=30&platform=WEB&clientId=a7db15a0-5b1c-11eb-8188-2f4e3503a1f3');
    $articles = $response->json();
    $articles = $articles['data'];

    return view('flux', ['articles' => $articles]);
  }

  public function show(string $id): View
  {
    $response = Http::get(env('BFF_URL').'/articles/'.$id);
    $article = $response->json();

    return view('article', [
      'title' => $article['meta']['WEB']['seo']['title'],
      'description' => $article['meta']['WEB']['seo']['description'],
      'image' => $article['meta']['WEB']['seo']['openGraph']['images'][0],
    ]);
  }
}

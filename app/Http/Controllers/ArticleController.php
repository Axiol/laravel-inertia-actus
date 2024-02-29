<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\View\View;
use Inertia\Inertia;

class ArticleController extends Controller
{
  public function flux(): \Inertia\Response
  {
//    $response = Http::get(env('BFF_URL').'/articles?_sort[majorUpdatedAt]=desc&_limit=30&platform=WEB&clientId=a7db15a0-5b1c-11eb-8188-2f4e3503a1f3');
//    $articles = $response->json();
//    $articles = $articles['data'];

    $mockData = [
      [
        "id" => '11333607',
        "title" => "The Voice Belgique : qui de Diogo ou Jacques a remporté son duel ?",
      ],
      [
        "id" => '11337236',
        "title" => "La saga \"Y a-t-il un flic\" aura une suite avec Liam Neeson",
      ],
      [
        "id" => '11337278',
        "title" => "Un deepfake vocal de Joe Biden a tenté de perturber la primaire démocrate : l'auteur identifié",
      ],
    ];

    return Inertia::render('Article/Flux', [
      'articles' => $mockData,
    ]);
  }

  public function show(string $id): \Inertia\Response
  {
    $response = Http::get(env('BFF_URL').'/articles/'.$id);
    $article = $response->json();

    return Inertia::render('Article/Show', [
      'title' => $article['meta']['WEB']['seo']['title'],
      'description' => $article['meta']['WEB']['seo']['description'],
      'image' => $article['meta']['WEB']['seo']['openGraph']['images'][0],
    ]);
  }
}

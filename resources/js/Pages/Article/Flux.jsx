import { Head, Link } from "@inertiajs/react";

const Flux = ({ articles }) => {
  return (
    <div>
      <Head title='Flux en continu' />
      <h1>En continu</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}><Link href={`/article/${article.id}`}>{article.title}</Link></li>
        ))}
      </ul>
    </div>
  );
}

export default Flux;

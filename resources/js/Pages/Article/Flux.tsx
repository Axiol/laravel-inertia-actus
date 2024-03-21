import { Head, Link } from "@inertiajs/react";

const Flux = ({ articles }) => {
  return (
    <div>
      <Head title='Flux en continu' />
      <h1 className='text-2xl font-bold mb-3'>En continu</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id} className='mb-1'><Link className='text-blue-500 hover:underline' href={`/article/${article.id}`}>{article.title}</Link></li>
        ))}
      </ul>
    </div>
  );
}

export default Flux;

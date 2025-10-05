import { getArticles } from "./services/getarticles";
import Card from "./components/Card_article";

export default async function ArticlesPage() {
    const articles = await getArticles();

    return (
        <div className=" p-4">
            <h1 className="text-2xl font-bold mb-4">Daftar Artikel</h1>
            <ul className="space-y-2">
                {articles.map((article) => (

                  <li key={article.id} className="border p-3 rounded">
                      <Card title={article.title} img={article.urlimage} desc={article.description} author={article.author} />
                  </li>
              ))}

            </ul>
        </div>
    );
}
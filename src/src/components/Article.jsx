// Article component
// Displays a single blog article preview
// Connected to: ArticleList.jsx

function Article({ title, date, preview }) {
  return (
    <article>
      <h3>{title}</h3>

      <small>{date}</small>

      <p>{preview}</p>
    </article>
  );
}

export default Article;
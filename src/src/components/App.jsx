// Main App component
// Parent component for the blog application
// Connected to: Header, About, ArticleList

import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

import blog from "../data/blog";

function App() {
  return (
    <div>
      <Header name={blog.name} />

      <About image={blog.image} about={blog.about} />

      <ArticleList posts={blog.posts} />
    </div>
  );
}

export default App;
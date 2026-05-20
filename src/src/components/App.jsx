import React from "react";

import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

<<<<<<< HEAD:src/src/components/App.jsx
import blog from "../data/blog";
=======
import blogData from "../data/blog";

console.log(blogData);
>>>>>>> 42a7d51de7727cfa7320a520d8212d81cf360d05:src/src/App.jsx

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />

      <About
        image={blogData.image}
        about={blogData.about}
      />

      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;

// About component
// Displays information about the blog
// Connected to: App.jsx

function About({ image, about }) {
  return (
    <aside>
      <img src={image} alt="blog logo" width="250" />

      <p>{about}</p>
    </aside>
  );
}

export default About;
import "./App.css";

function App() {
  return (
    <>
      <div className="card">
        <div className="container">
          <img src="/images/illustration-article.svg" alt="Illustration" />
          <button className="tag">Learning</button>
          <div className="date">Published 21 Dec 2023</div>
          <a href="#" className="title">
            HTML & CSS foundations
          </a>
          <div className="article">
            These languages are the backbone of every website, definine
            structure, content, and presentation.
          </div>
          <div className="author-container">
            <img
              src="/images/image-avatar.webp"
              alt="Author"
              className="avatar"
            />
            <div className="author-name">Greg Hooper</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

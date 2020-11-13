import PropTypes from "prop-types";
import './App.css';

function App({ comment, imageUrl }) {
  return (
    <div className="App">
      <article>
        <img src={imageUrl} />
      </article>
      <section class="comment">
        <img src="https://assets.codepen.io/1469/xavier.jpg?format=auto" />

        <div>
          <h4>Xavier</h4>
          <p contenteditable>{comment}</p>
        </div>
      </section>
    </div>
  );
}

App.propTypes = {
  comment: PropTypes.string,
  imageUrl: PropTypes.string,
}

App.defaultProps = {
  comment: 'This is crazy!',
  imageUrl: 'https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60',
}

export default App;

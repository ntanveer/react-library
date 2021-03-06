var NavBar = React.createClass({
  render: function() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Logo</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">JavaScript</a></li>
          </ul>
        </div>
      </nav>
    );
  }
});

var Footer = React.createClass({
    render: function() {
        return (
            <footer className="page-footer">
              <div className="container">
                <div className="row">
                  <div className="col l6 s12">
                    <h5 className="white-text">Footer Content</h5>
                    <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                  </div>
                  <div className="col l4 offset-l2 s12">
                    <h5 className="white-text">Links</h5>
                    <ul>
                      <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                      <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                      <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                      <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="footer-copyright">
                <div className="container">
                © 2014 Copyright Text
                <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                </div>
              </div>
            </footer>
        );
    }
});

var Main = React.createClass({
    render: function() {
        return (
            <div>Main Content</div>
        )
    }
});

ReactDOM.render(
    <div className="app-container">
        <NavBar/>
        <main className="app-content">main content</main>
        <Footer/>
    </div>,
  document.getElementById('container')
);

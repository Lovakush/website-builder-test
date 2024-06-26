const Footer = () => {
  return (
    <div className="container">
      <footer className="small bg-light">
  <div className="container py-3 py-sm-5">
    <div className="row">
      <div className="col-12 col-sm-6 col-md-3">
        <h6>Quick links</h6>
        <ul className="list-unstyled">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">What's new</a>
          </li>
          <li>
            <a href="#">Featured Product</a>
          </li>
          <li>
            <a href="#">News letter</a>
          </li>
          <li>
            <a href="#">My account</a>
          </li>
        </ul>
      </div>
      <div className="col-12 col-sm-6 col-md-3">
        <h6>Information</h6>
        <ul className="list-unstyled">
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Membership</a>
          </li>
          <li>
            <a href="#">Shipping &amp; returns</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Sitemap</a>
          </li>
        </ul>
      </div>
      <div className="col-12 col-sm-6 col-md-3">
        <h6>Follow us</h6>
        <ul className="list-unstyled">
          <li>
            <a href="#">Facebook</a>
          </li>
          <li>
            <a href="#">Twitter</a>
          </li>
          <li>
            <a href="#">Instagram</a>
          </li>
          <li>
            <a href="#">LinkedIn</a>
          </li>
          <li>
            <a href="#">YouTube</a>
          </li>
        </ul>
      </div>
      <div className="col-12 col-sm-6 col-md-3">
        <address>
          <strong>KIIT University</strong>
          <br />
          Campus-7, KIIT Road
          <br />
          Bhubaneswar, Odisha
          <br />
          <abbr title="Telephone">Tel:</abbr>
          <a href="tel:+919876XXXXXX">+91(987) 65XXXXX</a>
          <br />
          <abbr title="Mail">M:</abbr>
          <a href="mailto:info@domain.com">info@domain.com</a>
        </address>
      </div>
    </div>
    <div className="row">
      <div className="col-12 col-sm-6 col-md-9">
        <ul className="list-inline">
          <li className="list-inline-item">© 2024 Web Company, Inc.</li>
          <li className="list-inline-item">All rights reserved.</li>
          <li className="list-inline-item">
            <a href="#">Terms of use and privacy policy</a>
          </li>
        </ul>
      </div>
      <div className="col-12 col-sm-6 col-md-3">
        <div className="dropdown dropup p-0">
          <button
            type="button"
            className="btn btn-secondary btn-sm dropdown-toggle"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Visit other sites:
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a href="#" className="dropdown-item">
              www.otherwebsite.com
            </a>
            <a href="#" className="dropdown-item">
              www.newwebsite.com
            </a>
            <a href="#" className="dropdown-item">
              www.oldwebsite.com
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

    </div>
  );
};

export default Footer;

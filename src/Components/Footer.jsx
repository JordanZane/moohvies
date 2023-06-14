import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p className="content">
              Copyright ©2023 Zanetti Jordan -{' '}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://jordanzanetti.fr"
              >
                visits my website
              </a>{' '}
              - <Link to="/legal">Legal</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

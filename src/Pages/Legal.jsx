import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Legal = () => {
  return (
    <>
      <Header />
      <main className="legal-page">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>Legal</h2>
              <p>
                This Legal Notice applies to the website
                moohvies.jordanzanetti.fr which utilizes data from an external
                API.
              </p>
              <h3>Use of API Data</h3>
              <p>
                The Website utilizes data from an external API to provide
                information and services related to films. The API data includes
                but is not limited to film titles, genres, release dates, and
                ratings. The data is sourced from the API and displayed on the
                Website for informational purposes.
              </p>
              <h3>Intellectual Property Rights</h3>
              <p>
                The API data used on the Website belongs to the respective
                owners and is subject to their intellectual property rights. The
                display of the data on the Website does not transfer any
                ownership rights to the users.
              </p>
              <h3>Disclaimer of Liability</h3>
              <p>
                The Website and its administrators strive to ensure the accuracy
                and reliability of the information provided through the use of
                the API data. However, we do not guarantee the completeness,
                accuracy, or timeliness of the information displayed. The
                Website and its administrators shall not be held liable for any
                errors, omissions, or damages arising from the use of the API
                data.
              </p>
              <h3>Privacy and Data Protection</h3>
              <p>
                The Website collects and processes certain personal data in
                accordance with its Privacy Policy. This includes data collected
                through the use of the API, such as IP addresses, browser
                information, and cookies. Please refer to the Privacy Policy for
                detailed information on how your personal data is handled.
              </p>
              <h3>Contact Information</h3>
              <p>
                If you have any questions or concerns regarding this Legal
                Notice or the use of API data on the Website, please contact us
                at{' '}
                <a href="mailto:Jzanetti01@outlook.fr">Jzanetti01@outlook.fr</a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Legal;

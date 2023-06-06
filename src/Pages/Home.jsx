import React from 'react';
import Header from '../Components/Header';
import Category from '../Components/Category';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <Category categoryName={'action'} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;

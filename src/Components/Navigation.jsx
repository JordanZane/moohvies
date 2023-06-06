import React from 'react';
import { NavLink } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';

const Navigation = () => {
  return (
    <div className="container-fluid nav-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <nav className="menu">
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <Dropdown>
                    <Dropdown.Toggle id="dropdownMenuButton">
                      Genres
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item as={NavLink} to="/genres/action">
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item as={NavLink} to="/genres/scifi">
                        Sci-Fi
                      </Dropdown.Item>
                      <Dropdown.Item as={NavLink} to="/genres/comedy">
                        Comedy
                      </Dropdown.Item>
                      <Dropdown.Item as={NavLink} to="/genres/drama">
                        Drama
                      </Dropdown.Item>
                      <Dropdown.Item as={NavLink} to="/genres/romance">
                        Romance
                      </Dropdown.Item>
                      <Dropdown.Item as={NavLink} to="/genres/horror">
                        Horror
                      </Dropdown.Item>
                      <Dropdown.Item as={NavLink} to="/genres/thriller">
                        Thriller
                      </Dropdown.Item>
                      <Dropdown.Item as={NavLink} to="/genres/crime">
                        Crime
                      </Dropdown.Item>
                      <Dropdown.Item as={NavLink} to="/genres/mystery">
                        Mystery
                      </Dropdown.Item>
                      <Dropdown.Item as={NavLink} to="/genres/familly">
                        Familly
                      </Dropdown.Item>
                      <Dropdown.Item as={NavLink} to="/genres/familly">
                        Documentary
                      </Dropdown.Item>
                      <Dropdown.Item as={NavLink} to="/genres/western">
                        Western
                      </Dropdown.Item>
                      <Dropdown.Item as={NavLink} to="/genres/animation">
                        Animation
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                <li>
                  <Dropdown>
                    <Dropdown.Toggle id="dropdownMenuButton">
                      Years
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item as={NavLink} to="/years/1970-1979">
                        1970-1979
                      </Dropdown.Item>
                      <Dropdown.Item as={NavLink} to="/years/1980-1989">
                        1980-1989
                      </Dropdown.Item>
                      <Dropdown.Item as={NavLink} to="/years/1990-1999">
                        1990-1999
                      </Dropdown.Item>
                      <Dropdown.Item as={NavLink} to="/years/2000-2009">
                        2000-2009
                      </Dropdown.Item>
                      <Dropdown.Item as={NavLink} to="/years/2010-2019">
                        2010-2019
                      </Dropdown.Item>
                      <Dropdown.Item as={NavLink} to="/years/2020-2022">
                        2020-2022
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

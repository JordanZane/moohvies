import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { useState } from 'react';

const Navigation = () => {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${searchValue}`);
  };

  return (
    <div className="container-fluid nav-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <nav className="menu">
              <ul className="dk-menu">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <Dropdown>
                    <Dropdown.Toggle id="dropdownMenuButton">
                      Genres
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item as={NavLink} to="/genres/Action">
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item as={NavLink} to="/genres/Sci-fi">
                        Sci-Fi
                      </Dropdown.Item>
                      <Dropdown.Item as={NavLink} to="/genres/Comedy">
                        Comedy
                      </Dropdown.Item>
                      <Dropdown.Item as={NavLink} to="/genres/Drama">
                        Drama
                      </Dropdown.Item>
                      <Dropdown.Item as={NavLink} to="/genres/Romance">
                        Romance
                      </Dropdown.Item>
                      <Dropdown.Item as={NavLink} to="/genres/Horror">
                        Horror
                      </Dropdown.Item>
                      <Dropdown.Item as={NavLink} to="/genres/Thriller">
                        Thriller
                      </Dropdown.Item>
                      <Dropdown.Item as={NavLink} to="/genres/Crime">
                        Crime
                      </Dropdown.Item>
                      <Dropdown.Item as={NavLink} to="/genres/Mystery">
                        Mystery
                      </Dropdown.Item>
                      <Dropdown.Item as={NavLink} to="/genres/Familly">
                        Familly
                      </Dropdown.Item>
                      <Dropdown.Item as={NavLink} to="/genres/Documentary">
                        Documentary
                      </Dropdown.Item>
                      <Dropdown.Item as={NavLink} to="/genres/Western">
                        Western
                      </Dropdown.Item>
                      <Dropdown.Item as={NavLink} to="/genres/Animation">
                        Animation
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                <li>
                  <NavLink to="/most-popular">Most popular</NavLink>
                </li>
                <li>
                  <NavLink to="/top-rated">Top rated</NavLink>
                </li>
              </ul>
              <ul className="sm-menu">
                <Dropdown>
                  <Dropdown.Toggle id="dropdownMenuBurger">
                    <i className="fa-solid fa-bars"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <li>
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                      <Dropdown>
                        <Dropdown.Toggle id="dropdownMenuButton">
                          Genres
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item as={NavLink} to="/genres/Action">
                            Action
                          </Dropdown.Item>
                          <Dropdown.Item as={NavLink} to="/genres/Sci-fi">
                            Sci-Fi
                          </Dropdown.Item>
                          <Dropdown.Item as={NavLink} to="/genres/Comedy">
                            Comedy
                          </Dropdown.Item>
                          <Dropdown.Item as={NavLink} to="/genres/Drama">
                            Drama
                          </Dropdown.Item>
                          <Dropdown.Item as={NavLink} to="/genres/Romance">
                            Romance
                          </Dropdown.Item>
                          <Dropdown.Item as={NavLink} to="/genres/Horror">
                            Horror
                          </Dropdown.Item>
                          <Dropdown.Item as={NavLink} to="/genres/Thriller">
                            Thriller
                          </Dropdown.Item>
                          <Dropdown.Item as={NavLink} to="/genres/Crime">
                            Crime
                          </Dropdown.Item>
                          <Dropdown.Item as={NavLink} to="/genres/Mystery">
                            Mystery
                          </Dropdown.Item>
                          <Dropdown.Item as={NavLink} to="/genres/Familly">
                            Familly
                          </Dropdown.Item>
                          <Dropdown.Item as={NavLink} to="/genres/Documentary">
                            Documentary
                          </Dropdown.Item>
                          <Dropdown.Item as={NavLink} to="/genres/Western">
                            Western
                          </Dropdown.Item>
                          <Dropdown.Item as={NavLink} to="/genres/Animation">
                            Animation
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </li>
                    <li>
                      <NavLink to="/most-popular">Most popular</NavLink>
                    </li>
                    <li>
                      <NavLink to="/top-rated">Top rated</NavLink>
                    </li>
                  </Dropdown.Menu>
                </Dropdown>
              </ul>
              <form onSubmit={handleSearch}>
                <button type="submit">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
                <input
                  type="text"
                  placeholder="Search for movie"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
              </form>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

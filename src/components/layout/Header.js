import { Container, Nav, Navbar } from "react-bootstrap";
import { UseAuth } from "../../context/AuthProvider";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
function Header() {
  const [auth, setauth] = UseAuth();

  const handleLogout = () => {
    setauth({
      ...auth,
      user: null,
      token: "",
    });

    localStorage.removeItem("auth");
    toast.success("Logged out Successfully");
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="shadow-lg"
    >
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          🛒 Leo tech
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/Category">
              Category
            </Nav.Link>
            <Nav.Link as={Link} to="/Cart">
              Cart(0)
            </Nav.Link>
            {!auth.user ? (
              <>
                <Nav.Link as={Link} to="/Register">
                  Register
                </Nav.Link>
                <Nav.Link as={Link} to="/Login">
                  Login
                </Nav.Link>
              </>
            ) : (
              <>
                <div className="dropdown">
                  <button
                    className="btn btn-dark dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {auth?.user?.name}
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <Nav.Link
                        className="dropdown-item text-black"
                        as={Link}
                        to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`}                      >
                        Dashbaord
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link
                        onClick={handleLogout}
                        className="dropdown-item text-black"
                        as={Link}
                        to="/Login"
                      >
                        Logout
                      </Nav.Link>
                    </li>
                  </ul>
                </div>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

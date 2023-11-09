import React, { useState } from "react";
import { useScrollPosition } from "../hooks/useScrollPosition";
import useResizeObserver from "../hooks/useResizeObserver";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { mainBody, repos, about, skills, leadership } from "../editable-stuff/config.js";
import { NavLink } from "./home/migration";

const Navigation = React.forwardRef((props, ref) => {
  const [isTop, setIsTop] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navbarMenuRef = React.useRef();
  // const navbarDimensions = (ref.current.offsetTop || navbarMenuRef) ? null : useResizeObserver(navbarMenuRef);
  // const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;

  // useScrollPosition(
  //   ({ prevPos, currPos }) => {
  //     if (!navbarDimensions || !navbarMenuRef || !ref.current.offsetTop) return;
  //     currPos.y + (ref.current.offsetTop != null ? ref.current.offsetTop : 0 )- navbarDimensions.bottom > 5
  //       ? setIsTop(true)
  //       : setIsTop(false);
  //     setScrollPosition(currPos.y);
  //   },
  //   [navBottom]
  // );

  // React.useEffect(() => {
  //   if (!navbarDimensions || !navbarMenuRef) return;
  //   navBottom - scrollPosition >= (ref.current.offsetTop != null ? ref.current.offsetTop : 0 )
  //     ? setIsTop(false)
  //     : setIsTop(true);
  // }, [navbarDimensions, scrollPosition]);

  return (
    <Navbar
      ref={navbarMenuRef}
      className={`px-3 fixed-top  ${!isTop ? "navbar-white" : "navbar-transparent"
        }`}
      expand="lg"
    >
      <Navbar.Brand className="navbar-brand" href={process.env.PUBLIC_URL + "/#home"}>
        {/* {`<${mainBody.firstName} />`} */}

        <img
          className="d-block"
          src={props.logo}
          // alt="First slide"
          width={'80vw'}
          height={'80vh'}
        />


      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-nav mr-auto">

          {repos.show && (

            <NavLink
              href={process.env.PUBLIC_URL + "/#projects"}
            >
              Cabañas
            </NavLink>
          )}

          {leadership.show && (
            <NavLink
              className="nav-item lead"
              href={process.env.PUBLIC_URL + "/#aboutme"}
            >
              Conocenos
            </NavLink>
          )}
          {skills.show && (
            <NavLink
              className="nav-item lead"
              href={process.env.PUBLIC_URL + "/#skills"}
            >
              Comodidades
            </NavLink>
          )}
          <NavLink
            className="nav-item lead"
            href={about.resume}
            target="_blank"
            rel="noreferrer noopener"
          >
            Resume
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});

export default Navigation;

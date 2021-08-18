import React, { useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

const routes = [
  {
    route: "/",
    name: "Portafolio",
  },
  {
    route: "/github",
    name: "Github",
  },
];

const Navbar = () => {
  const routeHook = useRouter();

  return (
    <NavbarS>
      <NavbarContainerS>
        {/* <IndexS>
          <Link href="/">
            <a>Portafolio</a>
          </Link>
        </IndexS> */}
        <LinksS>
          <ul>
            {routes.map((route, i) => {
              const { pathname } = routeHook;
              const active = pathname === route.route;
              return (
                <li key={i}>
                  <Link href={route.route}>
                    <a className={active ? "active" : ""}>{route.name}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </LinksS>
      </NavbarContainerS>
    </NavbarS>
  );
};

export default Navbar;

const NavbarS = styled.div`
  width: 100%;
  padding: 15px;
  display: flex;

  background: var(--primary);
  a {
    color: var(--light);
    :hover {
      color: var(--white);
    }
  }
`;

const NavbarContainerS = styled.div`
  width: var(--spaceCentered);
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const IndexS = styled.div`
  font-size: 20px;
  a {
    color: var(--white);
  }
`;
const LinksS = styled.nav`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  ul {
    display: flex;
    li {
      margin: 0 5px;
      .active {
        color: var(--white);
      }
      a {
        padding: 5px;
      }
    }
  }
`;

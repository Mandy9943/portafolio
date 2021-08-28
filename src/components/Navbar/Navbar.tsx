import React, { useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import { useTranslations } from "next-intl";

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
  const t = useTranslations("Index");

  const { locale, locales, route } = useRouter();
  const otherLocale = locales?.find((cur) => cur !== locale);

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
            {/* {routes.map((route, i) => {
              
              return (
                <li key={i}>
                  <Link href={route.route}>
                    <a className={active ? "active" : ""}>{route.name}</a>
                  </Link>
                </li>
              );
            })} */}

            {locales.map((lang) => {
              const active = lang === locale;
              return (
                <li>
                  <Link href={route} locale={lang}>
                    <a className={active ? "active" : ""}>{lang}</a>
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
  margin-bottom: 20px;

  background: var(--primary);
  a {
    color: var(--soft);
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
      text-transform: uppercase;
      .active {
        color: var(--white);
      }
      a {
        padding: 5px;
      }
    }
  }
`;

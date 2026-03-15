import { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import ReactGA from "react-ga";
import styled, { css } from "styled-components";
import "rsuite/dist/rsuite.min.css";
import styles from "./Navigation.module.css";
import { sharedState } from "../App.jsx";
import LoginModal from "./LoginModal.jsx";

const NavShell = styled.nav`
  z-index: 30;
  position: fixed;
  inset: 0 0 auto 0;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0.75rem 1rem 0;
  pointer-events: none;
`;

const NavBar = styled.div`
  pointer-events: auto;
  width: min(1120px, 100%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.7rem 0.9rem;
  border-radius: 18px;
  background: linear-gradient(180deg, rgba(29, 26, 26, 0.94) 0%, rgba(14, 14, 16, 0.88) 100%);
  border: 1px solid rgba(194, 41, 72, 0.28);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.28);
  backdrop-filter: blur(10px);
`;

const Brand = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

const BrandTitle = styled.span`
  color: #f0ece4;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.08em;
`;

const BrandSub = styled.span`
  color: #9e9e9e;
  font-size: 0.76rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`;

const DesktopMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;

  @media (max-width: 820px) {
    display: none;
  }
`;

const MobileActions = styled.div`
  display: none;
  margin-left: auto;
  align-items: center;
  gap: 0.6rem;

  @media (max-width: 820px) {
    display: flex;
  }
`;

const MenuItem = styled(NavLink)`
  text-decoration: none;
  color: #d7d0c7;
  font-weight: 600;
  letter-spacing: 0.04em;
  padding: 0.72rem 0.95rem;
  border-radius: 12px;
  border: 1px solid transparent;
  background: transparent;
  transition: transform 180ms ease, background 180ms ease, color 180ms ease, border-color 180ms ease, box-shadow 180ms ease;

  &:hover {
    color: #ffffff;
    transform: translateY(-1px);
    background: rgba(194, 41, 72, 0.16);
    border-color: rgba(194, 41, 72, 0.35);
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.05);
  }

  &.active {
    color: #ffffff;
    background: rgba(194, 41, 72, 0.22);
    border-color: rgba(194, 41, 72, 0.48);
    box-shadow: 0 0 0 1px rgba(194,41,72,0.12), inset 0 1px 0 rgba(255,255,255,0.04);
  }
`;

const RightActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-left: auto;

  @media (max-width: 820px) {
    display: none;
  }
`;

const BurgerButton = styled.button`
  position: relative;
  width: 46px;
  height: 46px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  border: 1px solid rgba(194, 41, 72, 0.32);
  background: rgba(194, 41, 72, 0.08);
  cursor: pointer;
  transition: transform 180ms ease, background 180ms ease, border-color 180ms ease;

  &:hover {
    transform: translateY(-1px);
    background: rgba(194, 41, 72, 0.18);
    border-color: rgba(194, 41, 72, 0.46);
  }
`;

const BurgerLine = styled.span`
  position: absolute;
  width: 20px;
  height: 2px;
  border-radius: 999px;
  background: #f0ece4;
  transition: transform 220ms ease, opacity 220ms ease, top 220ms ease;

  &:nth-child(1) {
    top: 15px;
    ${({ $open }) =>
      $open &&
      css`
        top: 22px;
        transform: rotate(45deg);
      `}
  }

  &:nth-child(2) {
    top: 22px;
    ${({ $open }) =>
      $open &&
      css`
        opacity: 0;
        transform: scaleX(0.5);
      `}
  }

  &:nth-child(3) {
    top: 29px;
    ${({ $open }) =>
      $open &&
      css`
        top: 22px;
        transform: rotate(-45deg);
      `}
  }
`;

const MobilePanel = styled.div`
  pointer-events: auto;
  width: min(1120px, 100%);
  margin-top: 0.6rem;
  padding: 0.85rem;
  border-radius: 18px;
  border: 1px solid rgba(194, 41, 72, 0.28);
  background: linear-gradient(180deg, rgba(29, 26, 26, 0.97) 0%, rgba(14, 14, 16, 0.95) 100%);
  box-shadow: 0 16px 34px rgba(0, 0, 0, 0.34);
  backdrop-filter: blur(10px);
  transform-origin: top center;
  animation: menuOpen 220ms ease;

  @keyframes menuOpen {
    from {
      opacity: 0;
      transform: translateY(-8px) scale(0.98);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @media (min-width: 821px) {
    display: none;
  }
`;

const MobileMenuList = styled.div`
  display: grid;
  gap: 0.55rem;
`;

const MobileMenuItem = styled(MenuItem)`
  justify-content: flex-start;
`;

const navItems = [
  ["/", "HOME", "main"],
  ["/mywork", "MY WORK", "mywork"],
  ["/about", "ABOUT ME", "about"],
  ["/contact", "CONTACT", "contact"],
  ["/services", "SERVICES", "services"],
  ["/blogposts", "BLOGS", "blogposts"],
];

export default function Navigation() {
  const { setState } = useContext(sharedState);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 820) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavigate = (action, nextPage) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    ReactGA.event({
      category: "Button",
      action,
    });

    if (nextPage) {
      setState((current) => ({
        ...current,
        currentPage: nextPage,
      }));
    }
  };

  const renderNavItems = (Component = MenuItem) =>
    navItems.map(([to, label, action]) => (
      <Component key={to} to={to} end={to === "/"} onClick={() => handleNavigate(action, to)}>
        {label}
      </Component>
    ));

  return (
    <NavShell className={styles.navContainer}>
      <div className={styles.navStack}>
        <NavBar>
          <Brand>
            <BrandTitle>Jason Morta</BrandTitle>
            <BrandSub>Developer Portfolio <small style={{ fontSize: "0.45rem", opacity: 0.8 }}>v0.6.1</small></BrandSub>
          </Brand>

          <DesktopMenu className={styles.innerNav}>{renderNavItems()}</DesktopMenu>

          <RightActions>
            <LoginModal />
          </RightActions>

          <MobileActions>
            <LoginModal compact />
            <BurgerButton type="button" aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={mobileOpen} onClick={() => setMobileOpen((value) => !value)}>
              <BurgerLine $open={mobileOpen} />
              <BurgerLine $open={mobileOpen} />
              <BurgerLine $open={mobileOpen} />
            </BurgerButton>
          </MobileActions>
        </NavBar>

        {mobileOpen && (
          <MobilePanel>
            <MobileMenuList>{renderNavItems(MobileMenuItem)}</MobileMenuList>
          </MobilePanel>
        )}
      </div>
    </NavShell>
  );
}

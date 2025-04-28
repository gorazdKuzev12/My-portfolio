import React from 'react';
import styled from 'styled-components';
import { Moon, Sun } from 'lucide-react';

type Props = {
  theme: "dark" | "light";
  toggleTheme: () => void;
};

// Styled Components
const NavContainer = styled.nav<{ $theme: "dark" | "light" }>`
  width: 100%;
  height: 110px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: ${props => props.$theme === "dark" ? "#242424" : "#ffffff"};
  font-family: 'Urbanist', sans-serif;

`;

const NavContent = styled.div`
  max-width: 1650px;
  margin: 0 auto;
  padding: 0 1rem;
  
  @media (min-width: 640px) {
    padding: 0 1.5rem;
  }
  
  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 7rem;
`;

const Logo = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 0.05em;
`;

const LogoSpan = styled.span`
  color: #FF4500; // Orange color
`;

const LogoText = styled.span<{ $theme: "dark" | "light" }>`
  color: ${props => props.$theme === "dark" ? "#ffffff" : "#111827"};
`;

const NavItems = styled.div`
  display: none;
  align-items: center;
  gap: 1rem;
  
  @media (min-width: 768px) {
    display: flex;
  }
`;

const NavButton = styled.button<{ $theme: "dark" | "light" }>`
  padding: 0.5rem 1rem;
  font-weight: 500;
  font-size: 1.1rem;
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${props => props.$theme === "dark" ? "#e5e7eb" : "#374151"};
  transition: color 0.2s ease;

  &:hover {
    color: ${props => props.$theme === "dark" ? "#ffffff" : "#111827"};
  }
`;

const ThemeButton = styled.button`
  padding: 0.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #f97316;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavBar: React.FC<Props> = ({ theme, toggleTheme }) => {
  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    sectionElement?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { id: "about-section", label: "About me" },
    { id: "projects-section", label: "Projects" },
    { id: "blog-section", label: "Blog" },
    { id: "contact-section", label: "Contact" }
  ];

  return (
    <NavContainer $theme={theme}>
      <NavContent>
        <FlexContainer>
          {/* Logo */}
          <Logo>
            <LogoSpan>./QZ</LogoSpan>
            <LogoText $theme={theme}> code</LogoText>
          </Logo>

          {/* Navigation Items */}
          <NavItems>
            {navItems.map(({ id, label }) => (
              <NavButton
                key={id}
                onClick={() => scrollToSection(id)}
                $theme={theme}
              >
                {label}
              </NavButton>
            ))}
            
            {/* Theme Toggle */}
            <ThemeButton onClick={toggleTheme}>
              {theme === "dark" ? (
                <Moon size={20} />
              ) : (
                <Sun size={20} />
              )}
            </ThemeButton>
          </NavItems>
        </FlexContainer>
      </NavContent>
    </NavContainer>
  );
};

export default NavBar;
import React from "react";
import styled from "styled-components";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import Cube from "../Cube";

type Props = {
  theme: "dark" | "light";
  toggleTheme: () => void;
};

// Media query breakpoints
const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px'
};

const Container = styled.div<{ $themeMode: "dark" | "light" }>`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  position: relative;
  padding: 1rem;
  background-color: ${({ $themeMode }) =>
    $themeMode === "dark" ? "#1A1A1A" : "#f2f2f2"};

  @media (min-width: ${breakpoints.sm}) {
    padding: 2.5rem;
  }

  @media (min-width: ${breakpoints.md}) {
    padding: 4rem;
  }
`;

const CubesContainer = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
  z-index: 10;

  @media (min-width: ${breakpoints.sm}) {
    position: absolute;
    top: 1.5rem;
    right: 2rem;
    flex-direction: row;
  }
`;

const CubeSpacing = styled.div`
  & + & {
    margin-top: 0.25rem;
  }

  @media (min-width: ${breakpoints.sm}) {
    & + & {
      margin-top: 0;
      margin-left: 0.5rem;
    }
  }
`;

const ContentWrapper = styled.div<{ $themeMode: "dark" | "light" }>`
  text-align: center;
  width: 100%;
  padding: 0 1rem;
  margin-top: 4rem;

  @media (min-width: ${breakpoints.sm}) {
    width: 90%;
    margin-top: 2rem;
    padding: 0;
  }

  @media (min-width: ${breakpoints.md}) {
    width: 85%;
    margin-top: 0;
  }

  @media (min-width: ${breakpoints.lg}) {
    width: 75%;
  }
`;

const SectionTitle = styled.h1`
  margin-top: 1.5rem;
  font-size: 1.25rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #FF4500;

  @media (min-width: ${breakpoints.sm}) {
    font-size: 1.5rem;
    margin-top: 2rem;
  }

  @media (min-width: ${breakpoints.md}) {
    font-size: 2.25rem;
    margin-top: 2.5rem;
  }
`;

const SectionSubtitle = styled.p<{ $themeMode: "dark" | "light" }>`
  margin-top: 1rem;
  font-size: 0.875rem;
  font-weight: 300;
  letter-spacing: 0.05em;
  padding: 0 1rem;

  ${({ $themeMode }) =>
    $themeMode === "dark"
      ? `
      background: linear-gradient(to right, #FF4500, #ffc7aa);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    `
      : `
      color: #848484;
    `}

  @media (min-width: ${breakpoints.sm}) {
    font-size: 1rem;
    margin-top: 1.25rem;
    padding: 0;
  }
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  width: 100%;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (min-width: ${breakpoints.md}) {
    flex-direction: row;
    margin-top: 3rem;
    gap: 3rem;
  }

  @media (min-width: ${breakpoints.lg}) {
    margin-top: 4rem;
    gap: 5rem;
  }
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.5rem;

  @media (min-width: ${breakpoints.sm}) {
    gap: 2rem;
  }

  @media (min-width: ${breakpoints.md}) {
    width: 40%;
    margin-bottom: 6rem;
  }
`;

const ContactBlock = styled.div<{ $themeMode: "dark" | "light" }>`
  display: flex;
  align-items: center;
  padding: 1rem;
  box-shadow: 0 0 10px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
  background-color: ${({ $themeMode }) =>
    $themeMode === "dark" ? "#3B3B3B" : "#ffffff"};

  &:hover {
    background-color: ${({ $themeMode }) =>
      $themeMode === "dark" ? "#4a4a4a" : "#f9f9f9"};
    transform: translateY(-2px);
  }

  .icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 50%;
    
    svg {
      color: #FF4500;
      transition: transform 0.3s ease;
    }
  }

  &:hover .icon-container svg {
    transform: scale(1.1);
  }
`;

const ContactTextWrapper = styled.div<{ $themeMode: "dark" | "light" }>`
  margin-left: 1rem;
  text-align: left;

  @media (min-width: ${breakpoints.sm}) {
    margin-left: 1.5rem;
  }

  h3 {
    font-size: 1rem;
    font-weight: 700;
    color: ${({ $themeMode }) =>
      $themeMode === "dark" ? "#f0f0f0" : "#333"};

    @media (min-width: ${breakpoints.sm}) {
      font-size: 1.125rem;
    }
  }

  a {
    display: block;
    font-size: 0.875rem;
    color: ${({ $themeMode }) =>
      $themeMode === "dark" ? "#f0f0f0" : "#555"};
    text-decoration: none;
    word-break: break-all;

    @media (min-width: ${breakpoints.sm}) {
      font-size: 0.95rem;
    }

    &:hover {
      text-decoration: underline;
      color: #FF4500;
    }
  }
`;

const SecondColumn = styled.div`
  width: 100%;
  
  @media (min-width: ${breakpoints.md}) {
    width: 60%;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: ${breakpoints.sm}) {
    gap: 2rem;
  }

  @media (min-width: ${breakpoints.md}) {
    gap: 2.5rem;
  }
`;

const InputRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: ${breakpoints.sm}) {
    flex-direction: row;
    gap: 1.5rem;
  }
`;

const InputField = styled.input<{ $themeMode: "dark" | "light" }>`
  width: 100%;
  padding: 0.75rem;
  font-size: 0.875rem;
  border: 2px solid ${({ $themeMode }) => ($themeMode === "dark" ? "#d3dce6" : "#fff")};
  background-color: transparent;
  color: ${({ $themeMode }) => ($themeMode === "dark" ? "#f1f1f1" : "#333")};
  transition: all 0.3s ease;

  @media (min-width: ${breakpoints.sm}) {
    padding: 1rem;
    font-size: 1rem;
  }

  &:focus {
    outline: none;
    border-color: #ff8a57;
    box-shadow: 0 0 0 2px rgba(255, 138, 87, 0.2);
  }

  &::placeholder {
    color: #aaa;
  }
`;

const TextArea = styled.textarea<{ $themeMode: "dark" | "light" }>`
  width: 100%;
  padding: 0.75rem;
  font-size: 0.875rem;
  border: 2px solid ${({ $themeMode }) => ($themeMode === "dark" ? "#d3dce6" : "#fff")};
  background-color: transparent;
  color: ${({ $themeMode }) => ($themeMode === "dark" ? "#f1f1f1" : "#333")};
  resize: vertical;
  min-height: 150px;
  transition: all 0.3s ease;

  @media (min-width: ${breakpoints.sm}) {
    padding: 1rem;
    font-size: 1rem;
    min-height: 200px;
  }

  &:focus {
    outline: none;
    border-color: #ff8a57;
    box-shadow: 0 0 0 2px rgba(255, 138, 87, 0.2);
  }

  &::placeholder {
    color: #aaa;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem 1.5rem;
  font-family: "custom", sans-serif;
  font-size: 0.875rem;
  font-weight: bold;
  text-align: center;
  color: #FF4500;
  background-color: transparent;
  border: 2px solid #ff8a57;
  border-radius: 0.5rem;
  transition: all 0.3s ease;

  @media (min-width: ${breakpoints.sm}) {
    width: auto;
    align-self: flex-end;
    padding: 0.75rem 2rem;
    font-size: 1rem;
  }

  &:hover {
    background-color: #FF4500;
    border-color: #FF4500;
    color: white;
    transform: translateY(-2px);
    cursor: pointer;
  }

  &:active {
    transform: translateY(0);
  }
`;

const ContactMe: React.FC<Props> = ({ theme, toggleTheme }) => {
  return (
    <Container id="contact-section" $themeMode={theme}>
      {/* <CubesContainer>
        {[...Array(5)].map((_, index) => (
          <CubeSpacing key={index}>
            <Cube isSelected={index === 3} />
          </CubeSpacing>
        ))}
      </CubesContainer> */}

      <ContentWrapper $themeMode={theme}>
        <div>
          <SectionTitle>CONTACT ME</SectionTitle>
          <SectionSubtitle $themeMode={theme}>
            Let&apos;s start an exciting journey together.
          </SectionSubtitle>
        </div>

        <FlexRow>
          <ColumnWrapper>
            <ContactBlock $themeMode={theme}>
              <div className="icon-container">
                <FiMail size={28} />
              </div>
              <ContactTextWrapper $themeMode={theme}>
                <h3>Email</h3>
                <a href="mailto:gorazd.kuzev10@gmail.com">
                  gorazd.kuzev10@gmail.com
                </a>
              </ContactTextWrapper>
            </ContactBlock>

            <ContactBlock $themeMode={theme}>
              <div className="icon-container">
                <FiGithub size={28} />
              </div>
              <ContactTextWrapper $themeMode={theme}>
                <h3>Github</h3>
                <a href="https://github.com/gorazdkuzev122" target="_blank" rel="noopener noreferrer">
                  gorazdkuzev122
                </a>
              </ContactTextWrapper>
            </ContactBlock>

            <ContactBlock $themeMode={theme}>
              <div className="icon-container">
                <FiLinkedin size={28} />
              </div>
              <ContactTextWrapper $themeMode={theme}>
                <h3>LinkedIn</h3>
                <a href="https://www.linkedin.com/in/gorazd-kuzev" target="_blank" rel="noopener noreferrer">
                  Gorazd Kuzev
                </a>
              </ContactTextWrapper>
            </ContactBlock>
          </ColumnWrapper>

          <SecondColumn>
            <Form action="#" method="post">
              <InputRow>
                <InputField
                  $themeMode={theme}
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />
                <InputField
                  $themeMode={theme}
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
              </InputRow>

              <TextArea
                $themeMode={theme}
                name="message"
                placeholder="Your Message"
                rows={10}
                required
              />
              <SubmitButton type="submit">Send Message</SubmitButton>
            </Form>
          </SecondColumn>
        </FlexRow>
      </ContentWrapper>
    </Container>
  );
};

export default ContactMe;

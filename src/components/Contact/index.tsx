import React from "react";
import styled from "styled-components";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import Cube from "../Cube";

type Props = {
  theme: "dark" | "light";
  toggleTheme: () => void;
};

const Container = styled.div<{ $themeMode: "dark" | "light" }>`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  position: relative;
  padding: 2.5rem; /* Tailwind p-10 = 2.5rem */
  background-color: ${({ $themeMode }) =>
    $themeMode === "dark" ? "#1A1A1A" : "#f2f2f2"}; 
  /* Adjust to your desired dark/light colors */

  @media (min-width: 640px) {
    padding: 4rem; /* Tailwind p-16 = 4rem */
  }
`;

const CubesContainer = styled.div`
  position: absolute;
  top: 1.5rem;   /* Tailwind top-6  (6 * 0.25rem = 1.5rem) */
  right: 2rem;   /* Tailwind right-8 (8 * 0.25rem = 2rem) */
  display: flex;
  flex-direction: column;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const CubeSpacing = styled.div`
  /* This just holds each <Cube> with spacing in column or row */
  & + & {
    margin-top: 0.5rem; /* tailwind space-y-2 in column layout */
  }

  @media (min-width: 640px) {
    & + & {
      margin-top: 0; /* remove vertical spacing in row layout */
      margin-left: 0.5rem; /* tailwind space-x-2 */
    }
  }
`;

const ContentWrapper = styled.div<{ $themeMode: "dark" | "light" }>`
  text-align: center;
  width: 100%;

  /* Tailwind sm:w-3/4: Constrain width on larger screens */
  @media (min-width: 640px) {
    width: 75%;
  }

  margin-top: 1.5rem; /* Tailwind mt-6 */
  @media (min-width: 640px) {
    margin-top: 0; /* sm:mt-0 */
  }
`;

const SectionTitle = styled.h1`
  margin-top: 2.5rem; /* tailwind mt-10 */
  font-size: 1.5rem;  /* tailwind text-2xl, can adjust if you like */
  @media (min-width: 640px) {
    font-size: 2.25rem; /* sm:text-4xl -> 2.25rem */
  }
  color: #FF4500;      /* your text-light-orange or similar */
  letter-spacing: 0.1em; 
  text-transform: uppercase;
`;

const SectionSubtitle = styled.p<{ $themeMode: "dark" | "light" }>`
  margin-top: 1.25rem; /* tailwind mt-5 */
  font-size: 1rem;     /* tailwind text-base */
  font-weight: 300;    /* tailwind font-light */
  letter-spacing: 0.05em;
  ${({ $themeMode }) =>
    $themeMode === "dark"
      ? `
      background: linear-gradient(to right, #FF4500, #ffc7aa);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    `
      : `
      color: #848484; /* text-gray-menu or similar */
    `}
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.5rem; /* tailwind sm:mt-20 -> For smaller screens, we just adapt below */
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-right: 5rem; /* sm:mt-20 is actually 5rem in tailwind */


  @media (min-width: 640px) {
    flex-direction: row;
    margin-right: 5rem; /* sm:mt-20 is actually 5rem in tailwind */
  }
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 5rem;
  margin-bottom: 6rem;
  /* Match Tailwind spacing (space-y-8 or space-y-14) with children */
  & > * + * {
    margin-top: 2rem; /* tailwind space-y-8 = 2rem. If you want space-y-14 ~ 3.5rem, adjust accordingly */
  }

  @media (min-width: 640px) {
    & > * + * {
      margin-top: 3.5rem; /* tailwind sm:space-y-14 = 3.5rem if you prefer that bigger gap */
    }
  }
`;

const ContactBlock = styled.div<{ $themeMode: "dark" | "light" }>`
  display: flex;
  align-items: center;
  padding: 1.25rem; /* tailwind p-5 = 1.25rem */
  box-shadow: 0 0 10px rgba(0,0,0,0.08);
  transition: background-color 0.3s ease;
  background-color: ${({ $themeMode }) =>
    $themeMode === "dark" ? "#3B3B3B" : "#ffffff"}; 
  border-radius: 0.25rem; /* optional if you want a small radius */

  /* For the group-hover logic from Tailwind, you can do a simple hover style: */
  &:hover {
    background-color: ${({ $themeMode }) =>
      $themeMode === "dark" ? "#4a4a4a" : "#f9f9f9"};
  }

  & + & {
    margin-top: 2rem; /* replicate space-y-4 or 8 if you want more spacing */
  }

  svg {
    color: #FF4500;
  }

  /* internal icon container could be styled separately if needed */
  .icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem; 
    border-radius: 50%;
  }
`;

const ContactTextWrapper = styled.div<{ $themeMode: "dark" | "light" }>`
  margin-left: 1.5rem; /* tailwind space-x-6 => 1.5rem left of the icon */
  text-align: left;

  h3 {
    font-size: 1.125rem; /* tailwind text-lg => 1.125rem */
    font-weight: 700; 
    color: ${({ $themeMode }) =>
      $themeMode === "dark" ? "#f0f0f0" : "#333"};
  }

  a {
    display: block;
    font-size: 0.95rem; 
    color: ${({ $themeMode }) =>
      $themeMode === "dark" ? "#f0f0f0" : "#555"};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const SecondColumn = styled.div`
  /* For tailwind "space-y-8 mt-8 sm:mt-0 sm:space-y-10" 
     we can replicate with margin-top for entire column. */
  margin-top: 2rem; /* tailwind mt-8 => 2rem */

  @media (min-width: 640px) {
    margin-top: 0; /* sm:mt-0 */
  }

  display: flex;
  flex-direction: column;
  & > * + * {
    margin-top: 2rem; /* space-y-8 => 2rem or space-y-10 => 2.5rem */
  }
`;

const Form = styled.form`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  & > * + * {
    margin-top: 2.5rem; /* replicate space-y-10 => 2.5rem */
  }
`;

const InputRow = styled.div`
  display: flex;
  flex-direction: column;
  & > * + * {
    margin-top: 1.5rem; /* replicate space-y-6 => 1.5rem */
  }

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;

    & > * + * {
      margin-top: 0;
      margin-left: 1rem; /* replicate sm:space-x-4 => 1rem (or 1.5rem for space-x-6) */
    }
  }
`;

const InputField = styled.input<{ $themeMode: "dark" | "light" }>`
  flex: 1;
  padding: 1rem;       /* tailwind py-4 px-4 */
  font-size: 1rem;     /* tailwind text-lg ~ 1.125rem, adjust as needed */
  border-radius: 0.25rem;
  border: 2px solid
    ${({ $themeMode }) => ($themeMode === "dark" ? "#d3dce6" : "#fff")};
  background-color: transparent;
  color: ${({ $themeMode }) => ($themeMode === "dark" ? "#f1f1f1" : "#333")};

  &:focus {
    outline: none;
    border-color: #ff8a57; 
    box-shadow: 0 0 0 2px #ff8a57;
  }

  &::placeholder {
    color: #aaa;
  }
`;

const TextArea = styled.textarea<{ $themeMode: "dark" | "light" }>`
  width: 100%;
  padding: 1rem;
  font-size: 1rem; 
  border-radius: 0.25rem;
  border: 2px solid
    ${({ $themeMode }) => ($themeMode === "dark" ? "#d3dce6" : "#fff")};
  background-color: transparent;
  color: ${({ $themeMode }) => ($themeMode === "dark" ? "#f1f1f1" : "#333")};

  &:focus {
    outline: none;
    border-color: #ff8a57; 
    box-shadow: 0 0 0 2px #ff8a57;
  }

  &::placeholder {
    color: #aaa;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem 2rem;
  font-family: "custom", sans-serif; /* from your Tailwind font-custom */
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  color: #FF4500;
  background-color: transparent;
  border: 2px solid #ff8a57;
  border-radius: 0.25rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: #ff693b;
    color: #ff693b;
    cursor: pointer;
  }
`;

const ContactMe: React.FC<Props> = ({ theme, toggleTheme }) => {
  return (
    <Container id="contact-section" $themeMode={theme}>
      {/* Cubes in absolute top-right */}
      <CubesContainer>
        {[...Array(5)].map((_, index) => (
          <CubeSpacing key={index}>
            <Cube isSelected={index === 3} />
          </CubeSpacing>
        ))}
      </CubesContainer>

      <ContentWrapper $themeMode={theme}>
        <div>
          <SectionTitle>CONTACT ME</SectionTitle>
          <SectionSubtitle $themeMode={theme}>
            Let&apos;s start an exciting journey together.
          </SectionSubtitle>
        </div>

        <FlexRow>
          {/* Left Column: Email, GitHub, LinkedIn */}
          <ColumnWrapper>
            <ContactBlock $themeMode={theme}>
              <div className="icon-container">
                <FiMail size={32} />
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
                <FiGithub size={32} />
              </div>
              <ContactTextWrapper $themeMode={theme}>
                <h3>Github</h3>
                <a href="https://github.com/gorazdkuzev122">gorazdkuzev122</a>
              </ContactTextWrapper>
            </ContactBlock>

            <ContactBlock $themeMode={theme}>
              <div className="icon-container">
                <FiLinkedin size={32} />
              </div>
              <ContactTextWrapper $themeMode={theme}>
                <h3>LinkedIn</h3>
                <a href="https://www.linkedin.com/in/gorazd-kuzev">
                  Gorazd Kuzev
                </a>
              </ContactTextWrapper>
            </ContactBlock>
          </ColumnWrapper>

          {/* Right Column: Contact Form */}
          <SecondColumn>
            <Form action="#" method="post">
              <InputRow>
                <InputField
                  $themeMode={theme}
                  type="text"
                  name="name"
                  placeholder="Your Name"
                />
                <InputField
                  $themeMode={theme}
                  type="email"
                  name="email"
                  placeholder="Your Email"
                />
              </InputRow>

              <TextArea
                $themeMode={theme}
                name="message"
                placeholder="Your Message"
                rows={10}
              />
              <SubmitButton type="submit">Send</SubmitButton>
            </Form>
          </SecondColumn>
        </FlexRow>
      </ContentWrapper>
    </Container>
  );
};

export default ContactMe;

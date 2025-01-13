import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { AiOutlineClose, AiFillCheckCircle } from "react-icons/ai";
import { IoArrowForward } from "react-icons/io5";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideIn = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  animation: ${fadeIn} 0.3s ease-out;
`;

const Modal = styled.div`
  background: linear-gradient(145deg, #2c2c2c, #242424);
  max-width: 1200px;
  width: 100%;
  height: 85vh;
  display: flex;
  border-radius: 16px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  animation: ${slideIn} 0.4s ease-out;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    max-height: 90vh;
  }
`;

const CloseButton = styled(AiOutlineClose)`
  position: absolute;
  top: 20px;
  right: 20px;
  color: #fff;
  font-size: 28px;
  cursor: pointer;
  padding: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 69, 0, 0.2);
    color: #ff4500;
    transform: rotate(90deg);
  }
`;

const LeftSection = styled.div`
  flex: 1;
  background: linear-gradient(145deg, #393939, #2d2d2d);
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 400px;
`;

const shine = keyframes`
  0% {
    background-position: -100% 0;
  }
  100% {
    background-position: 100% 0;
  }
`;

const FlipWrapper = styled.div`
  perspective: 1500px;
  width: 500px;
  height: 380px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    inset: -10px;
    
    background-size: 200% 100%;
    animation: ${shine} 4s linear infinite;
    pointer-events: none;
    border-radius: 16px;
  }
`;

const flipAnimation = keyframes`
  0% {
    transform: rotateY(0);
  }
  100% {
    transform: rotateY(180deg);
  }
`;

const unflipAnimation = keyframes`
  0% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(0);
  }
`;

const FlipCard = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: none;
  border-radius: 12px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);

  &.flipping {
    animation: ${flipAnimation} 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }

  &.unflipping {
    animation: ${unflipAnimation} 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }
`;

const FlipFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  overflow: hidden;
  background: #2c2c2c;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom right,
      rgba(255, 69, 0, 0.1),
      transparent,
      rgba(255, 69, 0, 0.05)
    );
    z-index: 1;
    pointer-events: none;
  }
`;

const FlipFront = styled(FlipFace)`
  transform: rotateY(0);
`;

const FlipBack = styled(FlipFace)`
  transform: rotateY(180deg);
`;

const FlipImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

const NextButton = styled.button`
  position: absolute;
  top: 50%;
  right: -2rem;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  color: #fff;
  background: linear-gradient(45deg, #ff4500, #ff6b3d);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(255, 69, 0, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 10;

  &:hover {
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 8px 25px rgba(255, 69, 0, 0.4);
  }

  &:active {
    transform: translateY(-50%) scale(0.95);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  svg {
    font-size: 24px;
    transition: transform 0.3s ease;
  }

  &:hover:not(:disabled) svg {
    transform: translateX(3px);
  }
`;

const ProgressContainer = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 10;
`;

const ProgressDot = styled.div<{ active: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${props => props.active ? '#ff4500' : 'rgba(255, 255, 255, 0.3)'};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
    background: ${props => props.active ? '#ff4500' : 'rgba(255, 255, 255, 0.5)'};
  }
`;

const RightSection = styled.div`
  flex: 1;
  padding: 3rem;
  background: linear-gradient(170deg, #1e1e1e, #242424);
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #e4e4e4;
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  background: linear-gradient(120deg, #ff4500, #ff7844);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1.5rem;
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: #dedede;
  
  strong {
    color: #ff4500;
    font-weight: 600;
  }
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin: 2rem 0;
`;

const TechItem = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 0.6rem 1.2rem;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    color: #10b981;
  }

  &:hover {
    background: rgba(255, 69, 0, 0.1);
    border-color: rgba(255, 69, 0, 0.3);
    transform: translateY(-2px);
  }
`;

const ViewButton = styled.a`
  display: inline-block;
  background: none;
  border: 1px solid #ff4500;
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  padding: 0.75rem 1.5rem;
  text-align: center;
  transition: background 0.3s ease;
  font-weight: bold;

  &:hover {
    background-color: #393939;
  }
`;

interface ProjectProps {
  title: string;
  images: string[];
  technologies: string[];
  description?: string;
  features?: string[];
  projectUrl?: string;
  setSelectedProject: (project: any) => void;
  setShowSelectedProject: (show: boolean) => void;
}

const Project: React.FC<ProjectProps> = ({
  title,
  images,
  technologies,
  description = "Using playful and pastel colors for a joyful and intuitive design.",
  features = ["Interactive 3D product displays", "Easy navigation", "Responsive design"],
  projectUrl = "https://your-link.com",
  setSelectedProject,
  setShowSelectedProject,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<'flipping' | 'unflipping'>('flipping');

  const handleNext = () => {
    if (!isFlipping) {
      setIsFlipping(true);
      setFlipDirection('flipping');
    }
  };

  const handleTransitionEnd = () => {
    if (isFlipping) {
      if (flipDirection === 'flipping') {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setFlipDirection('unflipping');
      } else {
        setIsFlipping(false);
      }
    }
  };

  const handleClose = () => {
    setSelectedProject(null);
    setShowSelectedProject(false);
  };

  return (
    <Overlay onClick={handleClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={handleClose} />

        <LeftSection>
          <FlipWrapper>
            <FlipCard
              className={isFlipping ? flipDirection : ''}
              onAnimationEnd={handleTransitionEnd}
            >
              <FlipFront>
                <FlipImage 
                  src={images[currentIndex]} 
                  alt={`Project view ${currentIndex + 1}`} 
                />
              </FlipFront>
              <FlipBack>
                <FlipImage
                  src={images[(currentIndex + 1) % images.length]}
                  alt={`Project view ${((currentIndex + 1) % images.length) + 1}`}
                />
              </FlipBack>
            </FlipCard>

            <NextButton onClick={handleNext} disabled={isFlipping}>
              <IoArrowForward />
            </NextButton>

            <ProgressContainer>
              {images.map((_, index) => (
                <ProgressDot
                  key={index}
                  active={index === currentIndex}
                />
              ))}
            </ProgressContainer>
          </FlipWrapper>
        </LeftSection>

        <RightSection>
          <Title>{title}</Title>
          <Paragraph>
            <strong>Design Philosophy:</strong> {description}
          </Paragraph>
          <Paragraph>
            <strong>Features:</strong> {features.join(", ")}.
          </Paragraph>
          <TechList>
            {technologies.map((tech, index) => (
              <TechItem key={index}>
                <AiFillCheckCircle />
                {tech}
              </TechItem>
            ))}
          </TechList>
          <ViewButton
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </ViewButton>
        </RightSection>
      </Modal>
    </Overlay>
  );
};

export default Project;
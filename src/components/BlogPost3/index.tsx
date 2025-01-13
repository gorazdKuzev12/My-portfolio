import React, { useCallback } from "react";
import styled from "styled-components";
import {
  FaArrowLeft,
  FaCopy,
  FaDatabase,
  FaPlay,
  FaTerminal,
  FaTools,
} from "react-icons/fa";
import { MdSecurity } from "react-icons/md";

const Container = styled.div<{ theme: string }>`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 4rem 2rem;
  background: ${({ theme }) =>
    theme === "dark"
      ? "#121212"
      : "#f8fafc"};
`;

const ContentWrapper = styled.div<{ theme: string }>`
  width: 100%;
  max-width: 800px;
  background: ${({ theme }) =>
    theme === "dark" ? "#1a1a1a" : "#ffffff"};
  border-radius: 8px;
  padding: 3rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  position: relative;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const NavigationHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${({ theme }) =>
    theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"};
`;

const BackButton = styled(FaArrowLeft)<{ theme: string }>`
  font-size: 20px;
  cursor: pointer;
  color: ${({ theme }) => (theme === "dark" ? "#9ca3af" : "#64748b")};
  margin-right: 1.5rem;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => (theme === "dark" ? "#e2e8f0" : "#1e293b")};
  }
`;

const HeaderContent = styled.div`
  flex: 1;
`;

const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  color: ${({ theme }) => (theme === "dark" ? "#9ca3af" : "#64748b")};
`;

const Title = styled.h1<{ theme: string }>`
  font-size: 2rem;
  font-weight: 600;
  color: ${({ theme }) => (theme === "dark" ? "#f3f4f6" : "#1e293b")};
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const SectionTitle = styled.h2<{ theme: string }>`
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => (theme === "dark" ? "#f3f4f6" : "#1e293b")};
  display: flex;
  align-items: center;
  gap: 0.75rem;

  svg {
    color: ${({ theme }) => (theme === "dark" ? "#60a5fa" : "#3b82f6")};
  }
`;

const Text = styled.p<{ theme: string }>`
  font-size: 1rem;
  line-height: 1.75;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => (theme === "dark" ? "#d1d5db" : "#4b5563")};

  strong {
    color: ${({ theme }) => (theme === "dark" ? "#f3f4f6" : "#1e293b")};
    font-weight: 600;
  }
`;

const CommandBox = styled.div<{ theme: string }>`
  background: ${({ theme }) =>
    theme === "dark" ? "#27272a" : "#f8fafc"};
  padding: 1.5rem;
  margin: 1.5rem 0;
  border-radius: 6px;
  border: 1px solid ${({ theme }) =>
    theme === "dark" ? "#3f3f46" : "#e2e8f0"};
`;

const CommandHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
`;

const IconWrapper = styled.div<{ theme: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 6px;
  background: ${({ theme }) =>
    theme === "dark" ? "#3f3f46" : "#e2e8f0"};

  svg {
    color: ${({ theme }) => (theme === "dark" ? "#60a5fa" : "#3b82f6")};
    font-size: 1rem;
  }
`;

const CommandTitle = styled.span<{ theme: string }>`
  font-weight: 600;
  color: ${({ theme }) => (theme === "dark" ? "#f3f4f6" : "#1e293b")};
`;

const CodeBlock = styled.div<{ theme: string }>`
  background: ${({ theme }) =>
    theme === "dark" ? "#18181b" : "#f1f5f9"};
  padding: 1rem;
  border-radius: 4px;
  font-family: 'Menlo', monospace;
  font-size: 0.875rem;
  color: ${({ theme }) => (theme === "dark" ? "#d1d5db" : "#334155")};
  overflow-x: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CopyButton = styled(FaCopy)<{ theme: string }>`
  cursor: pointer;
  color: ${({ theme }) => (theme === "dark" ? "#60a5fa" : "#3b82f6")};
  margin-left: 1rem;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`;

type BlogPost3Props = {
  onHide: () => void;
  theme: "dark" | "light";
};

const BlogPost3: React.FC<BlogPost3Props> = ({ onHide, theme }) => {
  const command1 = "pg_dump -h localhost -U your_username your_database_name > backup.sql";
  const command2 = "pg_dump -h localhost -U your_username -W your_database_name > backup.sql";

  const copyToClipboard = useCallback((cmd: string) => {
    navigator.clipboard.writeText(cmd).then(
      () => alert("Command copied to clipboard!"),
      (err) => alert("Failed to copy text: " + err)
    );
  }, []);

  return (
    <Container theme={theme}>
      <ContentWrapper theme={theme}>
        <NavigationHeader>
          <BackButton theme={theme} onClick={onHide} />
          <HeaderContent>
            <MetaInfo>
              <FaDatabase /> Database Tutorial • 8 min read
            </MetaInfo>
            <Title theme={theme}>
              Mastering PostgreSQL: A Personal Journey through Installation and Configuration
            </Title>
          </HeaderContent>
        </NavigationHeader>

        <Text theme={theme}>
          Embarking on the journey of mastering PostgreSQL can seem daunting at first. 
          It is a powerful, robust database system that is widely respected for its 
          reliability and comprehensive features. In this post, I'll walk you through 
          my own experiences with installing PostgreSQL, tackling the notorious 
          PGPASSWORD challenge on Windows, and making my first strides with PgAdmin.
        </Text>

        <SectionTitle theme={theme}>
          <FaTools />
          Installing PostgreSQL
        </SectionTitle>
        <Text theme={theme}>
          When I decided to dive into PostgreSQL, my first step was to install it 
          on my system. Here's the command I used to create my first database backup:
        </Text>
        <CommandBox theme={theme}>
          <CommandHeader>
            <IconWrapper theme={theme}>
              <FaTerminal />
            </IconWrapper>
            <CommandTitle theme={theme}>Backup Command</CommandTitle>
          </CommandHeader>
          <CodeBlock theme={theme}>
            <code>{command1}</code>
            <CopyButton 
              theme={theme} 
              onClick={() => copyToClipboard(command1)}
              title="Copy to clipboard"
            />
          </CodeBlock>
        </CommandBox>

        <SectionTitle theme={theme}>
          <MdSecurity />
          Facing the PGPASSWORD Challenge
        </SectionTitle>
        <Text theme={theme}>
          Here's where things got a bit tricky. On Windows, setting up the
          credentials required a specific approach. Here's the command that worked for me:
        </Text>
        <CommandBox theme={theme}>
          <CommandHeader>
            <IconWrapper theme={theme}>
              <FaTerminal />
            </IconWrapper>
            <CommandTitle theme={theme}>Password Protected Backup</CommandTitle>
          </CommandHeader>
          <CodeBlock theme={theme}>
            <code>{command2}</code>
            <CopyButton 
              theme={theme} 
              onClick={() => copyToClipboard(command2)}
              title="Copy to clipboard"
            />
          </CodeBlock>
        </CommandBox>

        <SectionTitle theme={theme}>
          <FaPlay />
          Getting Started with PgAdmin
        </SectionTitle>
        <Text theme={theme}>
          PgAdmin is a fantastic tool that comes with PostgreSQL, offering a graphical 
          interface to manage your databases more intuitively. I started by opening 
          PgAdmin, which was installed alongside PostgreSQL. In the browser pane, I set 
          up a new server connection by entering the necessary connection details such 
          as host, database, and username.
        </Text>
        <Text theme={theme}>
          Tackling PostgreSQL on Windows presented its unique challenges, particularly 
          around managing passwords securely. However, the sense of accomplishment when 
          everything starts working as intended is incredibly rewarding. With PgAdmin by 
          my side and a reliable backup process in place using pg_dump, I feel well-equipped 
          on my database management journey. I hope my experiences help you as you set up 
          your own PostgreSQL environment. Dive in, and do not be afraid to tackle the 
          challenges head-on—it's all part of becoming a master at managing your data.
        </Text>
      </ContentWrapper>
    </Container>
  );
};

export default BlogPost3;
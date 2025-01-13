import React from "react";
import styled from "styled-components";
import {
  FaArrowLeft,
  FaDatabase,
  FaTools,
  FaTerminal,
  FaPlay,
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

const HighlightBox = styled.div<{ theme: string }>`
  background: ${({ theme }) =>
    theme === "dark" ? "#27272a" : "#f8fafc"};
  padding: 1.5rem;
  margin: 1.5rem 0;
  border-radius: 6px;
  border: 1px solid ${({ theme }) =>
    theme === "dark" ? "#3f3f46" : "#e2e8f0"};
`;

const ExampleHeader = styled.div`
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

const ExampleTitle = styled.span<{ theme: string }>`
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
`;

const BlogPost1 = ({
  onHide,
  theme,
}: {
  onHide: () => void;
  theme: "dark" | "light";
}) => {
  return (
    <Container theme={theme}>
      <ContentWrapper theme={theme}>
        <NavigationHeader>
          <BackButton theme={theme} onClick={onHide} />
          <HeaderContent>
            <MetaInfo>
              <FaDatabase /> Technical Guide • 10 min read
            </MetaInfo>
            <Title theme={theme}>
              Navigating and Paginating with Next.js 14
            </Title>
          </HeaderContent>
        </NavigationHeader>

        <Text theme={theme}>
          Next.js 14 introduces several powerful features that can significantly
          enhance your development workflow. This guide covers practical solutions
          for handling search parameters, dynamic routing, server components, and
          implementing pagination with filters.
        </Text>

        <SectionTitle theme={theme}>
          <FaTools />
          Accessing Search Params and Params
        </SectionTitle>
        <Text theme={theme}>
          <strong>Problem:</strong> Dynamically fetching and filtering data
          based on URL parameters and search parameters can be tricky.
          <br />
          <strong>Solution:</strong> Next.js provides robust support for
          accessing URL parameters (params) and search parameters
          (searchParams). By leveraging these, you can dynamically fetch and
          filter content.
        </Text>
        <HighlightBox theme={theme}>
          <ExampleHeader>
            <IconWrapper theme={theme}>
              <FaTerminal />
            </IconWrapper>
            <ExampleTitle theme={theme}>Code Example</ExampleTitle>
          </ExampleHeader>
          <CodeBlock theme={theme}>
            {`// pages/[category]/page.tsx
export default function Page({ params, searchParams }) {
  const { category } = params;
  const { sort, filter } = searchParams;
  // Use these parameters for data fetching
}`}
          </CodeBlock>
        </HighlightBox>

        <SectionTitle theme={theme}>
          <MdSecurity />
          Filtering Data with Search Params
        </SectionTitle>
        <Text theme={theme}>
          <strong>Problem:</strong> Integrating search parameters for filtering
          content without overcomplicating the code.
          <br />
          <strong>Solution:</strong> By conditionally checking for
          searchParams.category, you can create a filter that applies only when
          a category is selected.
        </Text>
        <HighlightBox theme={theme}>
          <ExampleHeader>
            <IconWrapper theme={theme}>
              <FaTerminal />
            </IconWrapper>
            <ExampleTitle theme={theme}>Implementation Example</ExampleTitle>
          </ExampleHeader>
          <CodeBlock theme={theme}>
            {`const filter = searchParams.category
  ? { category: searchParams.category }
  : {};
const items = await prisma.items.findMany({ where: filter });`}
          </CodeBlock>
        </HighlightBox>

        <SectionTitle theme={theme}>
          <FaPlay />
          Implementing Pagination in Server Components
        </SectionTitle>
        <Text theme={theme}>
          <strong>Problem:</strong> Efficiently handling large datasets with
          pagination on the server to minimize client load.
          <br />
          <strong>Solution:</strong> Calculate pagination on the server,
          fetching only the required data for each page, and determine the total
          number of pages.
        </Text>
        <HighlightBox theme={theme}>
          <ExampleHeader>
            <IconWrapper theme={theme}>
              <FaTerminal />
            </IconWrapper>
            <ExampleTitle theme={theme}>Pagination Example</ExampleTitle>
          </ExampleHeader>
          <CodeBlock theme={theme}>
            {`const ITEMS_PER_PAGE = 10;
const skip = (page - 1) * ITEMS_PER_PAGE;
const items = await prisma.items.findMany({
  take: ITEMS_PER_PAGE,
  skip,
  where: filter
});`}
          </CodeBlock>
        </HighlightBox>
      </ContentWrapper>
    </Container>
  );
};

export default BlogPost1;
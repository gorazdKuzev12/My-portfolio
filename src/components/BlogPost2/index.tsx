import React from "react";
import styled from "styled-components";
import {
  FaArrowLeft,
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
  color: ${({ theme }) => (theme === "dark" ? "#f3f4f6" : "#1e293b")};
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 2.5rem;
  margin-bottom: 1rem;

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

const List = styled.ul<{ theme: string }>`
  list-style-type: none;
  margin: 1rem 0;
  padding: 0;

  li {
    color: ${({ theme }) => (theme === "dark" ? "#d1d5db" : "#4b5563")};
    padding: 0.5rem 0;
    padding-left: 1.5rem;
    position: relative;

    &:before {
      content: "•";
      color: ${({ theme }) => (theme === "dark" ? "#60a5fa" : "#3b82f6")};
      position: absolute;
      left: 0;
      font-weight: bold;
    }
  }
`;

const CodeBlockWrapper = styled.div`
  margin: 1.5rem 0;
`;

const CodeBlockHeader = styled.div<{ theme: string }>`
  background: ${({ theme }) =>
    theme === "dark" ? "#27272a" : "#f1f5f9"};
  padding: 0.75rem 1rem;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border: 1px solid ${({ theme }) =>
    theme === "dark" ? "#3f3f46" : "#e2e8f0"};
  border-bottom: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const CodeBlockTitle = styled.span<{ theme: string }>`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => (theme === "dark" ? "#e2e8f0" : "#1e293b")};
`;

const CodeBlock = styled.div<{ theme: string }>`
  background: ${({ theme }) =>
    theme === "dark" ? "#18181b" : "#f8fafc"};
  padding: 1rem;
  border-radius: 0 0 6px 6px;
  border: 1px solid ${({ theme }) =>
    theme === "dark" ? "#3f3f46" : "#e2e8f0"};
  overflow-x: auto;

  pre {
    margin: 0;
    font-size: 0.875rem;
    line-height: 1.7;
    color: ${({ theme }) => (theme === "dark" ? "#e2e8f0" : "#334155")};
  }
`;

const BlogPost2 = ({
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
              <FaDatabase /> Technical Guide • 8 min read
            </MetaInfo>
            <Title theme={theme}>
              Handling Localization and Dynamic Pathnames in Next.js 14
            </Title>
          </HeaderContent>
        </NavigationHeader>

        <Text theme={theme}>
          Managing multiple languages and localized pathnames in a Next.js
          application can be a challenging task. Different languages often
          require unique URL structures, and dynamic content can complicate
          matters further. This guide explains how to dynamically generate
          localized paths for multilingual support in Next.js.
        </Text>

        <SectionTitle theme={theme}>
          <FaTools />
          Problem: Localized Pathnames for Dynamic Content
        </SectionTitle>
        <Text theme={theme}>
          Supporting multiple languages with unique path structures requires
          translating both static and dynamic parts of a URL. For example:
        </Text>
        <List theme={theme}>
          <li>English: en/magazine/bag</li>
          <li>German: de/magazin/rugzag</li>
        </List>

        <SectionTitle theme={theme}>
          <MdSecurity />
          Solution: Generating Localized Paths Dynamically
        </SectionTitle>
        <Text theme={theme}>
          I created a script to fetch data from a CMS (Directus) and generate
          the necessary path configurations for each language, ensuring both
          static and dynamic segments are localized.
        </Text>

        <SectionTitle theme={theme}>
          <FaPlay />
          Step-by-Step Implementation
        </SectionTitle>
        
        <Text theme={theme}>
          <strong>1. Define Languages and Their Path Structures</strong>
        </Text>
        <CodeBlockWrapper>
          <CodeBlockHeader theme={theme}>
            <FaTerminal />
            <CodeBlockTitle theme={theme}>Language Configuration</CodeBlockTitle>
          </CodeBlockHeader>
          <CodeBlock theme={theme}>
            <pre>
              {`const languages = {
  en: { name: "English", subFolder: "en", magazine: "magazine" },
  de: { name: "Deutsch", subFolder: "de", magazine: "magazin" },
};`}
            </pre>
          </CodeBlock>
        </CodeBlockWrapper>

        <Text theme={theme}>
          <strong>2. Fetch Blog Posts with Translations</strong>
        </Text>
        <CodeBlockWrapper>
          <CodeBlockHeader theme={theme}>
            <FaTerminal />
            <CodeBlockTitle theme={theme}>GraphQL Query</CodeBlockTitle>
          </CodeBlockHeader>
          <CodeBlock theme={theme}>
            <pre>
              {`const GET_BLOG_POSTS = \`
query getBlogPosts {
  blog_posts {
    slug
    category {
      name
    }
    translations {
      language_code
      slug
    }
  }
}\`;`}
            </pre>
          </CodeBlock>
        </CodeBlockWrapper>

        <Text theme={theme}>
          <strong>3. Generate Localized Paths</strong>
        </Text>
        <CodeBlockWrapper>
          <CodeBlockHeader theme={theme}>
            <FaTerminal />
            <CodeBlockTitle theme={theme}>Path Generation Function</CodeBlockTitle>
          </CodeBlockHeader>
          <CodeBlock theme={theme}>
            <pre>
              {`async function generateMagazinePaths() {
  const blogPosts = await fetchBlogPosts();
  const paths = {};

  blogPosts.forEach(({ slug, translations }) => {
    Object.keys(languages).forEach((langKey) => {
      const magazineSlug = languages[langKey].magazine;
      const languageSubFolder = languages[langKey].subFolder;
      let localizedSlug = slug;

      if (langKey !== "en") {
        const translation = translations.find(
          (t) => t.language_code === langKey
        );
        if (translation && translation.slug) {
          localizedSlug = translation.slug;
        }
      }

      paths[\`/magazine/\${slug}\`][languageSubFolder] = 
        \`/\${magazineSlug}/\${localizedSlug}\`;
    });
  });

  fs.writeFileSync(
    "magazinePaths.json", 
    JSON.stringify(paths, null, 2)
  );
}`}
            </pre>
          </CodeBlock>
        </CodeBlockWrapper>

        <Text theme={theme}>
          By dynamically generating localized paths, we ensure that multilingual
          applications maintain consistent and intuitive URL structures across
          different languages, significantly improving the user experience and
          SEO performance.
        </Text>
      </ContentWrapper>
    </Container>
  );
};

export default BlogPost2;
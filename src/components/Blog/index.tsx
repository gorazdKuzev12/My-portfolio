import React, { useState } from "react";
import styled from "styled-components";
import Cube from "../Cube";
import BlogPost1 from "../BlogPost1";
import BlogPost2 from "../BlogPost2";
import BlogPost3 from "../BlogPost3";

const Container = styled.div<{ theme: string }>`
  min-height: 100vh;
  background: ${({ theme }) =>
    theme === "dark" ? "#121212" : "#ffffff"};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  position: relative;
  
  @media (min-width: 640px) {
    padding: 2rem;
  }
`;

const CubeContainer = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (min-width: 640px) {
    flex-direction: row;
    gap: 0.5rem;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  text-align: center;
  
  @media (min-width: 640px) {
    width: 75%;
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin-top: 2.5rem;
  color: #ff4500;
  font-family: 'Space Grotesk', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  position: relative;
  
  @media (min-width: 640px) {
    font-size: 2.25rem;
    margin-top: 5rem;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 3rem;
    height: 2px;
    background: #ff4500;
  }
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-top: 5rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const BlogCard = styled.div<{ theme: string }>`
  padding: 1.5rem;
  border-radius: 0.5rem;
  text-align: center;
  background: ${({ theme }) =>
    theme === "dark" ? "#1a1a1a" : "#f3f3f3"};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-0.25rem);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  }
`;

const BlogImage = styled.img`
  width: 100%;
  height: 16rem;
  object-fit: cover;
  margin-bottom: 1rem;
  border: 1px solid ${({ theme }) =>
    theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"};
`;

const BlogDate = styled.p`
  color: #ff4500;
  font-weight: 500;
  margin: 1rem 0;
  font-size: 0.875rem;
`;

const BlogTitle = styled.h2<{ theme: string }>`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) =>
    theme === "dark" ? "#e2e8f0" : "#1e293b"};
  font-family: 'Space Grotesk', sans-serif;
  line-height: 1.4;
  transition: color 0.3s ease;
  
  ${BlogCard}:hover & {
    color: #ff4500;
  }
`;

type Props = {
  theme: "dark" | "light";
  toggleTheme: () => void;
};

interface BlogSection {
  title: string;
  content: string;
}

interface BlogContent {
  subtitle: string;
  sections: BlogSection[];
  conclusion: string;
}

type BlogPost = {
  id: number;
  image: string;
  date: string;
  title: string;
  content: BlogContent;
};

const Blog: React.FC<Props> = ({ theme, toggleTheme }) => {
  const [showSingleBlog, setShowSingleBlog] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(0);

  const posts = [
    {
      id: 1,
      image: "./images/next.jpg",
      date: "12 July 2023",
      title: "Navigating and Paginating with Next.js 14: Handling Search Params, Params, and Server Components",
    },
    {
      id: 2,
      image: "./images/nextjs1.png",
      date: "15 July 2023",
      title: "Handling Localization and Dynamic Pathnames in Next.js 14",
    },
    {
      id: 3,
      image: "./images/postgres-logo.png",
      date: "20 July 2023",
      title: "Mastering PostgreSQL: A Personal Journey through Installation, Overcoming PGPASSWORD Challenges, and Starting with PgAdmin",
    },
  ];

  const handleBlogClick = (post: any) => {
    setSelectedBlog(post.id);
    setShowSingleBlog(true);
  };

  const renderBlogPost = () => {
    switch (selectedBlog) {
      case 1:
        return <BlogPost1 onHide={() => setShowSingleBlog(false)} theme={theme} />;
      case 2:
        return <BlogPost2 onHide={() => setShowSingleBlog(false)} theme={theme} />;
      case 3:
        return <BlogPost3 onHide={() => setShowSingleBlog(false)} theme={theme} />;
      default:
        return null;
    }
  };

  if (showSingleBlog && selectedBlog) {
    return renderBlogPost();
  }

  return (
    <Container theme={theme}>
      <CubeContainer>
        {[...Array(5)].map((_, index) => (
          <Cube key={index} isSelected={index === 4} />
        ))}
      </CubeContainer>

      <ContentWrapper>
        <Title>Blog Posts</Title>
        <BlogGrid>
          {posts.map((post) => (
            <BlogCard
              key={post.id}
              theme={theme}
              onClick={() => handleBlogClick(post)}
            >
              <BlogImage src={post.image} alt={post.title} />
              <BlogDate>{post.date}</BlogDate>
              <BlogTitle theme={theme}>{post.title}</BlogTitle>
            </BlogCard>
          ))}
        </BlogGrid>
      </ContentWrapper>
    </Container>
  );
};

export default Blog;
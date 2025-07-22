"use client";
import React from "react";
import Colors from "@/app/colors";
import Formats from "@/app/formats";
import styled from "styled-components";
import { useRouter } from "next/navigation";

const MediaPage = () => {
  const router = useRouter();

  const newsArticles = [
    {
      id: 1,
      title: "Numaira Receives $100K Seed Funding from Cyberport",
      date: "December 15, 2024",
      excerpt: "Finance automation startup Numaira secures significant seed funding to accelerate product development and market expansion.",
      content: `Numaira, a cutting-edge finance automation platform, has successfully raised $100,000 HKD ($13,000 USD) in seed funding from Cyberport, Hong Kong's premier technology incubator. This investment will fuel the company's mission to transform financial document processing through AI-powered automation solutions.

The funding will be used to enhance Numaira's core technology, expand the development team, and prepare for the official product launch in March 2025. Cyberport's investment demonstrates confidence in Numaira's innovative approach to solving critical pain points in financial workflows.

"We're thrilled to have Cyberport's support as we work to revolutionize how financial professionals handle document processing," said the Numaira team. "This funding validates our vision of making finance operations more efficient through intelligent automation."`,
      category: "Funding"
    },
    {
      id: 2,
      title: "Numaira Announces March 2025 Product Launch",
      date: "January 8, 2025",
      excerpt: "The highly anticipated finance automation platform will be available to early adopters and enterprise clients starting March 2025.",
      content: `Numaira today announced that its AI-powered finance automation platform will launch in March 2025, bringing revolutionary document processing capabilities to financial institutions and corporate finance teams worldwide.

The platform promises to eliminate manual data entry and streamline financial reporting processes that currently consume hours of professional time. Early beta testing with top-tier financial institutions has shown significant productivity improvements and error reduction.

Key features of the March release include:
• One-click document generation
• Intelligent data mapping and extraction
• Seamless integration with existing financial systems
• Advanced compliance and audit trails

"We've been working closely with finance professionals from leading institutions to ensure our solution addresses real-world challenges," the team stated. "The March launch represents months of refinement based on direct user feedback."`,
      category: "Product Launch"
    },
    {
      id: 3,
      title: "Partnership with Leading Financial Institutions Drives Innovation",
      date: "January 20, 2025",
      excerpt: "Numaira collaborates with top-tier banks and investment firms to refine AI automation solutions for financial document processing.",
      content: `Numaira has established strategic partnerships with several leading financial institutions, including collaborations with professionals from major banks and investment firms. These partnerships have been instrumental in shaping the platform's development and ensuring it meets the demanding requirements of enterprise financial operations.

The collaborative approach has resulted in features specifically designed for:
• Equity research and investment banking workflows
• Audit and compliance documentation
• Risk assessment and financial reporting
• Cross-border financial analysis

"Working directly with finance professionals has been crucial to our development process," noted the Numaira team. "Their insights have helped us create solutions that truly address the pain points they face daily."

These partnerships position Numaira as a trusted solution for financial institutions looking to modernize their document processing capabilities while maintaining the highest standards of accuracy and compliance.`,
      category: "Partnerships"
    }
  ];

  return (
    <MediaContainer>
      <PageHeader>
        <PageTitle>Media & News</PageTitle>
        <PageSubtitle>Latest updates and announcements from Numaira</PageSubtitle>
      </PageHeader>

      <ArticlesGrid>
        {newsArticles.map((article) => (
          <ArticleCard key={article.id}>
            <ArticleCategory>{article.category}</ArticleCategory>
            <ArticleTitle>{article.title}</ArticleTitle>
            <ArticleDate>{article.date}</ArticleDate>
            <ArticleExcerpt>{article.excerpt}</ArticleExcerpt>
            <ArticleContent>{article.content}</ArticleContent>
          </ArticleCard>
        ))}
      </ArticlesGrid>

      <BackButton onClick={() => router.push("/")}>
        ← Back to Home
      </BackButton>
    </MediaContainer>
  );
};

const MediaContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px 20px 40px 20px;
  
  @media (max-width: 768px) {
    padding: 100px 16px 40px 16px;
  }
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const PageTitle = styled.h1`
  color: ${Colors.brand500};
  font-size: ${Formats.displayXL};
  font-weight: 600;
  margin-bottom: 16px;
`;

const PageSubtitle = styled.p`
  color: ${Colors.neutral1000};
  font-size: ${Formats.textLG};
  font-weight: 400;
`;

const ArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  margin-bottom: 60px;
`;

const ArticleCard = styled.div`
  background: ${Colors.neutral};
  border: 1px solid ${Colors.neutral200};
  border-radius: ${Formats.roundmd};
  padding: 40px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const ArticleCategory = styled.span`
  background: ${Colors.brand};
  color: ${Colors.brand500};
  padding: 4px 12px;
  border-radius: ${Formats.roundsm};
  font-size: ${Formats.textSM};
  font-weight: 600;
`;

const ArticleTitle = styled.h2`
  color: ${Colors.brand500};
  font-size: ${Formats.displayMD};
  font-weight: 600;
  margin: 20px 0 12px 0;
`;

const ArticleDate = styled.p`
  color: ${Colors.neutral700};
  font-size: ${Formats.textSM};
  margin-bottom: 16px;
`;

const ArticleExcerpt = styled.p`
  color: ${Colors.neutral1000};
  font-size: ${Formats.textMD};
  font-weight: 500;
  margin-bottom: 20px;
`;

const ArticleContent = styled.div`
  color: ${Colors.neutral1000};
  font-size: ${Formats.textMD};
  line-height: 1.6;
  white-space: pre-line;
`;

const BackButton = styled.button`
  background: ${Colors.brand500};
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: ${Formats.roundmd};
  font-size: ${Formats.textMD};
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background: ${Colors.brand800};
  }
`;

export default MediaPage; 
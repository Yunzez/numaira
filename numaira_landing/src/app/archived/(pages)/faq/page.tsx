"use client";
import React, { useState } from "react";
import Colors from "@/app/colors";
import Formats from "@/app/formats";
import styled from "styled-components";
import { useRouter } from "next/navigation";

const FAQPage = () => {
  const router = useRouter();
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const faqSections = [
    {
      id: "product-overview",
      title: "Product Overview",
      questions: [
        {
          id: "what-do-you-do",
          question: "What does Numaira do?",
          answer: "We provide AI-powered automation solutions for financial document processing. Our platform extracts, transforms, and manages unstructured financial data into structured formats, enabling seamless document workflows and eliminating manual data entry tasks."
        },
        {
          id: "asset-classes",
          question: "What types of financial documents do you support?",
          answer: "We currently support various financial document types including equity research reports, investment banking documents, audit reports, financial statements, compliance documentation, and structured products. We can work with clients to expand support to additional document types."
        },
        {
          id: "ai-models",
          question: "Which AI/LLM models do you use?",
          answer: "We leverage advanced AI services including natural language processing, optical character recognition (OCR), and machine learning models specifically trained for financial document processing. Our platform integrates with leading AI providers for maximum accuracy."
        },
        {
          id: "accuracy",
          question: "How accurate are your automated processes?",
          answer: "Our accuracy ranges from 95-99% depending on document quality and complexity. For critical processes, we offer hybrid solutions that combine AI automation with human verification for maximum precision."
        }
      ]
    },
    {
      id: "syncspace",
      title: "SyncSpace",
      questions: [
        {
          id: "syncspace-overview",
          question: "What is SyncSpace?",
          answer: "SyncSpace is our real-time collaborative workspace for financial document creation and editing. It enables teams to work simultaneously on documents while maintaining version control and seamless data synchronization across all participants."
        },
        {
          id: "collaboration-features",
          question: "What collaboration features does SyncSpace offer?",
          answer: "SyncSpace provides real-time editing, version control with complete history tracking, intelligent conflict resolution, team workspace management, and integrated commenting and review workflows."
        },
        {
          id: "integration",
          question: "Does SyncSpace integrate with existing financial systems?",
          answer: "Yes, SyncSpace offers seamless integration with major financial platforms, data providers, and document management systems. Our API allows for custom integrations with your existing workflow tools."
        },
        {
          id: "security",
          question: "How secure is SyncSpace?",
          answer: "SyncSpace employs enterprise-grade security including end-to-end encryption, role-based access controls, audit trails, and compliance with financial industry regulations including SOC 2 and ISO 27001 standards."
        }
      ]
    },
    {
      id: "assemblydoc",
      title: "AssemblyDoc",
      questions: [
        {
          id: "assemblydoc-overview",
          question: "What is AssemblyDoc?",
          answer: "AssemblyDoc is our automated document assembly platform that intelligently compiles financial reports from multiple data sources. It reduces manual work through AI-powered document generation and template customization."
        },
        {
          id: "document-generation",
          question: "Can AssemblyDoc auto-generate complex financial documents?",
          answer: "Yes, AssemblyDoc can automatically generate various financial documents including pitch books, research reports, compliance documents, and client presentations using pre-configured templates and real-time data integration."
        },
        {
          id: "data-sources",
          question: "What data sources does AssemblyDoc support?",
          answer: "AssemblyDoc integrates with major financial data providers including Bloomberg, Refinitiv, S&P Capital IQ, and can connect to internal databases, spreadsheets, and document repositories."
        },
        {
          id: "customization",
          question: "Do you offer template customization?",
          answer: "Yes, templates are fully customizable to meet your brand guidelines and specific formatting requirements. We provide both pre-built templates and custom template development services."
        }
      ]
    },
    {
      id: "custom-solutions",
      title: "Customized Solutions",
      questions: [
        {
          id: "custom-overview",
          question: "What are Numaira's customized solutions?",
          answer: "Our customized solutions are tailored automation platforms designed specifically for your organization's unique financial workflows. We work closely with clients to build custom integrations and specialized features that address specific business requirements."
        },
        {
          id: "implementation",
          question: "How long does implementation take?",
          answer: "Implementation timelines vary based on complexity and scope. Typical deployments range from 4-12 weeks, including requirements gathering, development, testing, and training phases."
        },
        {
          id: "support",
          question: "What kind of support is provided?",
          answer: "We provide dedicated support teams, comprehensive training programs, ongoing technical assistance, and regular system updates. Enterprise clients receive priority support with guaranteed response times."
        },
        {
          id: "scalability",
          question: "Can the platform scale with our growing needs?",
          answer: "Yes, our platform is designed for scalability. We can accommodate increasing document volumes, additional users, and expanding workflow requirements without performance degradation."
        }
      ]
    },
    {
      id: "platform-security",
      title: "Platform & Security",
      questions: [
        {
          id: "data-security",
          question: "How does Numaira handle sensitive financial data?",
          answer: "We implement strict access controls, end-to-end encryption, and compliance with data privacy regulations including GDPR and financial industry standards. All data is processed within secure, audited environments."
        },
        {
          id: "compliance",
          question: "What compliance certifications does Numaira have?",
          answer: "We maintain SOC 2 Type II certification, ISO 27001 for information security management, and comply with financial industry regulations including MiFID II and relevant local financial authority requirements."
        },
        {
          id: "uptime",
          question: "What is your uptime guarantee?",
          answer: "We guarantee 99.9% uptime during business hours with comprehensive monitoring and redundancy systems. Our platform includes disaster recovery capabilities and business continuity planning."
        },
        {
          id: "data-residency",
          question: "Where is our data stored?",
          answer: "Data is stored in secure, compliant data centers with options for regional data residency requirements. We work with clients to ensure data governance requirements are met."
        }
      ]
    },
    {
      id: "getting-started",
      title: "Getting Started",
      questions: [
        {
          id: "pricing",
          question: "What is your pricing model?",
          answer: "We offer flexible pricing based on usage volume, feature requirements, and deployment model. Pricing typically includes subscription fees and transaction-based charges. Contact us for a customized quote based on your specific needs."
        },
        {
          id: "demo",
          question: "Can I see a demo of the platform?",
          answer: "Yes, we offer comprehensive product demonstrations tailored to your specific use cases. Our team can showcase relevant features and discuss how Numaira can address your particular workflow challenges."
        },
        {
          id: "trial",
          question: "Do you offer a trial period?",
          answer: "We provide pilot programs for qualified organizations to evaluate our platform with real-world use cases. This allows you to assess the value and fit before making a full commitment."
        },
        {
          id: "next-steps",
          question: "I'm interested in Numaira - what's next?",
          answer: "Contact our team to schedule a product demonstration and discuss your specific requirements. We'll work with you to understand your workflows and provide a tailored solution proposal."
        }
      ]
    }
  ];

  return (
    <FAQContainer>
      <PageHeader>
        <PageTitle>Frequently Asked Questions</PageTitle>
        <PageSubtitle>Find answers to common questions about Numaira&apos;s finance automation platform</PageSubtitle>
      </PageHeader>

      {faqSections.map((section) => (
        <FAQSection key={section.id}>
          <SectionTitle>{section.title}</SectionTitle>
          {section.questions.map((item) => (
            <FAQItem key={item.id}>
              <QuestionButton
                onClick={() => toggleItem(item.id)}
                isOpen={openItems.has(item.id)}
              >
                <QuestionText>{item.question}</QuestionText>
                <ToggleIcon isOpen={openItems.has(item.id)}>
                  {openItems.has(item.id) ? "−" : "+"}
                </ToggleIcon>
              </QuestionButton>
              {openItems.has(item.id) && (
                <AnswerContent>
                  {item.answer}
                </AnswerContent>
              )}
            </FAQItem>
          ))}
        </FAQSection>
      ))}

      <ContactSection>
        <ContactTitle>Don&apos;t see your question above?</ContactTitle>
        <ContactText>
          Get answers by contacting our team at{" "}
          <ContactLink href="mailto:support@numaira.com">support@numaira.com</ContactLink>
          {" "}or{" "}
          <ContactButton onClick={() => router.push("/demo")}>
            request a demo
          </ContactButton>
        </ContactText>
      </ContactSection>

      <BackButton onClick={() => router.push("/")}>
        ← Back to Home
      </BackButton>
    </FAQContainer>
  );
};

const FAQContainer = styled.div`
  max-width: 1000px;
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
  max-width: 600px;
  margin: 0 auto;
`;

const FAQSection = styled.div`
  margin-bottom: 50px;
`;

const SectionTitle = styled.h2`
  color: ${Colors.brand1000};
  font-size: ${Formats.displayMD};
  font-weight: 600;
  margin-bottom: 30px;
  border-bottom: 2px solid ${Colors.brand500};
  padding-bottom: 10px;
`;

const FAQItem = styled.div`
  border: 1px solid ${Colors.neutral200};
  border-radius: ${Formats.roundmd};
  margin-bottom: 12px;
  overflow: hidden;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }
`;

const QuestionButton = styled.button<{ isOpen: boolean }>`
  width: 100%;
  padding: 20px;
  background: ${props => props.isOpen ? Colors.brand : Colors.neutral};
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s ease;

  &:hover {
    background: ${Colors.brand};
  }
`;

const QuestionText = styled.h3`
  color: ${Colors.brand1000};
  font-size: ${Formats.textLG};
  font-weight: 600;
  text-align: left;
  margin: 0;
`;

const ToggleIcon = styled.span<{ isOpen: boolean }>`
  color: ${Colors.brand500};
  font-size: 24px;
  font-weight: 600;
  transition: transform 0.3s ease;
  transform: ${props => props.isOpen ? 'rotate(0deg)' : 'rotate(0deg)'};
`;

const AnswerContent = styled.div`
  padding: 20px;
  background: ${Colors.neutral50};
  color: ${Colors.neutral1000};
  font-size: ${Formats.textMD};
  line-height: 1.6;
  border-top: 1px solid ${Colors.neutral200};
`;

const ContactSection = styled.div`
  text-align: center;
  margin: 60px 0;
  padding: 40px;
  background: ${Colors.neutral50};
  border-radius: ${Formats.roundmd};
`;

const ContactTitle = styled.h3`
  color: ${Colors.brand500};
  font-size: ${Formats.displaySM};
  font-weight: 600;
  margin-bottom: 16px;
`;

const ContactText = styled.p`
  color: ${Colors.neutral1000};
  font-size: ${Formats.textMD};
  line-height: 1.6;
`;

const ContactLink = styled.a`
  color: ${Colors.brand500};
  text-decoration: underline;
  font-weight: 600;

  &:hover {
    color: ${Colors.brand800};
  }
`;

const ContactButton = styled.button`
  color: ${Colors.brand500};
  background: none;
  border: none;
  text-decoration: underline;
  font-weight: 600;
  cursor: pointer;
  font-size: inherit;

  &:hover {
    color: ${Colors.brand800};
  }
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

export default FAQPage; 
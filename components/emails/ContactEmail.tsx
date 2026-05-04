import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Section,
  Text,
} from "@react-email/components";

interface ContactEmailProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactEmail({
  name,
  email,
  subject,
  message,
}: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Heading style={headerTitle}>SSDEXPERTZONE</Heading>
            <Text style={headerSubtitle}>New Contact Form Submission</Text>
          </Section>

          <Section style={content}>
            <Heading style={heading}>Contact Information</Heading>
            
            <Text style={paragraph}>
              <strong>Name:</strong> {name}
            </Text>
            
            <Text style={paragraph}>
              <strong>Email:</strong> <Link href={`mailto:${email}`}>{email}</Link>
            </Text>
            
            <Text style={paragraph}>
              <strong>Subject:</strong> {subject}
            </Text>
            
            <Heading style={heading}>Message</Heading>
            <Text style={messageStyle}>{message}</Text>
          </Section>

          <Section style={footer}>
            <Text style={footerText}>
              This message was sent from the SSDEXPERTZONE contact form on{" "}
              {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#0F0F0F",
  fontFamily: "Inter, sans-serif",
  color: "#F5F5F5",
};

const container = {
  maxWidth: "600px",
  margin: "0 auto",
  padding: "20px",
  backgroundColor: "#141414",
  borderRadius: "12px",
};

const header = {
  textAlign: "center" as const,
  padding: "20px 0",
  borderBottom: "1px solid #1F1F1F",
  marginBottom: "30px",
};

const headerTitle = {
  fontSize: "32px",
  fontWeight: "800",
  margin: "0",
  color: "#E85D26",
  fontFamily: "Bricolage Grotesque, sans-serif",
};

const headerSubtitle = {
  fontSize: "18px",
  margin: "8px 0 0 0",
  color: "#A0A0A0",
};

const content = {
  padding: "0 20px",
};

const heading = {
  fontSize: "24px",
  fontWeight: "700",
  margin: "20px 0 10px 0",
  color: "#F5F5F5",
  fontFamily: "Bricolage Grotesque, sans-serif",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "1.6",
  margin: "10px 0",
  color: "#A0A0A0",
};

const messageStyle = {
  fontSize: "16px",
  lineHeight: "1.6",
  margin: "10px 0",
  color: "#F5F5F5",
  whiteSpace: "pre-wrap" as const,
  backgroundColor: "#0F0F0F",
  padding: "15px",
  borderRadius: "8px",
  border: "1px solid #1F1F1F",
};

const footer = {
  textAlign: "center" as const,
  padding: "20px 0",
  borderTop: "1px solid #1F1F1F",
  marginTop: "30px",
};

const footerText = {
  fontSize: "12px",
  color: "#A0A0A0",
  margin: "0",
};

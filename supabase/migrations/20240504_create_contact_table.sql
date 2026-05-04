-- Create table for contact form submissions
CREATE TABLE IF NOT EXISTS contact (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_contact_created_at ON contact(created_at);
CREATE INDEX IF NOT EXISTS idx_contact_email ON contact(email);

-- Enable RLS (Row Level Security)
ALTER TABLE contact ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts (for contact form submissions)
CREATE POLICY "Allow insert for contact form" ON contact
  FOR INSERT WITH CHECK (true);

-- Create policy to allow reads for admin purposes
CREATE POLICY "Allow read for contact admin" ON contact
  FOR SELECT USING (true);

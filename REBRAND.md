Rebrand the entire site to "SSDEXPERT". 

1. Replace all fonts with:
   - Bricolage Grotesque (headings) via next/font/google
   - Inter (body/UI) via next/font/google
   - Set up CSS variables --font-bricolage and --font-inter
   - Apply both variables on the <html> tag in layout.tsx

2. Replace all colors with this custom palette in tailwind.config.ts:
   - background: '#0F0F0F'
   - surface: '#141414'
   - accent: '#E85D26'
   - accent-hover: '#FF6B35'
   - text-primary: '#F5F5F5'
   - text-secondary: '#A0A0A0'
   - border: '#1F1F1F'

3. Update all branding:
   - Site name: SSDEXPERT
   - Navbar logo text: SSDEXPERT
   - Page title and metadata: SSDEXPERT
   - Footer brand name: SSDEXPERT
   - Hero headline should reference SSDEXPERT

4. Replace all stock blue accents with #E85D26 across 
   all components, buttons, highlights, badges and links.

5. Update globals.css to reflect the new dark theme 
   as the default, removing any light mode defaults.
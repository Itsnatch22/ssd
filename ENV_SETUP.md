# Environment Variables Setup

To enable the contact form functionality, you need to set up the following environment variables in your `.env.local` file:

## Required Environment Variables

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Email Configuration
CONTACT_EMAIL=your-email@example.com
RESEND_API_KEY=your_resend_api_key

# Affiliate Configuration
NEXT_PUBLIC_AFFILIATE_TAG=your_amazon_associate_tag
```

## Setup Instructions

### 1. Supabase Setup

1. Create a new Supabase project at [supabase.com](https://supabase.com)
2. Run the SQL schema from `supabase/contact.sql` in your Supabase SQL editor
3. Get your project URL and service role key from Supabase settings
4. Add them to your `.env.local` file

### 2. Resend Setup

1. Create a Resend account at [resend.com](https://resend.com)
2. Verify your domain and sender email
3. Get your API key from Resend dashboard
4. Add it to your `.env.local` file
5. Set your `CONTACT_EMAIL` to the email that should receive contact form submissions

### 3. Database Schema

Run the following SQL in your Supabase project:

```sql
create table contact (
    id uuid default gen_random_uuid() primary key,
    name text not null,
    email text not null,
    subject text not null,
    message text not null,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
```

## Security Notes

- Never commit your `.env.local` file to version control
- The `SUPABASE_SERVICE_ROLE_KEY` should be kept secret and only used on the server
- The `RESEND_API_KEY` should be kept secret and only used on the server
- Only `NEXT_PUBLIC_*` variables are exposed to the browser

## Testing

After setting up the environment variables:

1. Start your development server: `npm run dev`
2. Navigate to `/contact`
3. Fill out and submit the contact form
4. Check that:
   - The data is saved to your Supabase database
   - An email is sent to your `CONTACT_EMAIL` address
   - The form shows a success message

## Troubleshooting

### Common Issues

1. **Email not sending**: Check your Resend API key and domain verification
2. **Database error**: Verify your Supabase credentials and that the table exists
3. **Form validation errors**: Check the browser console for detailed error messages

### Debug Mode

For debugging, you can temporarily add console.log statements to the API route at `app/api/contact/route.ts` to see what's happening during form submission.

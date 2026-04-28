create table public.ssd_products (
  id uuid not null default gen_random_uuid (),
  name text not null,
  brand text not null,
  price numeric(10, 2) not null,
  capacity_gb numeric(10, 2) not null,
  technology text not null,
  condition text not null,
  warranty text null,
  amazon_url text not null,
  affiliate_tag text not null,
  featured boolean null default true,
  created_at timestamp with time zone null default now(),
  image_url text null,
  form_factor text null,
  constraint ssd_products_pkey primary key (id)
) TABLESPACE pg_default;
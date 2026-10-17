import { TagIcon } from '@sanity/icons/Tag'
import { defineField, defineType } from 'sanity'

export const product = defineType({
  name: 'product',
  title: 'SSD Product',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Product name',
      type: 'string',
      validation: (rule) => rule.required().max(120),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'sourceId',
      title: 'Supabase source ID',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'sourceCreatedAt',
      title: 'Source creation date',
      type: 'datetime',
      readOnly: true,
    }),
    defineField({
      name: 'description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'brand',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'price',
      type: 'number',
      validation: (rule) => rule.required().min(0),
    }),
    defineField({
      name: 'capacityGb',
      title: 'Capacity (GB)',
      type: 'number',
      validation: (rule) => rule.required().integer().positive(),
    }),
    defineField({
      name: 'formFactor',
      title: 'Form factor',
      type: 'string',
    }),
    defineField({
      name: 'technology',
      type: 'string',
      description: 'For example, NVMe PCIe 4.0 or SATA III.',
    }),
    defineField({
      name: 'condition',
      type: 'string',
    }),
    defineField({
      name: 'warranty',
      type: 'string',
    }),
    defineField({
      name: 'amazonUrl',
      title: 'Product URL',
      type: 'url',
      validation: (rule) =>
        rule.required().uri({ scheme: ['https'], allowRelative: false }),
    }),
    defineField({
      name: 'affiliateTag',
      type: 'string',
    }),
    defineField({
      name: 'featured',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'brand',
      media: 'image',
    },
  },
})

import { type SchemaTypeDefinition } from 'sanity'
import { article } from './article'
import { product } from './product'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, article],
}

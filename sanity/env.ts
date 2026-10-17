export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-10-17'

export const dataset = assertValue(
  process.env.SANITY_STUDIO_DATASET,
  'Missing environment variable: SANITY_STUDIO_DATASET'
)

export const projectId = assertValue(
  process.env.SANITY_STUDIO_ID,
  'Missing environment variable: SANITY_STUDIO_ID'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}

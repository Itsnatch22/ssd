/**
* This configuration file lets you run `$ sanity [command]` in this folder
* Go to https://www.sanity.io/docs/cli to learn more.
**/
import { defineCliConfig } from 'sanity/cli'

const projectId = process.env.SANITY_STUDIO_ID
const dataset = process.env.SANITY_STUDIO_DATASET

export default defineCliConfig({
  api: { projectId, dataset },
  deployment: { appId: 'g4955ddk48mrkbfctlf2d6c2' },
})

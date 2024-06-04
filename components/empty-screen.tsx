import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading
} from './page-header'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-background p-8">
        <PageHeader className="max-w-3xl">
          <PageHeaderHeading className="text-balance">
           Stock GPT
          </PageHeaderHeading>
          <PageHeaderDescription>
           Get Started purchasing stocks with the help of LLM's
          </PageHeaderDescription>
        </PageHeader>
      </div>
    </div>
  )
}

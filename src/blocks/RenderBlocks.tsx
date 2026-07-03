import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { HeroBannerComponent } from '@/blocks/HeroBanner/Component'
import { FeaturesBlockComponent } from '@/blocks/FeaturesBlock/Component'
import { ProductsBlockComponent } from '@/blocks/ProductsBlock/Component'
import { PricingBlockComponent } from '@/blocks/PricingBlock/Component'
import { TestimonialsBlockComponent } from '@/blocks/TestimonialsBlock/Component'
import { FAQBlockComponent } from '@/blocks/FAQBlock/Component'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  heroBanner: HeroBannerComponent,
  features: FeaturesBlockComponent,
  productsShowcase: ProductsBlockComponent,
  pricing: PricingBlockComponent,
  testimonialsSection: TestimonialsBlockComponent,
  faq: FAQBlockComponent,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType as keyof typeof blockComponents]

            if (Block) {
              // Cloud camera blocks don't need the my-16 wrapper
              const isLandingBlock = ['heroBanner', 'features', 'productsShowcase', 'pricing', 'testimonialsSection', 'faq'].includes(blockType)
              return (
                <div className={isLandingBlock ? '' : 'my-16 page-block-center'} key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}

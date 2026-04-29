/**
 * Global presentation types
 * Language Rule: English comments
 */
export type SlideLayout =
  | 'hero'
  | 'index'
  | 'main'
  | 'graph'
  | 'testimonial'
  | 'summary'

export interface Slide {
  id: number
  layout: SlideLayout
  content: any // Content structure is layout-specific
}

export interface SlideData {
  slides: Slide[]
}
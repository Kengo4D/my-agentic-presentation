/**
 * Global Type Definitions for Slide System
 */

export type SlideVariant = 'analysis' | 'problem' | 'solution' | 'default';
export type TrendDirection = 'up' | 'down' | 'stable';

export interface KeyPoint {
  text: string;
  emphasis?: boolean;
}

export interface Metric {
  label: string;
  value: string | number;
  trend?: TrendDirection;
  note?: string;
}

/**
 * Flexible content structure for various slide layouts
 */
export interface SlideContent {
  title: string;
  subtitle?: string;
  variant?: SlideVariant;
  keyPoints?: string[] | KeyPoint[]; // Supports both simple and enhanced formats
  metrics?: Metric[];
  insights?: string[];
  chartData?: number[];
  labels?: string[];
  unit?: string;
  quote?: {
    text: string;
    speaker: string;
    title: string;
    organization: string;
  };
  body?: string[]; // Used for Summary or generic lists
}

/**
 * Main Slide object structure
 */
export interface Slide {
  id?: number | string;
  layout: 'hero' | 'index' | 'main' | 'graph' | 'testimonial' | 'summary' | string;
  content: SlideContent;
}

/**
 * API Response structure
 */
export interface SlidesResponse {
  slides: Slide[];
}
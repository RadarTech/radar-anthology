// --- Imports -------------------------------------------------------------- //

// Vendor
import { AnthologyClient } from 'anthology.scss';

// Internal
import { RadarBreakpointName } from './types';

// --- Business logic ------------------------------------------------------- //

export const anthology = new AnthologyClient<
  keyof typeof RadarBreakpointName
>();

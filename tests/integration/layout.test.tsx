import { describe, expect, it, vi } from 'vitest';

// Mock next/font/google used by RootLayout (Geist and Geist_Mono)
vi.mock('next/font/google', () => ({
  Geist: () => ({ variable: '--font-geist-sans' }),
  Geist_Mono: () => ({ variable: '--font-geist-mono' }),
}));

import { render, screen } from '@testing-library/react';
import RootLayout from '../../app/layout';

describe('RootLayout', () => {
  it('renders children and sets html lang', () => {
    render(
      <RootLayout>
        <div>child-content</div>
      </RootLayout>
    );

    expect(screen.getByText('child-content')).toBeInTheDocument();

    // layout sets html lang="en" in the returned markup
    expect(document.documentElement.lang).toBe('en');
  });
});

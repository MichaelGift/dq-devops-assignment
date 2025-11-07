import { vi } from 'vitest';

// Mock next/image to a simple img so tests run in jsdom
vi.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // render a plain img element for tests
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

import { render, screen } from '@testing-library/react';
import Home from '../../app/page';

describe('Home page', () => {
  it('renders headline and links', () => {
    render(<Home />);

    expect(
      screen.getByText(/To get started, edit the page.tsx file/i)
    ).toBeInTheDocument();

    // check for link text used in the page
    expect(screen.getByText(/Templates/i)).toBeInTheDocument();
  });
});

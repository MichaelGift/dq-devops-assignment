import '@testing-library/jest-dom';
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

// run cleanup after each test to remove mounted DOM nodes
afterEach(() => {
  cleanup();
});

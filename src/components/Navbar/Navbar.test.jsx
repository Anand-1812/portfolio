// Navbar.test.jsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import Navbar from './Navbar';

describe('Navbar Component', () => {
  it('toggles from light to dark theme when clicked', async () => {
    const user = userEvent.setup();
    const setThemeMock = vi.fn();

    render(<Navbar theme="light" setTheme={setThemeMock} />);

    const toggleButton = screen.getAllByTestId('theme-toggle')[0];
    await user.click(toggleButton);

    expect(setThemeMock).toHaveBeenCalledTimes(1);
    expect(setThemeMock).toHaveBeenCalledWith('dark');
  });

  it('toggles from dark to light theme when clicked', async () => {
    const user = userEvent.setup();
    const setThemeMock = vi.fn();

    render(<Navbar theme="dark" setTheme={setThemeMock} />);

    const toggleButton = screen.getAllByTestId('theme-toggle')[0];
    await user.click(toggleButton);

    expect(setThemeMock).toHaveBeenCalledTimes(1);
    expect(setThemeMock).toHaveBeenCalledWith('light');
  });
});


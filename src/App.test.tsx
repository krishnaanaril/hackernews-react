import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App';

test('Top navlink should be available as list item', async () => {
    render(
        <App/>
    )

    const navTop = screen.getByText("Top");
    expect(navTop).toBeDefined();
});
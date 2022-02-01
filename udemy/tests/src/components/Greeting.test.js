import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component', () => {
    test('renders "Hello World" as a text', () => {
        // Arrange
        render(<Greeting />);

        // Act
        // ... nothing

        // Assert
        const greetingElement = screen.getByText(/hello world/i);
        expect(greetingElement).toBeInTheDocument();
    });

    test('renders "good to see you" if the button was NOT clicked', () => {
        render(<Greeting />);

        const outputElement = screen.getByText(/good to see you/i);
        expect(outputElement).toBeInTheDocument();
    })

    test('renders "changed" if the button was clicked', () => {
        render(<Greeting />);

        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        const outputElement = screen.getByText('Changed!');
        expect(outputElement).toBeInTheDocument();
    });
});

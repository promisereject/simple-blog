import { render, screen } from '@testing-library/react';
import { Button } from '@/shared/ui/Button';

describe('Button', () => {
    test('render test', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
    test('clear theme test', () => {
        render(<Button theme="clear">TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
    });
});

import { render, screen } from '@testing-library/react';
import { Title } from './Title';

describe('Title', () => {
  it('renders title component correctly', () => {
    render(<Title titelText="Hej" />);
    const title = screen.getByText(/Hej/i);
    expect(title).toBeInTheDocument();
  });
});
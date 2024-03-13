import { render, fireEvent, } from '@testing-library/react';
import App from './App';

describe("App", () => {
  it("should able to search with file names", async () => {
    const { getByText, container, getByTestId } = render(<App />);

    await fireEvent.change(getByTestId('search-box'), { target: { value: 'src' } })
    
    const boldElements = container.getElementsByClassName('file-name bold');
    expect(getByText('src')).toBeInTheDocument();
    expect(boldElements.length).toBe(1);
    await fireEvent.change(getByTestId('search-box'), { target: { value: 'image' } })
    expect(getByText('images')).toBeInTheDocument();
    expect(boldElements.length).toBe(3);
  });
})
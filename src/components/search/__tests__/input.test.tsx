import { fireEvent, render } from '@testing-library/react';
import { SearchBar } from '..';

describe("Search", () => {
  it("should update the search box based on the user search", async () => {
    const updateSearchQuery = jest.fn();
    const { getByTestId } = render(<SearchBar updateSearchQuery={updateSearchQuery} />)

    await fireEvent.change(getByTestId('search-box'), { target: { value: 'test' } });
    expect(updateSearchQuery).toHaveBeenCalledWith('test');
  })
})
import { render } from '@testing-library/react';
import { File } from '..';

describe("File", () => {
  it("should have file name and bold class name when query matches", async () => {
    const fileData = {
      name: 'testImage',
      type: 'file',
      meta: 'img'
    };
    const { getByText, container } = render(<File fileData={fileData} query="test" />);

    const boldElements = container.getElementsByClassName('file-name bold');
    expect(getByText('testImage')).toBeInTheDocument();
    expect(getByText('img')).toBeInTheDocument();
    expect(boldElements.length).toBe(1);
  });
  it("should have file name and should not have bold class name when query did not match", async () => {
    const fileData = {
      name: 'testImage',
      type: 'file',
      meta: 'img'
    };
    const { getByText, container } = render(<File fileData={fileData} query="file" />);

    const boldElements = container.getElementsByClassName('file-name bold');
    expect(getByText('testImage')).toBeInTheDocument();
    expect(getByText('img')).toBeInTheDocument();
    expect(boldElements.length).toBe(0);
  });
})
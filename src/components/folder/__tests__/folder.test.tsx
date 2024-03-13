import { render, fireEvent } from '@testing-library/react';
import { Folder } from '..';

const data = {
  type: "folder",
  name: "parent",
  data: [
    {
      type: "folder",
      name: "root",
      data: [
        {
          type: "folder",
          name: "src",
          data: [
            {
              type: "file",
              meta: 'js',
              name: "index.js"
            }
          ]
        },
        {
          type: "file",
          meta: 'css',
          name: "style.css"
        }]
    }]
};

describe("Folder", () => {
  it("should have folder name and should have opened the child folder", () => {
    const { getByText, container } = render(<Folder shouldOpen={false} data={data} query="parent" />);

    const boldElements = container.getElementsByClassName('file-name bold');
    expect(getByText('parent')).toBeInTheDocument();
    expect(boldElements.length).toBe(1);
  });
  it("should able to open the file structure on click of plus button ", async () => {

    const { getByTestId, getByText } = render(<Folder shouldOpen={false} data={data} query="parent" />);

    await fireEvent.click(getByTestId('icon-parent'));
    expect(getByText('root')).toBeTruthy();
    await fireEvent.click(getByTestId('icon-root'));
    expect(getByText('src')).toBeTruthy();
    expect(getByText('style.css')).toBeTruthy();
  });
})
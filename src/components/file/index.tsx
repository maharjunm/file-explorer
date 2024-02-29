import { MouseEvent } from 'react';
import { FileConfig } from '../folder/type';
import './file.css';
import { FileName } from './fileName';

interface Props {
  fileData: FileConfig;
  query: string;
}

export const File = (props: Props) => {
  const { query, fileData } = props;
  const contextMenu = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log(e, fileData.name);
  };

  return (
    <div onContextMenu={contextMenu} className='file-container flex'>
      <div className='file-icon flex'>
        {fileData.meta}
      </div>
      <FileName query={query} name={fileData.name} />
    </div>
  );
}
import { useEffect, useState } from 'react';
import { File } from '../file';
import { FolderName } from './folderName';
import './folder.css';
import { FileConfig, FileData, FILE_TYPE } from './type';

interface Props {
  data: FileData;
  shouldOpen: boolean;
  query: string;
}

export const Folder = (props: Props) => {
  const { shouldOpen, data, query } = props;

  const [isOpen, setIsOpen] = useState(shouldOpen);

  useEffect(() => {
    setIsOpen(shouldOpen)
  }, [shouldOpen]);

  return (
    <div className='folder-root-container'>
      <FolderName updateIsOpen={setIsOpen} isOpen={isOpen} query={query} name={data.name} />
      <div>
        {
          isOpen ? data.data.map((eachFile, index) => {
            if (eachFile.type === FILE_TYPE.FOLDER) {
              return <Folder key={`${eachFile.name}-${index}`} query={query} shouldOpen={shouldOpen} data={eachFile as FileData} />
            } else {
              return <File key={`${eachFile.name}-${index}`} query={query} fileData={eachFile as FileConfig} />
            }
          }) : null
        }
      </div>
    </div>
  )
}
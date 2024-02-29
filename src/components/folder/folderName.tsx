import React from 'react';
import { FileName } from '../file/fileName';

interface Props {
  name: string;
  isOpen: boolean;
  updateIsOpen: (isOpen: boolean) => void;
  query: string;

}

export const FolderName = (props: Props) => {

  const { isOpen, updateIsOpen, name, query } = props

  return (
    <div className='folder-container flex' >
      <div onClick={() => updateIsOpen(!isOpen)} className='folder-icon-container flex'>
        {isOpen ? '-' : '+'}
      </div>
      <FileName query={query} name={name} />
    </div>
  )
}
import React from 'react';
import { FileName } from '../file/fileName';

interface Props {
  name: string;
  isOpen: boolean;
  updateIsOpen: (isOpen: boolean) => void;
  query: string;

}

export const FolderName = (props: Props) => {

  const { isOpen, updateIsOpen, name, query } = props;

  const onKeyDown = (e: React.KeyboardEvent) => {
    console.log(e)
    if (e.code === 'Enter') {
      updateIsOpen(!isOpen);
    }
  }
  return (
    <div tabIndex={2} onKeyDown={onKeyDown} className='folder-container flex' >
      <div data-testId={`icon-${name}`} onClick={() => updateIsOpen(!isOpen)} className='folder-icon-container flex'>
        {isOpen ? '-' : '+'}
      </div>
      <FileName query={query} name={name} />
    </div>
  )
}

export enum FILE_TYPE {
  FOLDER = 'folder',
  FILE = 'file',
}

export interface FileConfig {
  name: string;
  type: string;
  meta: string
}

export interface FolderConfig {
  name: string;
  type: string;
  data: (FolderConfig | FileConfig)[];
}

export interface FileData {
  data: (FolderConfig | FileConfig)[];
  name: string;
  type: string;
}
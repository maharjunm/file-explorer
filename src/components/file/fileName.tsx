import './fileName.css';

interface Props {
  name: string;
  query: string;
}

export const FileName = (props: Props) => {

  const { name, query } = props

  if (query.length > 0 && name.includes(query)) {
    return (<div className='file-name bold'>{name}</div>)
  }

  return (
    <div className='file-name'>{name}</div>
  )
}
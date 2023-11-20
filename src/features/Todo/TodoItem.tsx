import { useGetTodoItemQuery } from '../../services/todoApi';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Spinner from '../../ui-kit/Spinner';
import { generateRandomString } from '../../utils/generateRandomString';

export const TodoItem = () => {
  const { id = '' } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, isError } = useGetTodoItemQuery(id);

  const handleReloadPage = () => navigate(0);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError || !data) {
    return (
      <div className='text-2xl text-fail'>
        Sorry some exception, please reload
        <span className='text-primary ml-xs cursor-pointer' onClick={handleReloadPage}>
          page
        </span>
      </div>
    );
  }

  return (
    <div className='text-white space-y-xl'>
      <div className='absolute top-xl left-xl text-2xl text-primary'>
        <Link to='/'>Назад</Link>
      </div>
      <h2 className='text-4xl font-bold capitalize'>Title: {data.title}</h2>
      <div className='flex items-center gap-m'>
        <h4 className='text-2xl'>UserId:</h4>
        <span className='text-xl'>{data.userId}</span>
      </div>
      <div className='flex items-center gap-m'>
        <h4 className='text-2xl'>Completed:</h4>
        <span className='text-xl'>{String(data.completed)}</span>
      </div>
      <div className='flex items-center gap-m'>
        <h4 className='text-2xl'>Description:</h4>
        <span className='text-xl h-auto break-all'>{generateRandomString(1000)}</span>
      </div>
    </div>
  );
};

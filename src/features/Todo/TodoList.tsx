import { useGetTodoListQuery } from '../../services/todoApi';
import { generateRandomString } from '../../utils/generateRandomString';
import { Link } from 'react-router-dom';
import Spinner from '../../ui-kit/Spinner';
import { useState, useRef } from 'react';
import { useIntersection } from '../../hooks/intersection';

export const TodoList = () => {
  const { data, isLoading } = useGetTodoListQuery();
  const divLoadMoreRef = useRef<HTMLDivElement>(null);
  const [listSize, setListSize] = useState(20);
  const handleLoadMore = () => setListSize((prevState) => prevState + 20);
  useIntersection(divLoadMoreRef, handleLoadMore);

  return (
    <div className='flex flex-col w-full space-y-m'>
      <div className='text-orange text-2xl font-bold grid grid-cols-12 text-center'>
        <div className='col-span-2'>Номер</div>
        <div className='col-span-4'>Заголовок</div>
        <div className='col-span-5'>Описание</div>
        <div className='col-span-1' />
      </div>
      <hr className='w-full border-white' />
      {isLoading ? (
        <Spinner />
      ) : (
        data?.slice(0, listSize).map(({ id, title }, index) => {
          return (
            <div key={id} className='text-white text-xl grid grid-cols-12 text-center'>
              <div className='col-span-2'>{index + 1}</div>
              <div className='col-span-4'>{title}</div>
              <div className='col-span-5 truncate'>{generateRandomString(100)}</div>
              <div className='col-span-1 text-primary'>
                <Link to={'todo/' + id}>Просмотр</Link>
              </div>
            </div>
          );
        })
      )}
      <div ref={divLoadMoreRef} />
    </div>
  );
};

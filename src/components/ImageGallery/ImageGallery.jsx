import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';
import Button from 'components/Button/Button';

import { getFetch } from 'services/fetch';

import { List, LoaderWrapper, TextMassage } from './ItemGallery.styled';

export default function ImageGallery({ searchName }) {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('idle');
  const [secondFetch, setSecondFetch] = useState(1);

  useEffect(() => {
    if (!searchName) {
      return;
    }
    const getAsyncFetch = async () => {
      setSecondFetch(1);
      setData([]);
      setTotal(0);
      setPage(1);
      setStatus('pending');

      getFetch({
        search: searchName,
        page: 1,
      })
        .then(({ hits, total }) => {
          console.log(hits);
          setData([...hits]);
          setTotal(total);
          setStatus('resolved');
        })
        .catch(er => setStatus('rejected'));
    };
    getAsyncFetch();
  }, [searchName]);

  useEffect(() => {
    if (secondFetch === 1) {
      return;
    }
    const getAsyncFetch = async () => {
      getFetch({
        search: searchName,
        page: page,
      })
        .then(({ hits }) => {
          setData(prev => [...prev, ...hits]);
        })
        .catch(er => setStatus('rejected'));
    };
    getAsyncFetch();
  }, [page, searchName, secondFetch]);

  const handleClickButtonMore = () => {
    setPage(prevState => prevState + 1);
    setSecondFetch(2);
  };

  const Items = data.length ? (
    <>
      <List>
        {data.map(el => (
          <ImageGalleryItem item={el} key={el.id} />
        ))}
      </List>
      {data.length < 12 || total === data.length ? null : (
        <Button onclick={handleClickButtonMore} />
      )}
    </>
  ) : "Unfortunately, the photo was not found";

  if (status === 'idle') {
    return (
      <LoaderWrapper>
        <TextMassage>Find the photo you need</TextMassage>
      </LoaderWrapper>
    );
  }

  if (status === 'pending') {
    return (
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
    );
  }

  if (status === 'resolved') {
    return Items;
  }

  if (status === 'rejected') {
    return "Unfortunately, an error occurred. Try again.";
  }
}

ImageGallery.propTypes = {
  searchName: PropTypes.string.isRequired,
};
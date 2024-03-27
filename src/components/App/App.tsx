import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import store from '../../Zustand/store';
import { getTags } from '../../Zustand/api';
import { Loader } from '../Loader/Loader';
import { Table } from '../Table/Table';
import NativeSelectInput from '../NativeSelectInput/NativeSelectInput';
import BasicPagination from '../BasicPagination/BasicPagination';
import scss from './App.module.scss';
import { ChangeEvent } from 'react';

function App() {
  const {
    setPageTags,
    loading,
    setLoading,
    pageNumber,
    tagsPerPage,
    order,
    sortBy,
    setOrder,
    setSortBy,
    setTagsPerPage,
  } = store();

  useEffect(() => {
    const fetchTags = async () => {
      try {
        setLoading(true);
        const data = await getTags(pageNumber, tagsPerPage, order, sortBy);
        setPageTags(data);
      } catch (error) {
        console.error(error);
        if (error instanceof Error && error.message) {
          toast.error(error.message);
        } else {
          toast.error('An error occurred');
        }
      } finally {
        setLoading(false);
      }
    };
    fetchTags();
  }, [setPageTags, setLoading, order, sortBy, tagsPerPage, pageNumber]);

  const handleChangeTagsPerPage = (event: ChangeEvent<HTMLSelectElement>) => {
    setTagsPerPage(parseInt(event.target.value as string));
  };

  const handleChangeOrder = (event: ChangeEvent<HTMLSelectElement>) => {
    setOrder(event.target.value as string);
  };

  const handleChangeSortBy = (event: ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value as string);
  };

  return (
    <>
      {loading && <Loader />}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className={scss.appContainer}>
        <div className={scss.inputsContainer}>
          <NativeSelectInput
            handleChange={handleChangeTagsPerPage}
            label="Tags per page"
            defaultValue={tagsPerPage.toString()}
            options={['5', '10', '15']}
          />
          <NativeSelectInput
            handleChange={handleChangeOrder}
            label="Order"
            defaultValue={order}
            options={['asc', 'desc']}
          />
          <NativeSelectInput
            handleChange={handleChangeSortBy}
            label="Sort by"
            defaultValue={sortBy}
            options={['name', 'popular', 'activity']}
          />
        </div>
        <Table />
        <div className={scss.pagination}>
          <BasicPagination />
        </div>
      </div>
    </>
  );
}

export default App;

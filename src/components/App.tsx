import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import store from '../Zustand/store';
import { getTags } from '../Zustand/api';
import { Loader } from './Loader/Loader';
import { Table } from './Table/Table';
import BasicPagination from './BasicPagination/BasicPagination';

function App() {
  const {
    setPageTags,
    loading,
    setLoading,
    order,
    sortBy,
    tagsPerPage,
    pageNumber,
  } = store();

  useEffect(() => {
    const fetchTags = async () => {
      try {
        setLoading(true);

        const data = await getTags(pageNumber, tagsPerPage, order, sortBy);
        console.log(data);
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
  return (
    <div data-testid="app">
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
      <Table />
      <BasicPagination />
    </div>
  );
}

export default App;

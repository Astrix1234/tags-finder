import { useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import store from '../../Zustand/store';
import { getTagCount } from '../../Zustand/api';

export default function BasicPagination() {
  const {
    pageNumber,
    setPageNumber,
    totalPages,
    setTotalPages,
    setLoading,
    tagsPerPage,
  } = store();

  useEffect(() => {
    const fetchTags = async () => {
      try {
        setLoading(true);
        const data = await getTagCount();
        console.log('data', data);
        let total = Math.ceil(data / tagsPerPage);
        total = total > 25 ? 25 : total;
        setTotalPages(total);
      } catch (error) {
        console.error(error);
        if (error instanceof Error && error.message) {
          console.error(error.message);
        } else {
          console.error('An error occurred');
        }
      } finally {
        setLoading(false);
      }
    };
    fetchTags();
  }, [setLoading, setTotalPages, tagsPerPage, totalPages]);

  const handlePageChange = (_: React.ChangeEvent<unknown>, page: number) => {
    setPageNumber(page);
  };

  return (
    <Stack spacing={2}>
      <Pagination
        count={totalPages}
        color="secondary"
        size="large"
        page={pageNumber}
        onChange={handlePageChange}
      />
    </Stack>
  );
}

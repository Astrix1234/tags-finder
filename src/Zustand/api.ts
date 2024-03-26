import axios from 'axios';

const apiUrl = 'https://api.stackexchange.com/2.3/tags';

export const getTags = async (
  page: number,
  pagesize: number,
  order: string,
  sort: string
) => {
  try {
    const response = await axios.get(apiUrl, {
      params: {
        page: page,
        pagesize: pagesize,
        order: order,
        sort: sort,
        site: 'stackoverflow',
      },
    });
    return response.data.items;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getTagCount = async () => {
  try {
    const response = await axios.get(apiUrl, {
      params: {
        site: 'stackoverflow',
        filter: 'total',
      },
    });
    return response.data.total;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default getTagCount;

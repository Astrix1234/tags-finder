import type { Meta, StoryFn } from '@storybook/react';
import BasicPagination from './BasicPagination';
import store from '../../Zustand/store';
import { setAutoFreeze } from 'immer';

setAutoFreeze(false);

// Mocking pagination data for the demonstration
const withZustandStore = (StoryFn: StoryFn) => {
  store.setState({
    pageNumber: 1,
    totalPages: 10,
  });

  return <StoryFn />;
};

const meta: Meta<typeof BasicPagination> = {
  title: 'Components/BasicPagination',
  component: BasicPagination,
  parameters: {
    layout: 'centered',
  },
  decorators: [withZustandStore],
};

export default meta;

export const Default: StoryFn<typeof BasicPagination> = () => (
  <BasicPagination />
);

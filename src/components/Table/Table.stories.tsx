import '../../index.css';
import type { Meta, StoryFn } from '@storybook/react';
import { Table } from './Table';
import store, { Tag } from '../../Zustand/store';
import { setAutoFreeze } from 'immer';

setAutoFreeze(false);

const mockTags: Tag[] = [
  { name: 'rose', count: 18, last_activity_date: Date.now() / 1000 },
  { name: 'cactus', count: 24, last_activity_date: Date.now() / 1000 },
  { name: 'grass', count: 31, last_activity_date: Date.now() / 1000 },
];

const withZustandStore = (StoryFn: StoryFn) => {
  store.setState({ pageTags: mockTags });
  return <StoryFn />;
};

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  decorators: [withZustandStore],
};

export default meta;

export const Default: StoryFn<typeof Table> = () => <Table />;

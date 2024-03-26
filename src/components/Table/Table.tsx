import scss from './Table.module.scss';
import store, { Tag } from '../../Zustand/store';
import { v4 as uuidv4 } from 'uuid';

export const Table = () => {
  const { pageTags } = store();

  return (
    <>
      <table className={scss.table}>
        <thead>
          <tr>
            <th>TAG</th>
            <th>POSTS COUNT</th>
          </tr>
        </thead>
        <tbody>
          {pageTags.map((tag: Tag) => (
            <tr key={uuidv4()}>
              <td>{tag.name}</td>
              <td>{tag.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

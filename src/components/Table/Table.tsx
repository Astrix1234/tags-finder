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
            <th className={scss.table__tags}>TAG</th>
            <th className={scss.table__posts}>POSTS COUNT</th>
          </tr>
        </thead>
        <tbody>
          {pageTags.map((tag: Tag) => (
            <tr key={uuidv4()}>
              <td className={scss.table__tags}>{tag.name}</td>
              <td className={scss.table__posts}>{tag.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

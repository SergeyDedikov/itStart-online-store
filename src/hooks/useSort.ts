import { ChangeEvent, useEffect, useState, useMemo } from 'react';

import { compareObjectsByKey } from '../utils/utils';
import { SortDirection, ItemKey } from '../types/sortTypes';

export interface SortProps<T> {
  data: T[];
  onSortChange(data: T[]): void;
  sortOptions: any[];
}

export function useSort<T>({ data, onSortChange, sortOptions }: SortProps<T>) {
  // Состояние
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
  const initialSortKey = sortOptions[0].value as ItemKey<T>;
  const [sortKey, setSortKey] = useState<ItemKey<T>>(initialSortKey);

  // Create a copy before sorting, as the original array is frozen in strict mode.
  // `useMemo` prevents multiple re-renderings if the shallow-compared value
  // of `data` hasn't changed.
  const sortedData = useMemo(() => {
    return [...data];
  }, [data]);

  // Выполнить сортировку и обратный вызов, 
  // когда изменилось локальное состояние или пропсы.
  useEffect(() => {
    if (sortedData?.length) {
      sortedData.sort(compareObjectsByKey(sortKey, sortDirection === "asc"));

      // Compare data before calling sort change handler.
      // TODO: this is imperfect performance-wise for arrays
      // of complex objects - flag sorting change by key/direction.
      const dataFlat = JSON.stringify(data);
      const sortedFlat = JSON.stringify(sortedData);

      if (dataFlat !== sortedFlat && onSortChange) {
        onSortChange(sortedData);
      }
    }
  }, [data, onSortChange, sortDirection, sortedData, sortKey]);

  /**
   * Обработайте изменения в ключе сортировки.
   * @param event: ChangeEvent<HTMLSelectElement>
   */
  const handleSortKeyChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newSortKey = event.target.value as ItemKey<T>;
    if (sortKey !== newSortKey) {
      setSortKey(newSortKey);
    }
  };

  /**
   * Обработайте изменения в направлении сортировки.
   */
  const handleDirectionToggle = () => {
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
  };

  return {
    handleDirectionToggle,
    handleSortKeyChange,
    sortDirection,
    sortKey,
  };
}

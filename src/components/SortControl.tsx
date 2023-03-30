import React from "react";

import cn from './SortControl.module.sass';
import { useSort } from "../hooks/useSort";
import { SortOption } from "../types/sortTypes";

export interface SortControlProps<T> {
  data: T[];
  onSortChange(data: T[]): void;
  sortOptions: any[];
}

/**
 * Sorts the supplied data with types provided
 * according to the given `sortOptions`.
 * `T` - data type
 * @param props: SortControlProps
 */
export function SortControl<T>(props: SortControlProps<T>) {
  const { sortOptions } = props;

  // Pass props to the custom sort hook to get sort functionality.
  const {
    handleDirectionToggle,
    handleSortKeyChange,
    sortDirection,
    sortKey
  } = useSort(props);

  function renderSortOptions({ label, value }: SortOption<T>, index: number) {
    const optionTitle = `Сортировка по ${label} (${value.toString()})`;
    return (
      <option
        key={index}
        label={`${label}`}
        title={optionTitle}
        value={value.toString()}
      />
    );
  }

  function renderSortOptionSelect() {
    return sortOptions?.length ? (
      <select onChange={handleSortKeyChange}>
        {sortOptions.map(renderSortOptions)}
      </select>
    ) : (
      <span>(Поля сортировки не заданы)</span>
    );
  }

  function renderSortDirectionIcon() {
    const buttonTitle =
      sortDirection === "asc"
        ? `по убыванию`
        : `по возрастанию`;
    return (
      <button title={buttonTitle} onClick={handleDirectionToggle}>
        {sortDirection === "asc" ? <>&#9660;</> : <>&#9650;</> }
      </button>
    );
  }

  return (

    <div className={cn['sort-control']}>
      <span>Сортировка: </span>
      {renderSortOptionSelect()}
      {renderSortDirectionIcon()}
    </div>

  );
}

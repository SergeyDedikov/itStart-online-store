export type SortableListItem = {
  name: string,
  price: number
};

export type SortDirection = "asc" | "desc";

export type ItemKey<T> = keyof T;

/**
 * Сопоставленный тип для преобразования универсального элемента списка типа `T` 
 * в пару метка / значение для использования в элементе управления select.
 */
export type SortOption<T> = {
  label: T[ItemKey<T>];
  value: ItemKey<T>;
};

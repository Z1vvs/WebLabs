import React from "react";

interface ListProps<T extends { id: number | string }> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

export default function List<T extends { id: number | string }>({
  items,
  renderItem,
}: ListProps<T>) {
  return (
    <>
      {items.map((item) => (
        <div key={item.id}>{renderItem(item)}</div>
      ))}
    </>
  );
}

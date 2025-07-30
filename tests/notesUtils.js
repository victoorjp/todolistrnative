export function addItem(items, nextId, text) {
  if (!text) return { items, nextId };
  const newItem = { id: nextId, text };
  return {
    items: [...items, newItem],
    nextId: nextId + 1
  };
}

export function editItem(items, id, newText) {
  return items.map(item => item.id === id ? { ...item, text: newText } : item);
}

export function deleteItem(items, id) {
  return items.filter(item => item.id !== id);
}
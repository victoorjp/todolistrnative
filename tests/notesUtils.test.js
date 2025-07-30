import { addItem, deleteItem, editItem } from './notesUtils';

describe('addItem', () => {
  it('Deve adicionar item quando texto não está vazio', () => {
    const items = [];
    const { items: newItems, nextId } = addItem(items, 1, 'Nova tarefa');
    expect(newItems).toEqual([{ id: 1, text: 'Nova tarefa' }]);
    expect(nextId).toBe(2);
  });

  it('Não deve adicionar item quando texto está vazio', () => {
    const items = [];
    const { items: newItems, nextId } = addItem(items, 1, '');
    expect(newItems).toEqual(items);
    expect(nextId).toBe(1);
  });
});

describe('editItem', () => {
  it('Deve editar o texto do item esperado', () => {
    const items = [{ id: 1, text: 'Texto antigo' }];
    const newItems = editItem(items, 1, 'Texto novo');
    expect(newItems[0].text).toBe('Texto novo');
  });
});

describe('deleteItem', () => {
  it('Deve remover o item esperado', () => {
    const items = [{ id: 1, text: 'Tarefa 1' }, { id: 2, text: 'Tarefa 2' }];
    const newItems = deleteItem(items, 1);
    expect(newItems).toEqual([{ id: 2, text: 'Tarefa 2' }]);
  });
});
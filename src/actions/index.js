export const VIEW_ITEM = 'VIEW_ITEM';

export function viewItem(itemId) {
  return {
    type: 'VIEW_ITEM',
    payload: itemId,
  };
}

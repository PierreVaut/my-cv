export const sortOrderConstants = {
  ASC: 'ascending',
  DESC: 'descending'
}

const sortBy = (sortOrder) => (a, b) =>
  sortOrder === sortOrderConstants.ASC ? a.order - b.order : b.order - a.order

export const sortAsc = sortBy(sortOrderConstants.ASC)
export const sortDesc = sortBy(sortOrderConstants.DESC)

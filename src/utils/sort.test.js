import { sortAsc, sortDesc } from './sort';

describe('compareFunc', () => {
  it('should return a positive number', () => {
    expect(sortAsc({ order: 0 }, { order: 42 }) < 0).toBeTruthy();
  });

  it('should return a negative number', () => {
    expect(sortAsc({ order: 11 }, { order: 10 }) > 0).toBeTruthy();
  });

  it('should return a negative number', () => {
    expect(sortDesc({ order: 0 }, { order: 37 }) > 0).toBeTruthy();
  });

  it('should return a positive number', () => {
    expect(sortDesc({ order: 37 }, { order: 35 }) < 0).toBeTruthy();
  });


  const unSorted = [
    {
      order: 547,
    },
    {
      order: 42,
    },
    {
      order: 0,
    },
    {
      order: 11,
    },
  ];

  it('should order array by ascending order', () => {
    const expected = [
      {
        order: 0,
      },
      {
        order: 11,
      },
      {
        order: 42,
      },
      {
        order: 547,
      },
    ];

    expect(unSorted.sort(sortAsc)).toEqual(expected);
  });

  it('should order array by descending order', () => {
    const expected = [
      {
        order: 547,
      },
      {
        order: 42,
      },
      {
        order: 11,
      },
      {
        order: 0,
      },
    ];

    expect(unSorted.sort(sortDesc)).toEqual(expected);
  });
});

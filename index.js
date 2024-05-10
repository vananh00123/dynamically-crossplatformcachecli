const flattenDepth = (arr, depth = 1) =>
  arr.reduce(
    (a, v) =>
      a.concat(depth > 1 && Array.isArray(v) ? flattenDepth(v, depth - 1) : v),
    [],
  );

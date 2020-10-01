export const formattedPing = result => {
  return result
    ? result
        .map(
          (el, i) =>
            `40 bytes packages: icmp_seq=${i + 1} ttl=255 time=${el} ms`
        )
        .join('\n')
    : 'Host is unreachable';
};

export const formattedNmap = result => {
  return `Port ${result.port} is ${result.status ? 'open' : 'closed'}`;
};

export const formattedDig = result => {
  return result
    .map(el =>
      Object.entries(el)
        .map(el => (el[0] !== 'entries' ? el[1] : ''))
        .join(' ')
    )
    .join('\n');
};

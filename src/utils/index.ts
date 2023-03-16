export const join = (...classes: (string | undefined)[]) =>
  classes.filter(Boolean).join(' ');

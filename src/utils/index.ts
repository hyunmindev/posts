type StyleClass = string | undefined;

export const join = (...classes: [StyleClass, StyleClass, ...StyleClass[]]) =>
  classes.filter(Boolean).join(' ');

type StyleClass = string | undefined;

interface Interaction {
  공유: boolean;
  조회: boolean;
  좋아요: boolean;
}

export const join = (...classes: [StyleClass, StyleClass, ...StyleClass[]]) =>
  classes.filter(Boolean).join(' ');

export const getInteraction = (slug: string): Interaction =>
  JSON.parse(localStorage.getItem(slug) ?? '{}');

export const setInteraction = (
  slug: string,
  interaction: Partial<Interaction>
) =>
  localStorage.setItem(
    slug,
    JSON.stringify({ ...getInteraction(slug), ...interaction })
  );

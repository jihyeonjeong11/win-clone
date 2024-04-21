/**
 * Functional Component
 */

type FC<TProps = Record<string, unknown>> = (
  props: React.PropsWithChildren<TProps>
) => React.JSX.Element | null;
// get TProps with {string: unknown} type and return jsx element or null

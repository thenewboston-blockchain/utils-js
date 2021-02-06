export const bemify = (
  classNames: string | undefined,
  suffix: string,
  isVisible: boolean = true
): { [className: string]: boolean } => {
  const classNameList = classNames?.split(' ') || null;

  if (classNameList) {
    return classNameList.reduce(
      (acc, className) => ({
        ...acc,
        [`${className}${suffix}`]: isVisible,
      }),
      {}
    );
  }

  return {};
};

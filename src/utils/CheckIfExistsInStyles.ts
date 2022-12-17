export const CheckIfExistsInStyles = (
  classes: string[],
  styles: {}
): string[] => {
  const checkedClasses = [];
  for (const _class of classes) {
    checkedClasses.push(styles[_class] || _class);
  }
  return checkedClasses;
};

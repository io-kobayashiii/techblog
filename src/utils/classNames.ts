type Props = (string | false | undefined)[];
export const classNames = (...args: Props) => args.filter(Boolean).join(' ');

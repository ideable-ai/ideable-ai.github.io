interface Props {
  children: React.ReactNode;
}
export default function ModalContent({ children }: Props) {
  return <div>{children}</div>;
}

export interface ToastrProps {
  message?: string;
}

export const Toastr: React.FC<ToastrProps> = ({ message }) => {
  return <div>{message}</div>;
};

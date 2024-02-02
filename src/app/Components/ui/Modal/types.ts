export interface ModalComponentProps {
    children: React.ReactNode;
    setOpen?: () => void
    top?: string;
    open:boolean;
   
  }
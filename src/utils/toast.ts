import { Slide, toast } from "react-toastify";

const showToast = (message: string, type: "success" | "error"): void => {
      if (type === "success") {
    toast.success(message, {
      position: "top-center",
      autoClose: 500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Slide,
    });
  } else if (type === "error") {
    toast.error(message, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Slide,
    });
  }
};
export default showToast;

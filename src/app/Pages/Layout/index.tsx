import Layouts from "../../Components/layouts/index";
import { useSelector } from "react-redux";
import { selectUser, selectRole, selectRedirectTo } from "./slice/selectors";
import { DefaultLayoutProps } from "./types";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
export const Layout = (props: DefaultLayoutProps) => {
  const { children } = props;

  const user = useSelector(selectUser);
  const role = useSelector(selectRole);
  const navigate = useNavigate();
  const redirectRoute = useSelector(selectRedirectTo);

  const { id } = useParams();

  useEffect(() => {
    if (redirectRoute.path !== null && redirectRoute.param) {
      navigate(`${redirectRoute.path}${redirectRoute.param}`);
    } else if (redirectRoute.path !== null) {
      navigate(`${redirectRoute.path}`);
    }
  }, [redirectRoute]);

  return (
    <Layouts role={role} user={user}>
      {children}
    </Layouts>
  );
};

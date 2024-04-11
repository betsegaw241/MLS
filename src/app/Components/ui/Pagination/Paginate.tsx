import { Pagination, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            color: "#fff",
            backgroundColor: "blue",
          },
        },
      },
    },
  },
});

interface Paginate {
  pages: number;
  handlePageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
  page: number;
}
const Paginate = (props: Paginate) => {
  const { pages, handlePageChange, page } = props;
  return (
    <ThemeProvider theme={theme}>
      <Pagination
        count={pages}
        onChange={handlePageChange}
        page={page}
        variant="outlined"
        shape="rounded"
      />
    </ThemeProvider>
  );
};

export default Paginate;
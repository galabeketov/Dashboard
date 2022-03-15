import { Box, Divider, Typography } from "@mui/material";
import { useRouter } from "next/router";

export default function Title() {
  const { pathname } = useRouter();
  const pathArr = pathname.split("/");
  const pageName = pathArr[pathArr.length - 1];

  return (
    <Box
      sx={{
        pb: 2,
        // borderBottom: "1px solid",
        // borderBottomColor: (theme) => theme.palette.secondary.dark,
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
        {pageName.slice(0, 1).toLocaleUpperCase() +
          pageName.slice(1).toLocaleLowerCase()}
      </Typography>

      <Typography variant="body1">
        {pathArr.map((item, i) => (
          <span>
            <span
              style={{
                fontSize: 14,
                color: `${
                  i !== pathArr.length - 1 ? "blue" : "rgba(0 , 0 , 0 , .6)"
                }`,
              }}
            >
              {item.slice(0, 1).toUpperCase() +
                item.slice(1).toLocaleLowerCase()}
            </span>
            <span>{i > 0 && i < pathArr.length - 1 ? "  /   " : ""}</span>
          </span>
        ))}
      </Typography>

      <Divider sx={{ py: 2 }} />
    </Box>
  );
}

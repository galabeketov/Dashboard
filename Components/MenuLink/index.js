import { ListItemButton, ListItemText } from "@mui/material";
import Link from "next/link";

export default function MenuLink({ primary, href }) {
  return (
    <Link href={href}>
      <a>
        <ListItemButton sx={{ pl: 10, fontSize: "10px !important" }}>
          <ListItemText primary={primary} />
        </ListItemButton>
      </a>
    </Link>
  );
}

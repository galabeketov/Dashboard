import { Box } from "@mui/system";
import Image from "next/image";
import React from "react";

const AvatarImg = ({ width = "100%", height = "100%", src, alt = "image" }) => {
  return (
    <Box
      sx={{
        width: width,
        height: height,
        borderRadius: "50%",
        overflow: "hidden",
      }}
    >
      <Image src="/avatar-1.jpg" alt="avatar" width={width} height={height} />
    </Box>
  );
};

export default AvatarImg;

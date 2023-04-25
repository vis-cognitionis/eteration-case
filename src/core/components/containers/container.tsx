import React from "react";
import { Stack, StackProps, SxProps, styled } from "@mui/material";
import Text from "core/components/typography/typography";

const Container = styled(Stack)<StackProps>(() => ({
  padding: "15px",
  gap: "15px",
  width: "220px",
  height: "158px",
  background: "#FFFFFF",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  alignItems: "flex-start",
  boxSizing: "border-box",
  position: "relative",
}));

const CustomContainer = ({
  children,
  content,
  sx,
}: {
  children: React.ReactNode;
  content: string;
  sx?: SxProps;
}) => {
  return (
    <Container sx={sx}>
      <Text
        sx={{ position: "absolute", top: -25, left: 0 }}
        variant="caption"
        content={content}
        color="rgba(51, 51, 51, 0.7)"
      />
      {children}
    </Container>
  );
};

export default CustomContainer;

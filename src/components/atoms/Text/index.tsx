import React from "react";
import { Text as CUText } from "@chakra-ui/react";
import type { TextProps } from "@chakra-ui/react";
import colors from "@/lib/theme/colors";

type Props = TextProps & {
  light?: boolean;
};

const Text: React.FC<Props> = ({ light, ...props }) => (
  <CUText {...props} color={light ? colors.font.gray : colors.font.black} />
);

export default Text;

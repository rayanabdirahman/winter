import React from "react";
import { Heading as CUHeading } from "@chakra-ui/react";
import type { HeadingProps } from "@chakra-ui/react";
import colors from "@/lib/theme/colors";

type Props = HeadingProps;

const Heading: React.FC<Props> = (props) => (
  <CUHeading {...props} color={colors.font.black} />
);

export default Heading;

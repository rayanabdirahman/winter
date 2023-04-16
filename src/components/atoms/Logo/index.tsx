import React from "react";
import styles from "./styles.module.css";
import Text from "../Text";

type Props = {
  light?: boolean;
};

const Logo: React.FC<Props> = () => {
  return (
    <span className={styles.logo}>
      <span className={styles.logoW}>w</span>
      <Text as="b" fontSize="xl">
        inter
      </Text>
    </span>
  );
};

export default Logo;

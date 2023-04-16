import React, { PropsWithChildren } from "react";
import { Container } from "@chakra-ui/react";
import Header from "@/components/organisms/Header";

type Props = PropsWithChildren;

const AppLayout: React.FC<Props> = ({ children }) => (
  <Container maxW="container.lg">
    <Header />
    {children}
  </Container>
);

export default AppLayout;

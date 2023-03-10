import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";

type Props = {
  children: React.ReactNode;
};

const AppLayout: React.FC<Props> = ({ children }) => (
  <Grid
    templateAreas={`"header header header"
                  "main main main"
                  "footer footer footer"`}
  >
    <GridItem px={{ base: 4, md: 10, lg: 10, xl: 10 }} area="header">
      <Navbar isSignedIn={true} />
    </GridItem>
    <GridItem px={{ base: 4, md: 10, lg: 10, xl: 10 }} area="main">
      {children}
    </GridItem>
    <GridItem px={{ base: 4, md: 10, lg: 10, xl: 10 }} area="footer">
      <Footer />
    </GridItem>
  </Grid>
);

export default AppLayout;

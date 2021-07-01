import { FC } from "react";
import MultiplePages from "../templates/MultiplePages";

const Index: FC = () => (
  <MultiplePages>
    <MultiplePages.Page as="a"></MultiplePages.Page>
    <MultiplePages.Page as="b"></MultiplePages.Page>
  </MultiplePages>
);

export default Index;

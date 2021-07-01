import { FC, ReactElement } from "react";

interface IPageProps {
  as: string;
}

interface IMultiplePagesProps {
  children: ReactElement<IPageProps>[];
}

interface ICompound {
  Page: FC<IPageProps>;
}

/**
 * COMPOUND 
 * Page with inner pages and success counter
 */
const MultiplePages: FC<IMultiplePagesProps> & ICompound = ({ children }) => (
  <main>
    {children}
  </main>
);

MultiplePages.Page = ({ as }) => {
  console.log(as);

  return (<div></div>);
}

export default MultiplePages;

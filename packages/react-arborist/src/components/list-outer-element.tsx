import { forwardRef } from "react";
import { useTreeApi } from "../context";
import { treeBlur } from "../state/focus-slice";
import { Cursor } from "./cursor";
import { ScrollArea } from './scroll-area';


export const ListOuterElement = forwardRef(function Outer(
  props: React.HTMLProps<HTMLDivElement>,
  ref
) {
  const { children, ...rest } = props;
  const tree = useTreeApi();
  // if (!tree || !children) {
  //   return (
  //     <div
  //       // @ts-ignore-next-line
  //       ref={ref}
  //       {...rest}
  //       onClick={(e) => {
  //         if (e.currentTarget === e.target) tree.deselectAll();
  //       }}
  //     >
  //       <DropContainer />
  //       {children}
  //     </div>
  //   );
  // }

  return (
    <ScrollArea
      className="edimov"
    // @ts-ignore-next-line
      ref={ref}
      {...rest}
      type="always"
      // onClick={(e) => {
      //   // @ts-ignore-next-line
      //   if (e.currentTarget === e.target) tree.deselectAll();
      // }}
    >
      <DropContainer />
      {children}
    </ScrollArea>
  );
});

const DropContainer = () => {
  const tree = useTreeApi();
  return (
    <div
      style={{
        height: tree.visibleNodes.length * tree.rowHeight,
        width: "100%",
        position: "absolute",
        left: "0",
        right: "0",
      }}
    >
      <Cursor />
    </div>
  );
};

import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

export const ScrollArea = ({ children, onScroll }: any) => {
  return (
    <ScrollAreaPrimitive.Root className="ScrollAreaRoot" type="always">
      <ScrollAreaPrimitive.Viewport className="ScrollAreaViewport">
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollAreaPrimitive.Scrollbar className="ScrollAreaScrollbar" orientation="vertical">
        <ScrollAreaPrimitive.Thumb className="ScrollAreaThumb" />
      </ScrollAreaPrimitive.Scrollbar>
      <ScrollAreaPrimitive.Scrollbar className="ScrollAreaScrollbar" orientation="horizontal">
        <ScrollAreaPrimitive.Thumb className="ScrollAreaThumb" />
      </ScrollAreaPrimitive.Scrollbar>
      <ScrollAreaPrimitive.Corner className="ScrollAreaCorner" />
    </ScrollAreaPrimitive.Root>
  )
};

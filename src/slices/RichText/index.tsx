import type { Content } from "@prismicio/client";
import { PrismicRichText, type SliceComponentProps } from "@prismicio/react";

type RichTextProps = SliceComponentProps<any>;

const RichText = ({ slice }: RichTextProps) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.content} />
    </section>
  );
};

export default RichText;

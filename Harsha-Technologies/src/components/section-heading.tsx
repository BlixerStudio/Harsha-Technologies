type SectionHeadingProps = {
  title: string;
  text?: string;
};

export function SectionHeading({ title, text }: SectionHeadingProps) {
  return (
    <div className="mb-9 max-w-3xl">
      <h2 className="text-3xl font-black text-brand-navy sm:text-4xl">{title}</h2>
      {text ? <p className="mt-4 text-base leading-8 text-muted">{text}</p> : null}
    </div>
  );
}

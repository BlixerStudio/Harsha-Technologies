type FAQListProps = {
  items: Array<{ question: string; answer: string }>;
};

export function FAQList({ items }: FAQListProps) {
  return (
    <div className="divide-y divide-line rounded-lg border border-line bg-white">
      {items.map((item) => (
        <details className="group p-5" key={item.question}>
          <summary className="cursor-pointer list-none text-base font-extrabold text-brand-navy">
            {item.question}
          </summary>
          <p className="mt-3 text-sm leading-7 text-muted">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

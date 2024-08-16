type TermsProps = {
  id: number;
  description: string;
};

export const Terms = ({ id, description }: TermsProps) => {
  return (
    <div className="bg-black min-h-[100px]  flex justify-center pb-8">
      <div className="max-w-[700px] text-sm text-center">
        <span className="align-super">{id}</span>
        <p className="text-white">{description}</p>
      </div>
    </div>
  );
};

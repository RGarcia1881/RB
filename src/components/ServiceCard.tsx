type Props = {
  icon: string;
  title: string;
  description: string;
};

function ServiceCard({ icon, title, description }: Props) {
  return (
    <div className="group w-64 h-64 border border-secondary-services hover:border-primary relative overflow-hidden transition-all duration-300">
      <div className="flex flex-col items-center justify-center h-full p-4 transition-all duration-300 group-hover:translate-y-[-21%]">
        <i className={`bx ${icon} text-4xl mb-2`}></i>
        <h3 className="text-sm uppercase text-center tracking-wider">
          {title}
        </h3>
      </div>
      <div className="absolute inset-0 flex items-center justify-center px-4 text-center opacity-0 group-hover:opacity-100 transition-all duration-300">
        <p className="text-sm font-abel text-secondary">{description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;

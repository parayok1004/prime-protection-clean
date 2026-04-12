interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
}

export function ServiceCard({ image, title, description }: ServiceCardProps) {
  return (
    <div className="group bg-card rounded-lg overflow-hidden border border-border card-hover">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          width={800}
          height={600}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        <div className="divider-gold mb-3" />
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

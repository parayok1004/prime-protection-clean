import { Link } from "@tanstack/react-router";

interface HeroSectionProps {
  image: string;
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaTo?: string;
  secondaryCta?: string;
  secondaryTo?: string;
}

export function HeroSection({ image, title, subtitle, ctaText, ctaTo, secondaryCta, secondaryTo }: HeroSectionProps) {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center">
      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight">
          {title}
        </h1>
        <div className="divider-gold mx-auto mb-6" />
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
        {(ctaText || secondaryCta) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {ctaText && ctaTo && (
              <Link to={ctaTo} className="btn-gold text-sm">{ctaText}</Link>
            )}
            {secondaryCta && secondaryTo && (
              <Link to={secondaryTo} className="btn-outline-gold text-sm">{secondaryCta}</Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

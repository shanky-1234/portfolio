import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { floatingCards } from "../utils/floatingCards";

gsap.registerPlugin(ScrollTrigger);

function FloatingCardShowcase() {
  const sectionRef = useRef(null);

  const renderCard = (card, index) => (
    <article
      className="floating-showcase-card"
      key={card.title}
      data-slot={index}
      style={{ "--card-index": index }}
    >
      <div className={`floating-showcase-artwork${card.image ? "" : " is-placeholder"}`}>
        {card.image && (
          <img src={card.image} alt={card.alt} loading="lazy" draggable={false} />
        )}
      </div>
    </article>
  );

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".floating-showcase-card", sectionRef.current);
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reducedMotion) return;

      cards.forEach((card, index) => {
        const artwork = card.querySelector(".floating-showcase-artwork");
        const direction = index % 2 === 0 ? -1 : 1;
        const travel = 12 + (index % 4) * 4;

        gsap.fromTo(
          card,
          { y: direction * travel },
          {
            y: direction * -travel,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          },
        );

        gsap.to(artwork, {
          y: direction * 8,
          rotation: direction * 1.5,
          duration: 3 + (index % 3) * 0.6,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: index * 0.16,
        });
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="floating-showcase mb-10 md:mb-20 section-wrapper"
      aria-labelledby="floating-showcase-title"
    >
      <div className="floating-showcase-stage">
        <div className="floating-showcase-cards">
          {floatingCards.slice(0, 4).map(renderCard)}
        </div>

        <div className="floating-showcase-copy">
          <h1 className="leading-16 md:leading-25">BEYOND THE INTERFACE</h1>
          <p>
            Social media creatives, packaging concepts and visual experiments — a glimpse into
            the things I love creating beyond the screen.
          </p>
        </div>

        <div className="floating-showcase-cards">
          {floatingCards.slice(4).map((card, index) => renderCard(card, index + 4))}
        </div>
      </div>
    </section>
  );
}

export default FloatingCardShowcase;

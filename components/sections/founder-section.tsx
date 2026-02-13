"use client";
import Image from "next/image";

const ManBehind = () => {
  return (
    <section className="bg-black py-24 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-end">
          
          {/* IMAGE COLUMN */}
          <div className="order-2 md:order-1 relative w-full aspect-[3/4] max-w-sm md:max-w-md ml-auto md:mr-0 grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out overflow-hidden">
             <Image
              src="/founder.jpg"
              alt="Santhosh Perumal"
              fill
              className="object-cover hover:scale-105 transition-transform duration-1000"
              priority
            />
          </div>

          {/* TEXT COLUMN */}
          <div className="order-1 md:order-2 flex flex-col justify-end pb-4">
            <h4 className="text-neutral-500 font-mono text-xs md:text-sm tracking-[0.3em] uppercase mb-6 md:mb-8">
               Man Behind
            </h4>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tighter leading-[0.9] mb-8 md:mb-10">
              Santhosh<br />
              <span className="text-neutral-500">Perumal.</span>
            </h1>

            <p className="text-neutral-400 text-lg md:text-xl font-light leading-relaxed max-w-sm">
               As a founder and creator, I see technology as a tool to build meaning, not just features. That mindset drives everything we create with clarity, purpose, and a focus on lasting impact.
            </p>

            <div className="mt-10 md:mt-12 not-italic">
                <a href="https://www.linkedin.com/in/santhosh7r/" target="_blank" className="text-white border-b border-white pb-1 hover:text-neutral-400 hover:border-neutral-400 transition-all text-sm uppercase tracking-wider">
                    Connect on LinkedIn ↗
                </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ManBehind;

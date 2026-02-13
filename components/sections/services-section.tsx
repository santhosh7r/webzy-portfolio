

import ServiceRow from "../ui/service-card";

const Services = () => {
  return (
    <section className="bg-black py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-10 md:mb-20">
          <h2 className="text-5xl md:text-7xl font-bold text-white">
            Services
          </h2>
          <span className="text-white/50 text-sm tracking-wide hidden md:block">
            03 SERVICES
          </span>
        </div>

        {/* Service Rows */}
        <div className="divide-y divide-white/10">
          <ServiceRow
            index="01"
            title="Websites & Landing Pages"
            desc="High-conversion websites and landing pages built for speed, clarity, and brand authority."
            tags={[
              "Web Design",
              "Landing Pages",
              "UI/UX",
              "Performance",
              "SEO Ready",
            ]}
          />

          <ServiceRow
            index="02"
            title="Web Apps & E-commerce"
            desc="Scalable web applications and e-commerce platforms engineered for real business workflows."
            tags={["Web Apps", "E-commerce", "Custom Backend", "Admin Panels"]}
          />

          <ServiceRow
            index="03"
            title="SaaS Products (MVP → Scale)"
            desc="We help founders design, build, and scale SaaS products — from MVP to production."
            tags={[
              "MVP Build",
              "SaaS Architecture",
              "Product Design",
              "Scaling",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;

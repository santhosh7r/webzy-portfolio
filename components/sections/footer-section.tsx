import { Footer } from "@/components/ui/footer";
import { Instagram, Youtube } from "lucide-react";

function Footercomp() {
  return (
    <div className="w-full relative">
      <Footer
        brandName="webzy studio"
        navLinks={[
          { href: "/case-study", label: "Case Studies" },
          {
            href: "https://cal.com/santhosh-perumal",
            label: "Book a Call",
          },
        ]}
        socialLinks={[
          {
            icon: <Instagram className="h-5 w-5 text-[#4b8aef]" />,
            href: "https://www.instagram.com/webzystudios?igsh=YnUzNTNiZWpnajVs&utm_source=qr",
            label: "Instagram",
          },
          {
            icon: <Youtube className="h-5 w-5 text-[#4b8aef]" />,
            href: "https://www.youtube.com/@santhosh7r",
            label: "YouTube",
          },
        ]}
        copyright={{
          text: "© 2025 Webzy Studios",
          license: "All rights reserved",
        }}
      />
    </div>
  );
}

export { Footercomp };

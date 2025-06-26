import { forwardRef } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CustomButton } from "@/components/ui/custom-button"
import { NavLink } from "@/components/ui/nav-link"

interface ContactSectionProps {
  className?: string
}

const footerLinks = {
  quickLinks: [
    { name: "About", href: "#about" },
    { name: "Speaking", href: "#speaking" },
    { name: "Contact", href: "#contact" },
  ],
  services: ["Keynote speaking", "Workshop facilitation", "Leadership coaching"],
  social: ["Instagram", "LinkedIn"],
}

export const ContactSection = forwardRef<HTMLDivElement, ContactSectionProps>(({ className = "" }, ref) => {
  return (
    <div ref={ref} className={`min-h-screen bg-white relative ${className}`}>
      <div className="container mx-auto px-6 py-20">
        <div className="mb-8">
        <span className="text-[#FF6B35] text-base tracking-wide uppercase">Contact</span>
        </div>

        <div>
          <h2 className="text-6xl font-light text-[#2C2C2C] mb-16 leading-tight font-serif">
            Let's discuss how we can create an unforgettable experience for your next event.
          </h2>

          <form className="grid md:grid-cols-2 gap-6 mb-16 max-w-4xl">
            <div>
              <label className="text-[#FF6B35] text-sm font-medium mb-2 block">Name</label>
              <Input className="border-gray-300 rounded-full p-4" />
            </div>
            <div>
              <label className="text-[#FF6B35] text-sm font-medium mb-2 block">Email</label>
              <Input type="email" className="border-gray-300 rounded-full p-4" />
            </div>
            <div className="md:col-span-2">
              <label className="text-[#FF6B35] text-sm font-medium mb-2 block">Message</label>
              <Textarea className="border-gray-300 rounded-full p-4 min-h-[120px]" />
            </div>
            <div className="md:col-span-2">
              <CustomButton type="submit" size="md">
                Send
              </CustomButton>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 pt-12">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2 max-w-2/3" >
              <h3 className="text-[#2C2C2C] font-medium mb-4">Roy Armale</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Inspiring innovation through storytelling and human-centered leadership.
              </p>
            </div>

            <div>
              <h4 className="text-[#2C2C2C] font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                {footerLinks.quickLinks.map((link) => (
                  <li key={link.name}>
                    <NavLink href={link.href} className="hover:text-[#FF6B35] transition-colors">
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[#2C2C2C] font-medium mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                {footerLinks.services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[#2C2C2C] font-medium mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                {footerLinks.social.map((platform) => (
                  <li key={platform}>{platform}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

ContactSection.displayName = "ContactSection"

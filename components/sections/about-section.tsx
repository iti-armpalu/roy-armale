import { forwardRef } from "react"
import Image from "next/image"

interface AboutSectionProps {
    className?: string
}

export const AboutSection = forwardRef<HTMLDivElement, AboutSectionProps>(({ className = "" }, ref) => {
    return (
        <div ref={ref} className={`min-h-screen bg-white relative ${className}`}>
            <div className="container mx-auto px-6 py-20">
                <div className="mb-8">
                    <span className="text-[#FF6B35] text-base tracking-wide uppercase">About Roy</span>
                </div>


                <h2 className="text-7xl text-[#2C2C2C] mb-8 leading-none">
                    Transforming Organizations Through <span className="text-[#FF6B35]">Human-Centered Innovation</span>
                </h2>
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <p className="text-[#666] text-lg leading-relaxed">
                            With over 15 years of experience leading digital transformation at Fortune 500 companies, Roy brings a
                            unique perspective on how technology and human creativity intersect to drive breakthrough results.
                        </p>
                    </div>

                    <div className="bg-gray-200 aspect-[4/3] rounded-lg">
                        <Image
                            src="/placeholder.svg?height=400&width=500&text=Roy+Armale+Portrait"
                            alt="Roy Armale"
                            width={300}
                            height={200}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
})

AboutSection.displayName = "AboutSection"

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
                            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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

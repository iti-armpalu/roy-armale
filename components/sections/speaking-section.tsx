import { forwardRef } from "react"
import { TopicSlider } from "../ui/topic-slider"

interface SpeakingSectionProps {
    className?: string
}

const topicCards = [
    {
        id: 1,
        title: "The Future of Work",
        subtitle: "Key Insights & Strategies",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 2,
        title: "Innovation Leadership",
        subtitle: "Driving Change Through Vision",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 3,
        title: "Digital Strategy",
        subtitle: "Building Sustainable Growth",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 4,
        title: "Digital Strategy",
        subtitle: "Building Sustainable Growth",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
]

const empathyCards = [
    {
        id: 1,
        title: "The Future of Work",
        subtitle: "Key Insights & Strategies",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 2,
        title: "Digital Strategy",
        subtitle: "Building Sustainable Growth",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 3,
        title: "Innovation Leadership",
        subtitle: "Driving Change Through Vision",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
]

export const SpeakingSection = forwardRef<HTMLDivElement, SpeakingSectionProps>(({ className = "" }, ref) => {
    return (
        <div ref={ref} className={`min-h-screen bg-[#2E280B] relative ${className}`}>
            <div className="container mx-auto px-6 py-20">
                <div className="mb-8">
                    <span className="text-[#FF6B35] text-base tracking-wide uppercase">Speaking topics</span>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 mb-16 items-center">
                    <div>
                        <h2 className="text-6xl font-light text-white mb-8 leading-tight">
                            Expertise That Inspires Action
                        </h2>
                    </div>
                    <div>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Customizable keynotes designed to meet your audience's specific needs and challenges
                        </p>
                    </div>
                </div>

                {/* Digital Transformation */}

                <div className="flex mb-8">
                    <div className="grid lg:grid-cols-6 gap-8 items-start">
                        {/* <div> */}
                        <div className="lg:col-span-2">
                            <h3 className="text-2xl font-light text-white mb-4 font-serif">Digital Transformation</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Navigate the future of work with human-centered technology strategies that drive sustainable growth.
                            </p>
                        </div>
                        <div className="lg:col-span-4">
                            <TopicSlider cards={topicCards} />
                        </div>
                    </div>
                </div>

                {/* The Empathy Gradient */}

                <div className="flex mb-8">
                    <div className="grid lg:grid-cols-6 gap-8 items-start">
                        {/* <div> */}
                        <div className="lg:col-span-2">
                            <h3 className="text-2xl font-light text-white mb-4 font-serif">The Empathy Gradient</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Build resilient teams that thrive in uncertainty and change, turning challenges into opportunities.
                            </p>
                        </div>
                        <div className="lg:col-span-4">
                            <TopicSlider cards={empathyCards} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})

SpeakingSection.displayName = "SpeakingSection"

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import {
  Shield,
  BookOpen,
  HelpCircle,
  MapPin,
  Users,
  Sparkles,
} from "lucide-react";

export default function ServicesSection() {
  const features = [
    {
      icon: Shield,
      title: "Blockchain Security",
      description:
        "Your spiritual journey is protected with cutting-edge blockchain technology.",
    },
    {
      icon: BookOpen,
      title: "Sacred Resources",
      description:
        "Access verified books, videos, and teachings from authorized spiritual guides.",
    },
    {
      icon: HelpCircle,
      title: "Ask Questions",
      description:
        "Get personalized answers from experienced spiritual practitioners.",
    },
    {
      icon: MapPin,
      title: "Spiritual Tours",
      description:
        "Join guided tours to sacred places and deepen your spiritual practice.",
    },
    {
      icon: Users,
      title: "Verified Guides",
      description:
        "Learn from authenticated spiritual teachers and verified practitioners.",
    },
    {
      icon: Sparkles,
      title: "AI Screening",
      description:
        "Advanced AI ensures appropriate content and meaningful interactions.",
    },
  ];

  return (
    <div className="flex flex-col justify-center my-21">
      <div className="flex flex-col gap-8 mb-21">
        <h2 className="text-5xl font-extrabold text-center">Our Services</h2>
        <p className="text-center text-2xl text-gray-600 dark:text-gray-300">
          Explore our range of spiritual services designed to guide and support
          you on your journey.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mx-12">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="group hover:cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-background/90"
          >
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-background/25 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                {feature.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

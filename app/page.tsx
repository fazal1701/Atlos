import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Trophy, Target, TrendingUp, Users, PlayCircle } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Enhanced with Visual Elements */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 shadow-lg">
              <Trophy className="w-4 h-4" />
              Your Journey from Athlete to Professional
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-balance">
              Transform Your Athletic Passion Into
              <span className="text-primary"> Career Excellence</span>
            </h1>

            <p className="text-xl lg:text-2xl text-muted-foreground text-balance max-w-2xl mx-auto">
              <span className="font-semibold text-primary">Atlos Platform</span> transforms student-athletes into career-ready professionals by teaching analytics, leadership,
              and business fundamentals through the sports you love.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="text-lg h-14 px-8 shadow-lg hover:shadow-xl transition-shadow" asChild>
                <Link href="/onboarding">
                  Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg h-14 px-8 bg-transparent hover:bg-primary/5">
                Watch Demo
              </Button>
            </div>

            {/* Mock Platform Preview - Hero Dashboard */}
            <div className="pt-12">
              <div className="relative rounded-xl border-2 border-primary/20 shadow-2xl overflow-hidden bg-background/50 backdrop-blur-sm group cursor-pointer hover:border-primary/40 transition-all">
                {/* Hero Dashboard Image */}
                <img
                  src="/hero-dashboard.svg"
                  alt="Atlos Platform Dashboard Preview"
                  className="w-full h-auto"
                />

                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
                  <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <PlayCircle className="w-12 h-12 text-primary" />
                  </div>
                </div>
              </div>

              {/* Caption */}
              <p className="text-center mt-4 text-sm text-muted-foreground">
                Transform your athletic data into career insights with Atlos Platform
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Student Athletes", value: "10K+" },
              { label: "Career Pathways", value: "9" },
              { label: "Video Hours Analyzed", value: "50K+" },
              { label: "Job Placement Rate", value: "94%" },
            ].map((stat) => (
              <div key={stat.label} className="text-center space-y-2">
                <div className="text-4xl lg:text-5xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-balance">Everything You Need to Succeed</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              From game film analysis to career mentorship, we've built the complete platform for student-athlete
              success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Personalized Learning",
                description: "AI-powered curriculum adapts to your sport, position, and career goals.",
              },
              {
                icon: TrendingUp,
                title: "Game Film Analysis",
                description: "Upload and analyze your game footage with advanced computer vision tools.",
              },
              {
                icon: Users,
                title: "Career Pathways",
                description: "Explore 9 career tracks from analytics to coaching to business.",
              },
              {
                icon: Trophy,
                title: "Portfolio Building",
                description: "Showcase your work to recruiters and college admissions.",
              },
              {
                icon: Target,
                title: "Live Observation",
                description: "Capture data during games with our Stadium Lab mobile app.",
              },
              {
                icon: Users,
                title: "Community & Mentorship",
                description: "Connect with peers and industry professionals.",
              },
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="group p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-all hover:shadow-lg relative overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative">
                  {/* Icon with animated background */}
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>

                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>

                  {/* Mock visual indicator */}
                  <div className="mt-4 flex items-center gap-2 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold text-balance">Ready to Level Up Your Future?</h2>
            <p className="text-lg text-muted-foreground text-balance">
              Join thousands of student-athletes who are turning their passion for sports into successful careers.
            </p>
            <Button size="lg" className="text-lg h-14 px-8" asChild>
              <Link href="/onboarding">
                Start Your Journey <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

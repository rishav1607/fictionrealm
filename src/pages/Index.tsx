import Header from "@/components/Header";
import StoryCard from "@/components/StoryCard";
import StatsCard from "@/components/StatsCard";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { BookOpen, Eye, Users, MessageSquare, TrendingUp, Sparkles, Heart, Clock } from "lucide-react";

// Import generated images
import heroImage from "@/assets/hero-shadow-realm.jpg";
import cyberNexusImage from "@/assets/story-cyber-nexus.jpg";
import heartsHarmonyImage from "@/assets/story-hearts-harmony.jpg";
import lostProphecyImage from "@/assets/story-lost-prophecy.jpg";
import quantumDreamsImage from "@/assets/story-quantum-dreams.jpg";
import vampireAcademyImage from "@/assets/story-vampire-academy.jpg";

const Index = () => {
  const statsData = [
    { icon: <BookOpen className="h-6 w-6" />, value: 6, label: "Stories" },
    { icon: <Eye className="h-6 w-6" />, value: 0, label: "Reads" },
    { icon: <Users className="h-6 w-6" />, value: 6, label: "Users" },
    { icon: <MessageSquare className="h-6 w-6" />, value: 48, label: "Comments" },
  ];

  const trendingStories = [
    { title: "Cyber Nexus Protocol", image: cyberNexusImage, chapters: 6, views: 1245, comments: 23, status: "trending" as const },
    { title: "Shadow Realm Chronicles", image: heroImage, chapters: 8, views: 2156, comments: 45, status: "trending" as const },
    { title: "Hearts in Harmony", image: heartsHarmonyImage, chapters: 12, views: 3421, comments: 67, status: "trending" as const },
    { title: "Magenetic: The Lost Prophecy", image: lostProphecyImage, chapters: 15, views: 4532, comments: 89, status: "trending" as const },
    { title: "Quantum Dreams", image: quantumDreamsImage, chapters: 3, views: 876, comments: 12, status: "trending" as const },
  ];

  const newStories = [
    { title: "Cyber Nexus Protocol", image: cyberNexusImage, chapters: 6, views: 245, comments: 5, status: "new" as const },
    { title: "Hearts in Harmony", image: heartsHarmonyImage, chapters: 4, views: 123, comments: 8, status: "new" as const },
    { title: "Shadow Realm Chronicles", image: heroImage, chapters: 8, views: 567, comments: 15, status: "new" as const },
    { title: "Quantum Dreams", image: quantumDreamsImage, chapters: 2, views: 89, comments: 3, status: "new" as const },
    { title: "Vampire Academy: Blood Wars", image: vampireAcademyImage, chapters: 7, views: 432, comments: 12, status: "new" as const },
    { title: "Magenetic: The Lost Prophecy", image: lostProphecyImage, chapters: 15, views: 654, comments: 21, status: "new" as const },
  ];

  const popularStories = [
    { title: "Cyber Nexus Protocol", image: cyberNexusImage, chapters: 6, views: 8945, comments: 156, status: "popular" as const },
    { title: "Hearts in Harmony", image: heartsHarmonyImage, chapters: 12, views: 7234, comments: 134, status: "popular" as const },
    { title: "Shadow Realm Chronicles", image: heroImage, chapters: 8, views: 9876, comments: 245, status: "popular" as const },
    { title: "Magenetic: The Lost Prophecy", image: lostProphecyImage, chapters: 15, views: 12456, comments: 356, status: "popular" as const },
    { title: "Quantum Dreams", image: quantumDreamsImage, chapters: 3, views: 5432, comments: 89, status: "popular" as const },
    { title: "Vampire Academy: Blood Wars", image: vampireAcademyImage, chapters: 7, views: 6789, comments: 123, status: "popular" as const },
  ];

  const latestStories = [
    { title: "Quantum Dreams", image: quantumDreamsImage, chapters: 3, views: 234, comments: 7, status: "latest" as const },
    { title: "Cyber Nexus Protocol", image: cyberNexusImage, chapters: 6, views: 456, comments: 12, status: "latest" as const },
    { title: "Hearts in Harmony", image: heartsHarmonyImage, chapters: 12, views: 789, comments: 23, status: "latest" as const },
    { title: "Magenetic: The Lost Prophecy", image: lostProphecyImage, chapters: 15, views: 1234, comments: 45, status: "latest" as const },
    { title: "Shadow Realm Chronicles", image: heroImage, chapters: 8, views: 567, comments: 18, status: "latest" as const },
    { title: "Vampire Academy: Blood Wars", image: vampireAcademyImage, chapters: 7, views: 890, comments: 34, status: "latest" as const },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                <Sparkles className="h-4 w-4 text-primary mr-2" />
                <span className="text-primary text-sm font-medium">Featured</span>
              </div>
              
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-4">
                  Shadow Realm Chronicles
                </h1>
                <p className="text-xl text-muted-foreground mb-2">
                  by Community Authors
                </p>
                <p className="text-muted-foreground mb-8">
                  Discover amazing stories from talented writers around the world.
                </p>
              </div>
              
              <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-glow">
                <BookOpen className="mr-2 h-5 w-5" />
                Start Reading
              </Button>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-hero">
                <img 
                  src={heroImage} 
                  alt="Shadow Realm Chronicles"
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {statsData.map((stat, index) => (
              <StatsCard
                key={index}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trending Now */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            icon={<TrendingUp className="h-6 w-6" />}
            title="Trending Now"
            subtitle="Most popular stories this week"
            viewAllLink="/trending"
            accentColor="text-trending"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {trendingStories.map((story, index) => (
              <StoryCard key={index} {...story} />
            ))}
          </div>
        </div>
      </section>

      {/* New Stories */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            icon={<Sparkles className="h-6 w-6" />}
            title="New Stories"
            viewAllLink="/new"
            accentColor="text-new"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {newStories.map((story, index) => (
              <StoryCard key={index} {...story} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Stories */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            icon={<Heart className="h-6 w-6" />}
            title="Popular Stories"
            viewAllLink="/popular"
            accentColor="text-popular"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {popularStories.map((story, index) => (
              <StoryCard key={index} {...story} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            icon={<Clock className="h-6 w-6" />}
            title="Latest Updates"
            viewAllLink="/latest"
            accentColor="text-latest"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {latestStories.map((story, index) => (
              <StoryCard key={index} {...story} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Fiction Realm
            </span>
          </div>
          <p className="text-muted-foreground text-sm">
            Make and ❤ by the awesome fiction network.
          </p>
          <p className="text-muted-foreground text-xs mt-2">
            © 2024 Fiction Realm. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import StoryCard from "@/components/StoryCard";
import StatsCard from "@/components/StatsCard";
import SectionHeader from "@/components/SectionHeader";
import TopSeriesCard from "@/components/TopSeriesCard";
import DragCarousel from "@/components/DragCarousel";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { BookOpen, Eye, Users, MessageSquare, TrendingUp, Sparkles, Heart, Clock } from "lucide-react";

// Import generated images
import heroImage from "@/assets/hero-shadow-realm.jpg";
import cyberNexusImage from "@/assets/story-cyber-nexus.jpg";
import heartsHarmonyImage from "@/assets/story-hearts-harmony.jpg";
import lostProphecyImage from "@/assets/story-lost-prophecy.jpg";
import quantumDreamsImage from "@/assets/story-quantum-dreams.jpg";
import vampireAcademyImage from "@/assets/story-vampire-academy.jpg";

const Index = () => {
  const isMobile = useIsMobile();
  const heroStories = [
    {
      id: 1,
      title: "Shadow Realm Chronicles",
      author: "Community Authors",
      description: "Enter a dark fantasy world where ancient powers awaken and heroes must face their deepest fears to save humanity.",
      image: heroImage,
      featured: true
    },
    {
      id: 2,
      title: "Cyber Nexus Protocol",
      author: "Digital Writers",
      description: "In a cyberpunk future where AI consciousness merges with human emotion, one hacker holds the key to digital revolution.",
      image: cyberNexusImage,
      featured: true
    },
    {
      id: 3,
      title: "Hearts in Harmony",
      author: "Romance Guild",
      description: "Two musicians from different worlds find love through melody, but their past threatens to silence their future together.",
      image: heartsHarmonyImage,
      featured: true
    },
    {
      id: 4,
      title: "Quantum Dreams",
      author: "Sci-Fi Collective",
      description: "Reality bends when a physicist discovers parallel dimensions bleeding into our world, each more dangerous than the last.",
      image: quantumDreamsImage,
      featured: true
    },
    {
      id: 5,
      title: "Magenetic: The Lost Prophecy",
      author: "Fantasy Masters",
      description: "A young mage must decode an ancient prophecy to prevent the return of a forgotten evil that once nearly destroyed the world.",
      image: lostProphecyImage,
      featured: true
    }
  ];

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
    { title: "The Zenith is Dead", image: cyberNexusImage, chapter: "Chapter 27", timeAgo: "21 hours ago" },
    { title: "Holy Necromancer", image: heartsHarmonyImage, chapter: "Chapter 48", timeAgo: "23 hours ago" },
    { title: "Hypogeum I", image: heroImage, chapter: "Chapter 23", timeAgo: "21 hours ago" },
    { title: "The Ultimate Multi-Talented Prophet", image: quantumDreamsImage, chapter: "Chapter 24", timeAgo: "21 hours ago" },
    { title: "The Top Student Hides Her Regression", image: vampireAcademyImage, chapter: "Chapter 31", timeAgo: "21 hours ago" },
    { title: "Cyber Nexus Protocol", image: lostProphecyImage, chapter: "Chapter 15", timeAgo: "1 day ago" },
  ];

  const popularStories = [
    { title: "The Zenith is Dead", image: cyberNexusImage, chapter: "Chapter 27", timeAgo: "21 hours ago" },
    { title: "Holy Necromancer", image: heartsHarmonyImage, chapter: "Chapter 48", timeAgo: "23 hours ago" },
    { title: "Hypogeum I", image: heroImage, chapter: "Chapter 23", timeAgo: "21 hours ago" },
    { title: "The Ultimate Multi-Talented Prophet", image: lostProphecyImage, chapter: "Chapter 24", timeAgo: "21 hours ago" },
    { title: "The Top Student Hides Her Regression", image: quantumDreamsImage, chapter: "Chapter 31", timeAgo: "21 hours ago" },
    { title: "Shadow Realm Chronicles", image: vampireAcademyImage, chapter: "Chapter 8", timeAgo: "1 day ago" },
  ];

  const recentlyUpdated = [
    { 
      title: "The Devil Butler", 
      image: heroImage, 
      chapter: "Chapter 548", 
      timeAgo: "2 weeks ago"
    },
    { 
      title: "Regressing with the King's Power", 
      image: cyberNexusImage, 
      chapter: "Chapter 227", 
      timeAgo: "2 weeks ago"
    },
    { 
      title: "Rebirth of the Ultimate Master", 
      image: quantumDreamsImage, 
      chapter: "Chapter 181: Trial by Fire", 
      timeAgo: "3 weeks ago"
    },
    { 
      title: "Rebirth of the Ultimate Master", 
      image: quantumDreamsImage, 
      chapter: "Chapter 180: The Origin of the Razormantle Clan", 
      timeAgo: "3 weeks ago"
    },
    { 
      title: "Regressing with the King's Power", 
      image: cyberNexusImage, 
      chapter: "Chapter 226", 
      timeAgo: "3 weeks ago"
    },
    { 
      title: "Rise in the Apocalyptic World", 
      image: vampireAcademyImage, 
      chapter: "Chapter 297", 
      timeAgo: "3 weeks ago"
    }
  ];

  const topSeries = [
    {
      rank: 1,
      title: "The Iron-Blooded Necromancer Has Returned",
      image: heroImage,
      tags: [
        { name: "Fantasy" },
        { name: "Action" },
        { name: "Overpowered" }
      ]
    },
    {
      rank: 2,
      title: "Everyone Regressed Except Me",
      image: cyberNexusImage,
      tags: [
        { name: "Fantasy" },
        { name: "Action" },
        { name: "Regression" }
      ]
    },
    {
      rank: 3,
      title: "Lord of Mana",
      image: quantumDreamsImage,
      tags: [
        { name: "Fantasy" },
        { name: "Action" },
        { name: "Ascension" }
      ]
    },
    {
      rank: 4,
      title: "Popular Psychopath",
      image: vampireAcademyImage,
      tags: [
        { name: "Fantasy" },
        { name: "Action" },
        { name: "Psychological" }
      ]
    },
    {
      rank: 5,
      title: "Woke up as a Worthless Swordsmanship Genius",
      image: lostProphecyImage,
      tags: [
        { name: "Fantasy" },
        { name: "Action" },
        { name: "Isekai" }
      ]
    },
    {
      rank: 6,
      title: "Chosen by the Hero King, the Second Life of the Illegitimate...",
      image: heartsHarmonyImage,
      tags: [
        { name: "Fantasy" },
        { name: "Action" }
      ]
    },
    {
      rank: 7,
      title: "The Iron-Blooded Necromancer Has Returned",
      image: heroImage,
      tags: [
        { name: "Fantasy" },
        { name: "Action" },
        { name: "Overpowered" }
      ]
    },
    {
      rank: 8,
      title: "Lord of Mana",
      image: quantumDreamsImage,
      tags: [
        { name: "Fantasy" },
        { name: "Action" },
        { name: "Ascension" }
      ]
    },
    {
      rank: 9,
      title: "I Regressed with the Heavenly Demon",
      image: cyberNexusImage,
      tags: [
        { name: "Fantasy" },
        { name: "Action" },
        { name: "Regression" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-solid-hero py-8 md:py-16 lg:py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <DragCarousel 
            autoPlay={true}
            autoPlayInterval={5000}
            showDots={true}
            className="w-full"
            itemsPerView={1}
          >
            {heroStories.map((hero) => (
              <div key={hero.id} className="w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
                  <div className="space-y-4 md:space-y-6 text-center lg:text-left">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                      <Sparkles className="h-4 w-4 text-primary mr-2" />
                      <span className="text-primary text-sm font-medium">Featured</span>
                    </div>
                    
                    <div>
                      <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-foreground mb-4">
                        {hero.title}
                      </h1>
                      <p className="text-lg md:text-xl text-muted-foreground mb-2">
                        by {hero.author}
                      </p>
                      <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8">
                        {hero.description}
                      </p>
                    </div>
                    
                    <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-glow">
                      <BookOpen className="mr-2 h-5 w-5" />
                      Start Reading
                    </Button>
                  </div>
                  
                  <div className="relative order-first lg:order-last">
                    <div className="relative rounded-2xl overflow-hidden shadow-hero">
                      <img 
                        src={hero.image} 
                        alt={hero.title}
                        className="w-full h-64 md:h-80 lg:h-[500px] object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </DragCarousel>
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

      {/* Trending this week */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">Top Series</h2>
          </div>
          
          {isMobile ? (
            <DragCarousel autoPlay={false} showDots={true} className="w-full" itemsPerView={1}>
              {[0, 3, 6].map((start) => (
                <div key={start} className="space-y-4">
                  {topSeries.slice(start, start + 3).map((series) => (
                    <TopSeriesCard key={series.rank} {...series} />
                  ))}
                </div>
              ))}
            </DragCarousel>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Column 1: Ranks 1-3 */}
              <div className="space-y-4">
                {topSeries.slice(0, 3).map((series) => (
                  <TopSeriesCard key={series.rank} {...series} />
                ))}
              </div>
              
              {/* Column 2: Ranks 4-6 */}
              <div className="space-y-4">
                {topSeries.slice(3, 6).map((series) => (
                  <TopSeriesCard key={series.rank} {...series} />
                ))}
              </div>
              
              {/* Column 3: Ranks 7-9 */}
              <div className="space-y-4">
                {topSeries.slice(6, 9).map((series) => (
                  <TopSeriesCard key={series.rank} {...series} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>


      {/* New Stories */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-bold text-foreground mb-2">New Stories</h2>
            <button className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
              View All →
            </button>
          </div>
          
          <DragCarousel 
            autoPlay={false}
            showDots={true}
            className="w-full"
            itemsPerView={isMobile ? 2 : 6}
          >
            {newStories.map((story, index) => (
              <div key={index} className="px-3">
                <StoryCard {...story} compact={isMobile} />
              </div>
            ))}
          </DragCarousel>
        </div>
      </section>

      {/* Popular Stories */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-bold text-foreground mb-2">Popular Stories</h2>
            <button className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
              View All →
            </button>
          </div>
          
          <DragCarousel 
            autoPlay={false}
            showDots={true}
            className="w-full"
            itemsPerView={isMobile ? 2 : 6}
          >
            {popularStories.map((story, index) => (
              <div key={index} className="px-3">
                <StoryCard {...story} compact={isMobile} />
              </div>
            ))}
          </DragCarousel>
        </div>
      </section>

      {/* Most Recently Updated */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">Most recently updated</h2>
          </div>
          
          <div className="space-y-4 mb-8">
            {recentlyUpdated.map((story, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:bg-accent/50 transition-colors">
                <div className="flex-shrink-0">
                  <img 
                    src={story.image} 
                    alt={story.title}
                    className="w-16 h-20 object-cover rounded-md"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-foreground truncate">
                    {story.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {story.chapter}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-sm text-muted-foreground">
                    {story.timeAgo}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2">
            <button className="p-2 rounded-md bg-card border border-border hover:bg-accent text-muted-foreground">
              ‹
            </button>
            <button className="px-3 py-2 rounded-md bg-primary text-primary-foreground font-medium">
              1
            </button>
            <button className="px-3 py-2 rounded-md bg-card border border-border hover:bg-accent text-muted-foreground">
              2
            </button>
            <button className="px-3 py-2 rounded-md bg-card border border-border hover:bg-accent text-muted-foreground">
              3
            </button>
            <button className="px-3 py-2 rounded-md bg-card border border-border hover:bg-accent text-muted-foreground">
              4
            </button>
            <button className="px-3 py-2 rounded-md bg-card border border-border hover:bg-accent text-muted-foreground">
              5
            </button>
            <span className="px-3 py-2 text-muted-foreground">
              ...
            </span>
            <button className="px-3 py-2 rounded-md bg-card border border-border hover:bg-accent text-muted-foreground">
              17
            </button>
            <button className="p-2 rounded-md bg-card border border-border hover:bg-accent text-muted-foreground">
              ›
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-foreground">
              Fiction Realm
            </span>
          </div>
          
          {/* Navigation Links */}
          <div className="flex items-center justify-center space-x-8 mb-4">
            <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </a>
            <a href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="/dmca" className="text-muted-foreground hover:text-foreground transition-colors">
              DMCA
            </a>
            <a href="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </a>
          </div>

          {/* Discord Icon */}
          <div className="flex items-center justify-center mb-4">
            <svg 
              className="h-8 w-8 text-muted-foreground hover:text-foreground transition-colors cursor-pointer" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.195.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
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

import { useMemo, useState } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Star, Eye, Clock, BookmarkPlus, Share2, MessageSquare, Heart, ListOrdered } from "lucide-react";
import heroImage from "@/assets/hero-shadow-realm.jpg";

interface Chapter {
  id: number;
  title: string;
  isPremium: boolean;
  timeAgo: string;
}

const NovelDetail = () => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [liked, setLiked] = useState<boolean>(false);
  const [likes, setLikes] = useState<number>(64);

  const tags = [
    "Action",
    "Fantasy",
    "Modern",
    "Psychological",
    "School Life",
    "Mystery",
    "Supernatural",
  ];

  const chapters: Chapter[] = useMemo(
    () =>
      Array.from({ length: 24 }).map((_, idx) => ({
        id: idx + 1,
        title: `Chapter ${idx + 1}${idx === 0 ? ": Avenger" : ""}`,
        isPremium: idx < 10,
        timeAgo: `${Math.max(1, 24 - idx)}d ago`,
      })),
    []
  );

  const freeChapters = chapters.filter((c) => !c.isPremium);

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />

      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-[300px,1fr] lg:grid-cols-[340px,1fr] gap-8">
          <div>
            <div className="rounded-lg overflow-hidden border shadow-sm h-[460px] md:h-[560px]">
              <img src={heroImage} alt="Novel cover" className="w-full h-full object-cover" />
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3">
              <Button
                variant={liked ? "default" : "outline"}
                className="w-full h-auto flex flex-wrap items-center justify-center gap-2 text-center whitespace-normal leading-tight px-4 py-4 rounded-xl"
                onClick={() =>
                  setLiked((prev) => {
                    const next = !prev;
                    setLikes((c) => c + (next ? 1 : -1));
                    return next;
                  })
                }
              >
                <Heart className={`h-4 w-4 mr-2 ${liked ? "fill-current" : ""}`} /> Like · {likes}
              </Button>

              <Button
                variant="outline"
                className="w-full h-auto flex flex-wrap items-center justify-center gap-2 text-center whitespace-normal leading-tight px-4 py-4 rounded-xl"
                onClick={async () => {
                  try {
                    const url = window.location.href;
                    if (navigator.share) {
                      await navigator.share({ title: document.title, url });
                    } else {
                      await navigator.clipboard.writeText(url);
                    }
                  } catch (_) {}
                }}
              >
                <Share2 className="h-4 w-4 mr-2" /> Share
              </Button>

              <Button variant="outline" className="w-full h-auto flex flex-wrap items-center justify-center gap-2 text-center whitespace-normal leading-tight px-4 py-4 rounded-xl">
                <ListOrdered className="h-4 w-4 mr-2 text-primary" />
                <span>{chapters.length} Chapters</span>
              </Button>
            </div>

            <Button className="w-full mt-4">
              <BookOpen className="h-4 w-4 mr-2" /> Start Reading
            </Button>
            <Button variant="secondary" className="w-full mt-2">
              <BookmarkPlus className="h-4 w-4 mr-2" /> Add to Library
            </Button>
          </div>

          <div>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-foreground leading-tight">
                  I Transmigrated as the Academy's Weary Instructor
                </h1>
                <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span>4.9</span>
                  </div>
                  <div className="flex items-center">
                    <Eye className="h-4 w-4 mr-1" />
                    <span>80.2K views</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>Aug 09, 2025</span>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="px-3 py-1">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* top-right actions removed as per request */}
            </div>

            <Card className="mt-6">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Synopsis</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className={`text-sm text-muted-foreground ${expanded ? "" : "line-clamp-4"}`}>
                  Ten years of devotedly reading a novel ended in catastrophe. Unable to contain myself, I wrote a heartfelt letter and sent it to the author's email. And then... "What in the world..." I was transmigrated into a delusional, broken instructor in a world without dreams or hope. I really shouldn't have sent that email.
                </p>
                <Button variant="link" className="px-0 mt-1" onClick={() => setExpanded((v) => !v)}>
                  {expanded ? "Show Less" : "Show More"}
                </Button>
              </CardContent>
            </Card>

            <Tabs defaultValue="reviews" className="mt-8">
              <TabsList>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="toc">Table of Contents</TabsTrigger>
              </TabsList>

              <TabsContent value="toc" className="mt-4">
                <div className="rounded-md border">
                  <div className="px-4 py-3 text-sm font-medium">Chapters ({freeChapters.length})</div>
                  <div className="divide-y">
                    {freeChapters.map((ch) => (
                      <div key={`f-${ch.id}`} className="flex items-center justify-between px-4 py-3">
                        <div className="flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-primary" />
                          <span className="text-sm">{ch.title}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{ch.timeAgo}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="mt-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Reviews</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2 mb-3">
                      <MessageSquare className="h-4 w-4" />
                      <span>Share your thoughts with others.</span>
                    </div>
                    <div className="text-xs">No reviews yet.</div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Footer (same as homepage) */}
      <footer className="bg-card border-t border-border py-8 md:py-10">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-foreground">
              Fiction Realm
            </span>
          </div>
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

export default NovelDetail;



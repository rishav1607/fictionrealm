import Header from "@/components/Header";

const Library = () => {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />
      <section className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">Library</h1>
        <p className="text-muted-foreground">Your saved and ongoing stories will appear here.</p>
      </section>
    </div>
  );
};

export default Library;



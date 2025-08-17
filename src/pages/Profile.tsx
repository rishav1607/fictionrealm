import Header from "@/components/Header";

const Profile = () => {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />
      <section className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">Profile</h1>
        <p className="text-muted-foreground">Manage your account and preferences.</p>
      </section>
    </div>
  );
};

export default Profile;



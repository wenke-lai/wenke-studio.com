import FeaturedContent from "@/components/home/FeaturedContent";
import Profile from "@/components/home/Profile";

export default function Home() {
  return (
    <div className="py-12 space-y-16">
      <section className="py-12">
        <Profile />
      </section>

      <FeaturedContent />
    </div>
  );
}

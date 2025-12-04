import HeroSection from "../HeroSection";

export default function HeroSectionExample() {
  return (
    <HeroSection
      title="Birlikte Daha Güçlüyüz"
      subtitle="Toplumsal değişim için el ele veriyoruz. Siz de aramıza katılın ve fark yaratın."
      onJoinClick={() => console.log("Join clicked")}
    />
  );
}

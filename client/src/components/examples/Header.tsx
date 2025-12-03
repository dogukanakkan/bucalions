import Header from "../Header";

export default function HeaderExample() {
  return (
    <Header
      organizationName="Toplum Gönüllüleri Derneği"
      onAdminClick={() => console.log("Admin clicked")}
    />
  );
}

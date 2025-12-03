import AdminLogin from "../AdminLogin";

export default function AdminLoginExample() {
  return (
    <AdminLogin
      onLogin={async (data) => {
        console.log("Login attempt:", data);
        return data.username === "admin" && data.password === "admin";
      }}
      onBack={() => console.log("Back clicked")}
    />
  );
}

export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="container py-8 text-sm text-gray-600">
        <div className="flex flex-col md:flex-row gap-3 md:items-center">
          <span>© {new Date().getFullYear()} TechSmith Consulting</span>
          <span className="md:ml-6">Cloud • DevSecOps • Release Management</span>
        </div>
      </div>
    </footer>
  );
}

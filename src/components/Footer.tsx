const Footer = () => {
    return (
      <footer className="border-t border-slate-100 py-4">
        <div className="container mx-auto text-center text-sm text-slate-100">
          <p>&copy; {new Date().getFullYear()} Ysk. All Rights Reserved.</p>
        </div>
      </footer>
    );
}

export default Footer;
const Header = () => (
  <header>
    <nav className="site-nav" aria-label="Main navigation">
      <a href="https://tavily.com" target="_blank" rel="noopener noreferrer" className="brand-link" aria-label="Tavily website">
        <img src="/tavily-by-nebius.svg" alt="Tavily by Nebius" className="brand-logo" width="362" height="109" />
      </a>
      <div className="nav-actions">
        <a href="https://github.com/guy-hartstein/company-research-agent" target="_blank" rel="noopener noreferrer" className="nav-link" aria-label="View on GitHub" title="View on GitHub">
          <img src="/github-icon.png" alt="" className="github-logo" width="28" height="28" />
        </a>
      </div>
    </nav>
    <div className="hero">
      <h1>Company Research Agent</h1>
      <p className="hero-description">Get to know your next opportunity.<br className="sm:hidden" /> In-depth company research, in one place.</p>
    </div>
  </header>
);

export default Header;

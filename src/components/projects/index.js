import { useMemo } from 'react'
import './index.scss'

// Data source for projects; add/remove items easily
const useProjects = () =>
  useMemo(
    () => [
      {
        id: 'kamal-plastic',
        title: 'Kamal Plastic',
        url: 'https://www.kamalplastics.com',
      },
      {
        id: 'ssc-events',
        title: 'SSC Events',
        url: 'https://www.sscevents.in',
      },
    ],
    []
  )

const layoutStyles = {
  titleRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  iconLink: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '22px',
    height: '22px',
    color: '#555',
    textDecoration: 'none',
  },
}

const Projects = () => {
  const projects = useProjects()

  return (
    <div className="container projects-page">
      <div className="text-zone">
        <h1 className="page-title">Projects</h1>
        {/* <p className="page-subtitle">
          A selection of deployed work. Each iframe renders the live site.
        </p> */}
        <div className="projects-grid">
          {projects.map((p) => (
            <div key={p.id} className="project-card">
              <div className="iframe-wrapper">
                <iframe
                  title={p.title}
                  src={p.url}
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-pointer-lock allow-popups"
                />
              </div>
              <div className="project-title-row" style={layoutStyles.titleRow}>
                <h2 className="project-title" style={{ margin: 0 }}>
                  {p.title}
                </h2>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${p.title} in a new tab`}
                  className="external-link"
                  style={layoutStyles.iconLink}
                  title={`Open ${p.title} in a new tab`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects

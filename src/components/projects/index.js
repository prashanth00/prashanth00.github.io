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
  grid: {
    display: 'flex',
    gap: '2rem',
    padding: '2rem',
  },
  card: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  iframeWrapper: {
    flex: 1,
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 18px rgba(0,0,0,0.15)',
  },
  iframe: {
    width: '100%',
    height: '80vh',
    border: '0',
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
        <div className="projects-grid" style={layoutStyles.grid}>
          {projects.map((p) => (
            <div key={p.id} className="project-card" style={layoutStyles.card}>
              <div
                className="iframe-wrapper"
                style={layoutStyles.iframeWrapper}
              >
                <iframe
                  title={p.title}
                  src={p.url}
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-pointer-lock allow-popups"
                  style={layoutStyles.iframe}
                />
              </div>
              <h2 className="project-title">{p.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects

export const pageview = (url) => {
  if (window && window.gtag) {
      window.gtag('config', 'G-WZFVGYG5P3', {
          page_path: url,
      })
  }
}

export const event = ({ action, params }) => {
  window.gtag('event', action, params)
}
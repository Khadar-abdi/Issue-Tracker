declare module 'react-markdown' {
  import React from 'react'
  
  export interface ReactMarkdownProps {
    children: string
    components?: Record<string, React.ComponentType<any>>
    className?: string
    [key: string]: any
  }

  const ReactMarkdown: React.FC<ReactMarkdownProps>
  export default ReactMarkdown
} 
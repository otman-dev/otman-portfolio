"use client"

import React from 'react'
import { IconType } from 'react-icons'
import { 
  FiUser, 
  FiBriefcase, 
  FiCode, 
  FiAward, 
  FiPhone, 
  FiHome, 
  FiStar, 
  FiGithub,
  FiLinkedin, 
  FiMail,
  FiExternalLink,
  FiArrowRight,
  FiDownload,
  FiClock,
  FiInfo,
  FiDatabase,
  FiCpu,
  FiCloud,
  FiLayers,
  FiServer,
  FiGlobe,
  FiEdit3,
  FiBookOpen,
  FiTarget
} from 'react-icons/fi'
import { SiMedium, SiGitlab } from 'react-icons/si'

// Icon system with consistent styling
interface IconProps {
  name: string
  size?: number
  className?: string
  color?: string
}

// Icon mapping with all the icons used in the application
const iconMap: Record<string, IconType> = {
  user: FiUser,
  briefcase: FiBriefcase,
  code: FiCode,
  award: FiAward,
  phone: FiPhone,
  home: FiHome,
  star: FiStar,
  github: FiGithub,
  linkedin: FiLinkedin,
  mail: FiMail,
  external: FiExternalLink,
  arrow: FiArrowRight,
  download: FiDownload,
  clock: FiClock,
  info: FiInfo,
  database: FiDatabase,
  cpu: FiCpu,
  cloud: FiCloud,
  layers: FiLayers,
  server: FiServer,
  globe: FiGlobe,  blog: FiEdit3,  book: FiBookOpen,
  medium: SiMedium,
  gitlab: SiGitlab,
  target: FiTarget,
}

// Consistent icon component
export const Icon: React.FC<IconProps> = ({ 
  name, 
  size = 20, 
  className = "",
  color
}) => {
  const IconComponent = iconMap[name]
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in icon map`)
    return null
  }
  
  return (
    <IconComponent 
      size={size} 
      className={`icon-base ${className}`}
      color={color}
    />
  )
}

// Icon with primary container
export const PrimaryIcon: React.FC<IconProps> = (props) => (
  <div className="icon-container-primary">
    <Icon {...props} />
  </div>
)

// Icon with secondary container
export const SecondaryIcon: React.FC<IconProps> = (props) => (
  <div className="icon-container-secondary">
    <Icon {...props} />
  </div>
)

// Icon with tertiary container
export const TertiaryIcon: React.FC<IconProps> = (props) => (
  <div className="icon-container-tertiary">
    <Icon {...props} />
  </div>
)

// Export all icons as a consistent system
export const Icons = {
  User: (props: Omit<IconProps, 'name'>) => <Icon name="user" {...props} />,
  Briefcase: (props: Omit<IconProps, 'name'>) => <Icon name="briefcase" {...props} />,
  Code: (props: Omit<IconProps, 'name'>) => <Icon name="code" {...props} />,
  Award: (props: Omit<IconProps, 'name'>) => <Icon name="award" {...props} />,
  Phone: (props: Omit<IconProps, 'name'>) => <Icon name="phone" {...props} />,
  Home: (props: Omit<IconProps, 'name'>) => <Icon name="home" {...props} />,
  Star: (props: Omit<IconProps, 'name'>) => <Icon name="star" {...props} />,
  GitHub: (props: Omit<IconProps, 'name'>) => <Icon name="github" {...props} />,
  LinkedIn: (props: Omit<IconProps, 'name'>) => <Icon name="linkedin" {...props} />,
  Mail: (props: Omit<IconProps, 'name'>) => <Icon name="mail" {...props} />,
  External: (props: Omit<IconProps, 'name'>) => <Icon name="external" {...props} />,
  Arrow: (props: Omit<IconProps, 'name'>) => <Icon name="arrow" {...props} />,
  Download: (props: Omit<IconProps, 'name'>) => <Icon name="download" {...props} />,
  Clock: (props: Omit<IconProps, 'name'>) => <Icon name="clock" {...props} />,
  Info: (props: Omit<IconProps, 'name'>) => <Icon name="info" {...props} />,
  Database: (props: Omit<IconProps, 'name'>) => <Icon name="database" {...props} />,
  CPU: (props: Omit<IconProps, 'name'>) => <Icon name="cpu" {...props} />,
  Cloud: (props: Omit<IconProps, 'name'>) => <Icon name="cloud" {...props} />,
  Layers: (props: Omit<IconProps, 'name'>) => <Icon name="layers" {...props} />,
  Server: (props: Omit<IconProps, 'name'>) => <Icon name="server" {...props} />,
  Globe: (props: Omit<IconProps, 'name'>) => <Icon name="globe" {...props} />,  Blog: (props: Omit<IconProps, 'name'>) => <Icon name="blog" {...props} />,  Book: (props: Omit<IconProps, 'name'>) => <Icon name="book" {...props} />,
  Medium: (props: Omit<IconProps, 'name'>) => <Icon name="medium" {...props} />,
  GitLab: (props: Omit<IconProps, 'name'>) => <Icon name="gitlab" {...props} />,
  Target: (props: Omit<IconProps, 'name'>) => <Icon name="target" {...props} />,
}

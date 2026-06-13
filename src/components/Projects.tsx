import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'D-Daily Ltd – Home & Pest Protection E-commerce',
      description: 'Full-stack e-commerce platform for trusted home, farm, and pest protection products in Kenya. Features product catalog, shopping cart, inventory management, secure online payments, and reseller program with nationwide delivery.',
      image: 'https://res.cloudinary.com/daytxhhu5/image/upload/f_auto,q_auto/v1/d-daily/products/1780663311933-618087886.webp',
      technologies: ['React', 'Node.js', 'E-commerce', 'Payment Integration', 'Cloudinary', 'AWS S3', 'CloudFront'],
      liveUrl: 'https://www.ddaily.co.ke',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'CareerStart – Internship Placement Platform',
      description: 'Student internship and industrial attachment marketplace connecting 18,000+ students with 250+ partner companies across Kenya. Features smart matching algorithm, one-click applications, deadline reminders, direct messaging, and real-time application tracking.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
      technologies: ['React', 'Node.js', 'Algorithm', 'Real-time Notifications', 'AWS Elastic Beanstalk', 'Route 53'],
      liveUrl: 'https://www.careerstart.co.ke',
      githubUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Dockerized Web Application',
      description: 'Multi-container application architecture featuring React frontend, Node.js backend, and MongoDB database. Implemented using Docker Compose for local development and seamless environment parity.',
      image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=1200&q=80',
      technologies: ['Docker', 'Docker Compose', 'React', 'Node.js', 'MongoDB'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Hammanham/docker-resume',
      featured: true
    },
    {
      id: 4,
      title: 'Linux Setup Automation Script',
      description: 'Comprehensive Bash automation script for DevOps workstation provisioning. Configures development environment, installs essential tools, and applies security hardening for consistent setup across team members.',
      image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=1200&q=80',
      technologies: ['Bash', 'Linux', 'Automation', 'Shell Scripting'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Hammanham/ansible-test-play-17',
      featured: true
    },
    {
      id: 5,
      title: 'AWS Infrastructure as Code Deployment',
      description: 'High-availability AWS environment provisioned entirely through CloudFormation templates. Includes VPC design, auto-scaling groups, load balancers, and RDS with multi-AZ configuration.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
      technologies: ['AWS', 'CloudFormation', 'IaC', 'EC2'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Hammanham/Docker-lap',
      featured: false
    },
    {
      id: 6,
      title: 'CI/CD Pipeline Demo',
      description: 'Production-ready GitHub Actions pipeline automating build, test, and deployment workflows. Implements blue-green deployment strategy with automated rollback capabilities to AWS infrastructure.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
      technologies: ['GitHub Actions', 'CI/CD', 'AWS', 'Automation'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Hammanham/my-portfolio-2025-6',
      featured: false
    },
    {
      id: 7,
      title: 'Kubernetes Learning Lab',
      description: 'Hands-on Kubernetes practice environment with comprehensive YAML configurations for deployments, services, pods, config maps, and secrets. Demonstrates container orchestration best practices and scaling strategies.',
      image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=1200&q=80',
      technologies: ['Kubernetes', 'Docker', 'YAML', 'Container Orchestration'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Hammanham/kubernetes-lab-practice',
      featured: false
    },
    {
      id: 8,
      title: 'DevOps Learning Tracker',
      description: 'Structured knowledge management system built in Notion for tracking DevOps learning paths, technical documentation, and hands-on lab exercises. Organized by technology domains and skill progression.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
      technologies: ['Notion', 'Documentation', 'Knowledge Management'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-blue-50/40 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Full-Stack Projects & DevOps Solutions</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            A showcase of full-stack applications, e-commerce platforms, and DevOps solutions. Demonstrates expertise in cloud infrastructure, containerization, automation, CI/CD pipelines, and scalable web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-600"
            >
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3 pt-2">
                  {project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl !== '#' && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                    >
                      <Github size={16} />
                      Source Code
                    </a>
                  )}
                  {project.githubUrl === '#' && (
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-gray-400 dark:text-gray-500">
                      <Github size={16} />
                      Repository Coming Soon
                    </span>
                  )}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Hammanham"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-lg text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200 shadow-sm hover:shadow-md"
          >
            <Github size={20} className="mr-2" />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
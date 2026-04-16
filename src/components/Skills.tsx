import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Cloud Platforms',
      skills: [
        { name: 'AWS (EC2, ECS, RDS, S3, Lambda, CloudFormation)', level: 90 },
        { name: 'Azure (VMs, AKS, App Services, DevOps)', level: 85 },
        { name: 'GCP (Compute Engine, GKE, Cloud Run)', level: 80 },
      ]
    },
    {
      title: 'Container & Orchestration',
      skills: [
        { name: 'Docker', level: 95 },
        { name: 'Kubernetes (EKS, AKS, GKE)', level: 90 },
        { name: 'Docker Compose', level: 85 },
        { name: 'Helm', level: 80 },
      ]
    },
    {
      title: 'Infrastructure as Code',
      skills: [
        { name: 'Terraform', level: 90 },
        { name: 'Ansible', level: 85 },
        { name: 'CloudFormation', level: 80 },
      ]
    },
    {
      title: 'CI/CD & Automation',
      skills: [
        { name: 'GitHub Actions', level: 90 },
        { name: 'Jenkins', level: 85 },
        { name: 'GitLab CI/CD', level: 85 },
        { name: 'ArgoCD', level: 80 },
      ]
    },
    {
      title: 'Monitoring & Logging',
      skills: [
        { name: 'Prometheus', level: 85 },
        { name: 'Grafana', level: 85 },
        { name: 'Splunk', level: 80 },
        { name: 'ELK Stack', level: 75 },
      ]
    },
    {
      title: 'Programming & Scripting',
      skills: [
        { name: 'Python', level: 85 },
        { name: 'Bash/Shell Scripting', level: 90 },
        { name: 'YAML', level: 95 },
      ]
    },
    {
      title: 'Linux & Web Servers',
      skills: [
        { name: 'Linux Administration', level: 90 },
        { name: 'Nginx', level: 85 },
        { name: 'Apache', level: 80 },
      ]
    },
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 75 },
        { name: 'HTML/CSS', level: 80 },
        { name: 'JavaScript', level: 75 },
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 70 },
        { name: 'Express.js', level: 70 },
        { name: 'REST APIs', level: 80 },
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Full-stack development background with hands-on experience in modern web technologies. However, my primary focus and expertise is now centered on DevOps engineering, cloud infrastructure, and deployment automation. Below is my comprehensive technical toolkit across both areas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level + '%' }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-blue-600 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
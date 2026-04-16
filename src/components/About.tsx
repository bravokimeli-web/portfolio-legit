import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              DevOps Engineer from Kenya
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Hello! I'm <strong>Ham Matage (Hamman)</strong>, a <strong>DevOps Engineer from Kenya</strong> specializing in building resilient, scalable cloud infrastructure across <strong>AWS</strong>, <strong>Azure</strong>, and <strong>GCP</strong>. My journey combines formal education in Information Technology with intensive hands-on experience in modern DevOps practices.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I focus on automating deployment pipelines, orchestrating containerized workloads with <strong>Kubernetes</strong> and <strong>Docker</strong>, and implementing <strong>Infrastructure as Code</strong> to drive efficiency across the entire software delivery lifecycle. My approach emphasizes automation, observability, and operational excellence.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I am <strong>open to remote DevOps roles</strong>, contract opportunities, and freelance cloud infrastructure projects worldwide.
            </p>
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Core technologies in my DevOps stack:</h4>
              <ul className="grid grid-cols-2 gap-2 text-gray-600 dark:text-gray-300">
                <li>• AWS, Azure & GCP Cloud Platforms</li>
                <li>• Docker & Kubernetes (EKS, AKS, GKE)</li>
                <li>• Terraform & Ansible</li>
                <li>• GitHub Actions & Jenkins</li>
                <li>• Prometheus & Grafana</li>
                <li>• GitLab CI/CD & ArgoCD</li>
                <li>• Python & Bash Scripting</li>
                <li>• Linux Administration & Nginx</li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">3+</div>
                <div className="text-gray-600 dark:text-gray-300">Years DevOps Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">15+</div>
                <div className="text-gray-600 dark:text-gray-300">Cloud Projects</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl">
                <img
                  src="/images/latest-passport .jpg"
                  alt="Ham Matage - DevOps Engineer based in Kenya"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg">
                <span className="font-semibold">Available for work</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
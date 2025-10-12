<template>
  <div class="w-full h-full">
    <div class="px-6 py-4 overflow-y-auto" style="height: calc(100% - 120px)">
      <!-- Overview Tab -->
      <div v-if="activeTab === 'overview'" class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="space-y-4">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
              <h3 class="font-semibold text-gray-900 dark:text-white mb-2">
                System Info
              </h3>
              <div class="space-y-2 text-sm">
                <div class="flex justify-between">
                  <span class="text-gray-600 dark:text-gray-400"
                    >Processor</span
                  >
                  <span class="text-gray-900 dark:text-white"
                    >Full Stack Brain</span
                  >
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600 dark:text-gray-400">Memory</span>
                  <span class="text-gray-900 dark:text-white"
                    >∞ GB Experience</span
                  >
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600 dark:text-gray-400">Graphics</span>
                  <span class="text-gray-900 dark:text-white"
                    >Creative Vision Pro</span
                  >
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600 dark:text-gray-400">Storage</span>
                  <span class="text-gray-900 dark:text-white"
                    >Unlimited Ideas</span
                  >
                </div>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
              <h3 class="font-semibold text-gray-900 dark:text-white mb-2">
                Core Skills
              </h3>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="skill in coreSkills"
                  :key="skill"
                  class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                >
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>

          <div class="space-y-4">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
              <h3 class="font-semibold text-gray-900 dark:text-white mb-2">
                About
              </h3>
              <p
                class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed"
              >
                Passionate full-stack developer with expertise in modern web
                technologies. I love creating beautiful, functional, and
                scalable applications that solve real-world problems.
              </p>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
              <h3 class="font-semibold text-gray-900 dark:text-white mb-2">
                Status
              </h3>
              <div class="space-y-2 text-sm">
                <div class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span class="text-gray-600 dark:text-gray-400"
                    >Available for projects</span
                  >
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span class="text-gray-600 dark:text-gray-400"
                    >Learning new technologies</span
                  >
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span class="text-gray-600 dark:text-gray-400"
                    >Building cool stuff</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Education Tab -->
      <div v-if="activeTab === 'education'" class="space-y-6">
        <div class="space-y-4">
          <div
            v-for="edu in education"
            :key="edu.id"
            class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm"
          >
            <div class="flex items-start justify-between">
              <div class="flex items-start gap-4">
                <div
                  class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-semibold"
                >
                  {{ edu.institution.slice(0, 2).toUpperCase() }}
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 dark:text-white">
                    {{ edu.degree }}
                  </h3>
                  <p class="text-blue-600 dark:text-blue-400 font-medium">
                    {{ edu.institution }}
                  </p>
                  <p class="text-gray-600 dark:text-gray-400 text-sm">
                    {{ edu.period }}
                  </p>
                </div>
              </div>
              <div class="text-right">
                <div class="text-sm text-gray-500 dark:text-gray-500">
                  {{ edu.status }}
                </div>
              </div>
            </div>
            <div v-if="edu.description" class="mt-4">
              <p class="text-gray-600 dark:text-gray-400 text-sm">
                {{ edu.description }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Work History Tab -->
      <div v-if="activeTab === 'work'" class="space-y-6">
        <div class="space-y-4">
          <div
            v-for="job in workHistory"
            :key="job.id"
            class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm"
          >
            <div class="flex items-start justify-between">
              <div class="flex items-start gap-4">
                <div
                  class="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-semibold"
                >
                  {{ job.company.slice(0, 2).toUpperCase() }}
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 dark:text-white">
                    {{ job.position }}
                  </h3>
                  <p class="text-green-600 dark:text-green-400 font-medium">
                    {{ job.company }}
                  </p>
                  <p class="text-gray-600 dark:text-gray-400 text-sm">
                    {{ job.period }}
                  </p>
                </div>
              </div>
              <div class="text-right">
                <div class="text-sm text-gray-500 dark:text-gray-500">
                  {{ job.type }}
                </div>
              </div>
            </div>
            <div v-if="job.achievements" class="mt-4">
              <ul class="space-y-1">
                <li
                  v-for="achievement in job.achievements"
                  :key="achievement"
                  class="text-gray-600 dark:text-gray-400 text-sm flex items-start gap-2"
                >
                  <span class="text-green-500 mt-1">•</span>
                  {{ achievement }}
                </li>
              </ul>
            </div>
            <div v-if="job.technologies" class="mt-4">
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in job.technologies"
                  :key="tech"
                  class="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Devices Tab -->
      <div v-if="activeTab === 'devices'" class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            v-for="category in deviceCategories"
            :key="category.name"
            class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm"
          >
            <h3
              class="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2"
            >
              <span class="text-2xl">{{ category.icon }}</span>
              {{ category.name }}
            </h3>
            <div class="space-y-3">
              <div
                v-for="device in category.items"
                :key="device.name"
                class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <div>
                  <div class="font-medium text-gray-900 dark:text-white">
                    {{ device.name }}
                  </div>
                  <div class="text-sm text-gray-600 dark:text-gray-400">
                    {{ device.specs }}
                  </div>
                </div>
                <div class="text-right">
                  <div class="text-sm text-gray-500 dark:text-gray-500">
                    {{ device.year }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  activeTab: string
}>()

const coreSkills = [
  'Vue.js',
  'Nuxt.js',
  'React',
  'TypeScript',
  'Node.js',
  'PHP',
  'Python',
  'MySQL',
  'PostgreSQL',
  'Docker'
]

const education = [
  {
    id: 1,
    degree: 'Bachelor of Computer Science',
    institution: 'University of Technology',
    period: '2018 - 2022',
    status: 'Graduated',
    description:
      'Focused on software engineering, data structures, and web development. Graduated with honors.'
  },
  {
    id: 2,
    degree: 'Self-Taught Developer',
    institution: 'Various Online Platforms',
    period: '2016 - Present',
    status: 'Ongoing',
    description:
      'Continuous learning through online courses, documentation, and hands-on projects.'
  }
]

const workHistory = [
  {
    id: 1,
    position: 'Senior Full Stack Developer',
    company: 'Tech Innovation Corp',
    period: '2023 - Present',
    type: 'Full-time',
    achievements: [
      'Led development of microservices architecture serving 100K+ users',
      'Improved application performance by 40% through optimization',
      'Mentored junior developers and established code review processes'
    ],
    technologies: [
      'Vue.js',
      'Nuxt.js',
      'Node.js',
      'PostgreSQL',
      'Docker',
      'AWS'
    ]
  },
  {
    id: 2,
    position: 'Full Stack Developer',
    company: 'Digital Solutions Ltd',
    period: '2022 - 2023',
    type: 'Full-time',
    achievements: [
      'Built and deployed 15+ client projects using modern web technologies',
      'Implemented automated testing and CI/CD pipelines',
      'Collaborated with design teams to create pixel-perfect interfaces'
    ],
    technologies: ['React', 'TypeScript', 'PHP', 'MySQL', 'Git']
  },
  {
    id: 3,
    position: 'Junior Developer',
    company: 'StartUp Ventures',
    period: '2021 - 2022',
    type: 'Part-time',
    achievements: [
      'Developed responsive web applications from scratch',
      'Participated in agile development cycles',
      'Gained experience in full-stack development'
    ],
    technologies: ['JavaScript', 'PHP', 'HTML/CSS', 'MySQL']
  }
]

const deviceCategories = [
  {
    name: 'Development Tools',
    icon: '💻',
    items: [
      {
        name: 'Visual Studio Code',
        specs: 'Primary IDE with extensions',
        year: '2024'
      },
      {
        name: 'Git & GitHub',
        specs: 'Version control and collaboration',
        year: '2024'
      },
      {
        name: 'Docker Desktop',
        specs: 'Containerization platform',
        year: '2024'
      },
      { name: 'Postman', specs: 'API development and testing', year: '2024' }
    ]
  },
  {
    name: 'Frontend Stack',
    icon: '🎨',
    items: [
      {
        name: 'Vue.js 3',
        specs: 'Progressive JavaScript framework',
        year: '2024'
      },
      { name: 'Nuxt.js 3', specs: 'Vue.js meta-framework', year: '2024' },
      {
        name: 'Tailwind CSS',
        specs: 'Utility-first CSS framework',
        year: '2024'
      },
      { name: 'TypeScript', specs: 'Typed JavaScript', year: '2024' }
    ]
  },
  {
    name: 'Backend Stack',
    icon: '⚙️',
    items: [
      {
        name: 'Node.js',
        specs: 'JavaScript runtime environment',
        year: '2024'
      },
      {
        name: 'PHP 8.x',
        specs: 'Server-side scripting language',
        year: '2024'
      },
      {
        name: 'PostgreSQL',
        specs: 'Advanced relational database',
        year: '2024'
      },
      { name: 'Redis', specs: 'In-memory data structure store', year: '2024' }
    ]
  },
  {
    name: 'Cloud & DevOps',
    icon: '☁️',
    items: [
      { name: 'AWS', specs: 'Cloud computing platform', year: '2024' },
      { name: 'Vercel', specs: 'Frontend deployment platform', year: '2024' },
      { name: 'GitHub Actions', specs: 'CI/CD automation', year: '2024' },
      { name: 'Nginx', specs: 'Web server and reverse proxy', year: '2024' }
    ]
  }
]
</script>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Home from './pages/Home.vue'
import ProjectShow from './pages/ProjectShow.vue'
import { projects } from './data/projects.js'

const route = useRoute()
const project = computed(() => projects.find(item => item.slug === route.params.slug))
const otherProjectsForCaseStudy = computed(() => projects.filter(item => item.slug !== route.params.slug).slice(0, 3))
</script>

<template>
  <Home v-if="route.name === 'home'" />
  <ProjectShow v-else-if="route.name === 'project' && project" :project="project" :other-projects="otherProjectsForCaseStudy" />
  <main v-else class="min-h-screen bg-[#080b14] px-6 py-32 text-center text-white">
    <h1 class="text-4xl font-semibold">Project not found</h1>
    <a href="#/" class="mt-6 inline-block text-violet-200">Return to portfolio →</a>
  </main>
</template>

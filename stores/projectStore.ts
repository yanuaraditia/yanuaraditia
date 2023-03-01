import {defineStore} from "pinia";
import {MarkedRenderer} from "~/utils/markedRenderer";
import {Ref} from "vue";

interface ProjectState {
    projects: ProjectObject[],
    project?: ProjectObject | null
}

interface ProjectFieldsObject {
    content: string
}

interface ProjectObject {
    contentRendered?: string | Ref,
    fields: ProjectFieldsObject | any,
    metadata: {
        tags: any[]
    }
}

export const useProjectStore = defineStore('project', {
    state: () => ({
        projects: [],
        project: null
    } as ProjectState),
    getters: {
        getProjects: state => state.projects,
        getProject: state => state.project
    },
    actions: {
        async fetchProject(slug: string | string[]) {
            const {$client} = useNuxtApp()
            await Promise.all([
                $client.getEntries({
                    content_type: "project",
                    'fields.slug[in]': slug,
                    order: '-sys.createdAt',
                })
            ]).then(async ([projects]) => {
                this.project = projects.items[0];

                const render = MarkedRenderer(this.project.fields.content)
                this.project.contentRendered = await render
            })
        },
        async fetchProjects() {
            const {$client} = useNuxtApp()
            await Promise.all([
                $client.getEntries({
                    content_type: "project",
                    order: '-sys.createdAt',
                })
            ]).then(([projects]) => {
                this.projects = projects.items
            })
        }
    }
})

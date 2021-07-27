import components from './src/components.js'

export const install = Vue => {
    for (const key in components){
        const component = components[key]
        Vue.component(component.name, component)
    }
}
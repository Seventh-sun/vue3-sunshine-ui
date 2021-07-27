import components from './src/components.js'

const install = Vue => {
    for (const key in components){
        const component = components[key]
        Vue.component(component.name, component)
    }
}

export default {
    install
}
import components from './components.js'

const SunshineUI = Object.create(null)

SunshineUI.install = Vue => {
    for (const key in components){
        const component = components[key]
        Vue.component(component.name, component)
    }
}

export default SunshineUI
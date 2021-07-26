import vitePluginVuedoc, { vueDocFiles } from 'vite-plugin-vuedoc'
import vue from '@vitejs/plugin-vue'

const config = {
  plugins: [
    vitePluginVuedoc(),
    vue({
      include: [...vueDocFiles]
    })
  ]
}

export default config
import { openBlock, createBlock } from 'vue';

var script = {
        name: 'SunButton',
        props: {

        },
        setup (props) {
            return {}
        }
    };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", null, " 按钮 "))
}

script.render = render;
script.__file = "packages/button/src/button.vue";

script.install = Vue => {
    Vue.component(script.name, script);
};

export default script;

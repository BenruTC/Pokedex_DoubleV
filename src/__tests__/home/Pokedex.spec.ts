import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import Pokedex from '../../home/components/Pokedex.vue';

describe('Pokedex', () => {
  it("renderiza el logo", () => {
    const wrapper = mount(Pokedex)
    const image = wrapper.find("img.img-logo-main");
    expect(image.exists()).toBe(true);
    expect(image.attributes("src")).toBe("/img/pikachu.png");
  });

  it("Se visualiza el botón 'Iniciar'", () => {
    const wrapper = mount(Pokedex, {
      global: {
        stubs: {
          RouterLink: {
            template: '<a class="btn btn-danger"><slot /></a>',
          },
        },
      },
    });
    const button = wrapper.find("a.btn.btn-danger");
    expect(button.exists()).toBe(true);
    expect(button.text()).toContain("Iniciar");
  });
  
})

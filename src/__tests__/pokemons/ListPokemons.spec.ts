import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';

import ListPokemons from '../../pokemons/components/ListPokemons.vue'

describe('ListPokemons', () => {
    it("renderiza la lista de pokemons", async () => {
        const wrapper = mount(ListPokemons, {
        global: {
            stubs: {
            RouterLink: {
                template: "<a><slot /></a>",
            },
            },
        },
        data() {
            return {
            pokemons: [
                { name: "bulbasaur", url: "..." },
                { name: "charmeleon", url: "..." },
            ],
            pokemonsFiltered: [
                { name: "bulbasaur", url: "..." },
                { name: "charmeleon", url: "..." },
            ],
            };
        },
        });

        const items = wrapper.findAll("li.list-group-item");
        expect(items).toHaveLength(2);
        expect(items[0].text()).toContain("bulbasaur");
        expect(items[1].text()).toContain("charmeleon");
    });
})
import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import PokemonDetail from '../../pokemons/components/PokemonDetails.vue';

describe('PokemonDetails', () => {
    it("Se visualiza el botópn 'Atrás'", () => {
        const wrapper = mount(PokemonDetail, {
        props: { id: "charmander" },
        global: {
            stubs: {
            RouterLink: { template: "<a><slot /></a>" },
            },
        },
        });

        const backButton = wrapper.find("a.btn.btn-secondary");
        expect(backButton.exists()).toBe(true);
        expect(backButton.text()).toBe("Atrás");
    });
})
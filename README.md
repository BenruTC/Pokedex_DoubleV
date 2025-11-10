# Pokedex_DoubleV

Pokédex DoubleV es una aplicación web construida con Vue 3, TypeScript y Vite, que consume la PokeAPI
para mostrar una lista de pokémons y sus detalles.

Características principales:

- Listado de Pokemons.
- Filtro de Pokemons por nombre mediante buscador.
- Vista de detalle de cada Pokemon.
- Navegación entre rutas usando Vue Router.
- Componentes reutilizables (Loading, Buscador, MainLayout).
- Manejo de errores HTTP.
- Testing unitario con Vitest.
- Estilos con Bootstrap 5.

## Arquitectura
La aplicación sigue una arquitectura tipo Clean Architecture / Hexagonal, separando claramente responsabilidades:

- Adapters: Comunicación con la API (PokemonApiAdapter)
- Domain / UseCases: Lógica de negocio (listPokemonsUseCase, detailPokemonUseCase)
- Domain / Models: Modelos de datos (Pokemons, Pokemon)
- Components / Views: Renderizado de UI y manejo de eventos
- Helpers: Axios, manejo de errores HTTP

## Instalación
```sh
# Clonar repositorio
git clone https://github.com/TU_USUARIO/POKEDEX_DOUBLEV.git
cd POKEDEX_DOUBLEV

# Instalar dependencias
npm install

# Levantar servidor de desarrollo
npm run dev
```
## Variables de entorno

```sh
VITE_URL_BASE=https://pokeapi.co
```
## Ejecución de test
La aplicación incluye tests unitarios con Vitest.

```sh
# Ejecutar tests unitarios
npm run test:unit
```

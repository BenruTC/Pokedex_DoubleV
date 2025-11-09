<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
        <div class="col-12 col-md-6 col-lg-8 pokedex pb-4">
            <div class="d-flex align-items-center mb-4">
                <div class="color-led-azul"></div>
                <div class="color-led-rojo mx-1"></div>
                <div class="color-led-amarillo mx-1"></div>
                <div class="color-led-verde mx-1"></div>
            </div>
            <main>
                <slot/>
            </main>
        </div>
    </div>
  </div>
</template>

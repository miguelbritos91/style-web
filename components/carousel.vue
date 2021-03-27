<template>
  <div>
    <v-carousel
      cycle
      height="500"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item
        v-for="(slide, i) in templates"
        :key="i"
      >
        <v-sheet
          height="100%"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
            style="overflow: hidden"
          >
            <div class="filter-image d-flex justify-center align-center">
              <h2 class="title-carousel font-rubik">{{ slide.name }}</h2>
            </div>
            <img class="img-slider" :src="slide.img" :alt="slide.img">
          </v-row>
        </v-sheet>
        <v-row class="justify-center">
          <a class="btn-view-template" :href="slide.link" target="_blank">
            Ver Template
          </a>
        </v-row>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  props: {
    templates: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.filter-image{
  width: 100%;
  height: 100%;
  background: rgba($color: #000000, $alpha: .5);
  position: absolute;
  top: 0;
  left: 0;
}
.img-slider{
  width: 80%;
}
.btn-view-template{
  position: absolute;
  bottom: 90px;
  text-decoration: none;
  border-radius: 5px;
  background: #0098d4;
  color: #fff !important;
  padding: 10px 20px;
  &:hover{
    cursor: pointer;
  }
}
.title-carousel{
    font-size: 3.5rem;
    text-transform: uppercase;
    letter-spacing: 6px;
}
</style>

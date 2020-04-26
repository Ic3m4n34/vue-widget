<template>
  <div id="app">
    <swiper
      ref="mySwiper" :options="swiperOptions"
      v-touch="touchHandler"
    >
    <swiper-slide
      v-for="(iframe, i) in cookedIframeUrls"
      :key="i"
    >
      <iframe
        class="iframe"
        :src="iframe"
        name="iframe"
        scrolling="yes"
        frameborder="0"
        marginheight="0px"
        marginwidth="0px"
      >
      </iframe>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'app',
  props: {
    iframeUrls: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
        },
      },
    };
  },
  computed: {
    cookedIframeUrls() {
      return this.iframeUrls.split(',').map(url => url.trim());
    },
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  methods: {
    touchHandler() {
      // alert('touched');
    },
  },
  mounted() {
    console.log('Current Swiper instance object', this.swiper);
    // const cookedUrls = this.iframeUrls.split(',');
    // console.log(cookedUrls);
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
}

.swiper-container,
.swiper-wrapper,
.swiper-slide,
.iframe {
  min-height: 100vh;
}

.swiper-slide {
  background: lightblue;
}

.iframe {
  width: 90%;
  background: #ffffff;
}
</style>

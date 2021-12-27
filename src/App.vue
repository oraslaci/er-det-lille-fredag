<template>
  <v-app>
    <v-main>
      <v-sheet color="white" elevation="1" height="279mm" width="210mm" class="d-flex justify-center align-center">
        <div class="headline text-center">Is it little friday? 

        <v-alert :type="isItLittleFriday ? 'success' : 'error'">{{
          isItLittleFriday ? "It's litlte friday" : "no"
        }}</v-alert>

        
        </div>
      </v-sheet>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  name: "App",

  components: {},

  data() {
    return {
      isItLittleFriday: "",
    };
  },

  mounted() {
    setInterval(() => {
      this.isItLittleFriday = new Date().getDay() === 4;
    }, 1000);
  },

  methods: {
    getHtml() {
      return this.isItLittleFriday;
    },
  },
};
</script>

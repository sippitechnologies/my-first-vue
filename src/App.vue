<template>
  <div id="app">

    <Users />
    <Followers />
  
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Users from "./components/RandomUsers.vue";
import Followers from './components/Followers.vue';



@Component({
  components: {
    Users,
   Followers,
    
  },
})
export default class App extends Vue {}
</script>
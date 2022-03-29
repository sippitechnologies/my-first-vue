<template>
  <div>
    <h1>Random Users</h1>
    <p><a href="https://randomuser.me/documentation">API documentation</a>
    </p>
    <label>Number of users</label>
    <input type="text"  v-model="searchTerm">
    <button @click="moreUsers">Fetch</button>
    <table v-if="imageArray.length > 0">
      <tr>
       
        <th>Image</th>
        <th>Media Id</th>
        <th>Media Type</th>

      </tr>
      <tr v-for="(u,pos) in imageArray" v-bind:key="pos">
        <td><img :src="u.image" width="150px" height="150px"></td>
        <td>{{u.media_id}}</td>
        <td>{{u.media_type}}</td>
      </tr>
    </table>
  </div>
</template>
<style scoped>
input {
  margin-left: 0.5em;
}
table {
  margin-top: 8px;
}
table tr:nth-child(odd):not(:first-child) {
  background-color: hsl(30, 90%, 60%);
}
table tr:nth-child(even) {
  background-color: hsl(30, 90%, 80%);
}

table tr > td {
  padding: 0.5em;
}
</style>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import axios, { AxiosResponse } from "axios";

import { Listly,Image,Followers} from "@/datatypes";
@Component
export default class RandomUsersComponent extends Vue {
  imageArray: Array<Image> = [];
  searchTerm = "basketball";

  mounted(): void {
    this.moreUsers();
  }
  moreUsers(): void {
    axios
      .request({
        method: "GET",
        url: "https://list.ly/api/v4/search/image",
        params: {
          q: this.searchTerm,
        },
      })
      .then((r: AxiosResponse) => r.data)
      .then((r: Listly) => {
        this.imageArray.splice(0);
        this.imageArray.push(...r.results);
      });
  }
}
</script>
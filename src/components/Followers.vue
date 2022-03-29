<template>
  <div>
    <h1>Random Users</h1>
    <p><a href="https://randomuser.me/documentation">API documentation</a>
    </p>
    <label>Number of users</label>
    <input type="number" min="3" v-model="searchPage">
    <button @click="moreUsers">Fetch</button>
    <table v-if="followersArray.length > 0">
      <tr>
       
        <th>Image</th>
        <th>Name</th>
        <th>Screen Name</th>

      </tr>
      <tr v-for="(u,pos) in followersArray" :key="pos">
        <td><img :src="u.profile_image"></td>
        <td>{{u.name}}</td>
        <td>{{u.screen_name}}</td>
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

import { Listly,Followers} from "@/datatypes";
@Component
export default class FollowersComponent extends Vue {
  followersArray: Array<Followers> = [];
  searchPage = "1";

  mounted(): void {
    this.moreUsers();
  }
  moreUsers(): void {
    axios
      .request({
        method: "GET",
        url: "https://list.ly/api/v4/users/1/followers",
        params: {
          page: this.searchPage,
        },
      })
      .then((r: AxiosResponse) => r.data)
      .then((r: Listly) => {
        this.followersArray.splice(0);
        this.followersArray.push(...r.users);
      });
  }
}
</script>
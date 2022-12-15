<template>
  <v-container id="inspire" class="justify-center">
    <v-card width="700" class="mx-auto ma-15 pa-5">
      <v-card-title class="pb-0 mb-5">
        <h1>Create Checkpoint Information</h1>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col>
            <v-text-field
              v-model="longitude"
              label="Longitude"
              prepend-icon="mdi-google-maps"
            />
          </v-col>
          <v-col>
            <v-text-field
              v-model="latitude"
              label="Latitude"
              prepend-icon="mdi-google-maps"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <div>Category:</div>
            <v-select v-model="selectedCategory" :items="category" />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <div>Description:</div>
            <v-row v-for="index in topicsCounter" :key="index">
              <v-col>
                <v-text-field
                  label="Year"
                  v-model="form[index - 1].year"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  label="Topic"
                  v-model="form[index - 1].topic"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  label="Description"
                  v-model="form[index - 1].desc"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-btn fab dark color="blue" @click="addTopic">
              <v-icon dark> mdi-plus </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="info" @click="saveCheckpoint">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "LoginPage",
  data() {
    return {
      form: [
        {
          year: "",
          topic: "",
          desc: "",
        },
      ],
      topics: [],
      latitude: 0,
      longitude: 0,
      topicsCounter: 1,
      selectedCategory: "Sport",
      category: ["Sport", "Architecture", "Art"],
    };
  },
  methods: {
    addTopic() {
      const counter = this.topicsCounter;
      const year = this.form[counter - 1].year;
      const topic = this.form[counter - 1].topic;
      const desc = this.form[counter - 1].desc;

      this.form.push({
        year: "",
        topic: "",
        desc: "",
      });
      this.topicsCounter++;
      this.topics.push({
        year,
        desc,
        topic,
      });
    },
    async saveCheckpoint() {
      const lon = parseInt(this.longitude);
      const lat = parseInt(this.latitude);
      const topics = this.topics;
      const category = this.selectedCategory;

      try {
        await axios.post("http://localhost:3000/checkpoint", {
          lon,
          lat,
          category,
          info: topics,
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>

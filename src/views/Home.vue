<template>
  <main>
    <b-nav id="navbar" class="py-2 d-flex justify-content-end text-white m-0">
      <div class="row m-0 p-0" v-if="!isLoading">
        <label id="label_nombre" class="pt-2 mx-2">
          {{ profile.first_name }} {{ profile.last_name }}
        </label>
        <b-avatar
          class="mt-1"
          variant="info"
          :src="profile.avatar"
          size="2rem"
        ></b-avatar>
        <toast class="m-1 p-0" variant="info"></toast>
      </div>
    </b-nav>
    <div class="container my-4">
      <div v-if="!isLoading">
        <b-alert
          :variant="alert.type"
          show
          v-for="(alert, index) in profile.alerts"
          :key="index"
        >
          {{ alert.text }}
        </b-alert>

        <area-chart :series="graphValues" :labels="graphLabels"></area-chart>

        <b-card title="Event Timeline">
          <b-timeline
            :items="timelineItems"
            :reverse="false"
            date-format="dd/MM/yy HH:mm:ss"
            variant="info"
          />
        </b-card>
      </div>
    </div>
  </main>
</template>

<script>
import "../store/index";
export default {
  components: {
    /**
     * Componente para la grafica
     * @returns { AreaChart }
     */
    AreaChart: () => import("@/components/AreaChart"),
    /**
     * Componente para las notificaciones
     * @returns { Toast }
     */
    Toast: () => import("@/components/Toast"),
  },
  data() {
    return {
      isLoading: true,
      timelineItems: [
        {
          timestamp: Date.parse("2021-05-29T20:20:46.444Z"),
          title: "Dolore ullamco exercitation commodo",
          content: "Esse dolore consectetur aliqua laboris sunt aliqua do non.",
        },
        {
          timestamp: Date.parse("2021-05-28T20:20:46.444Z"),
          title: "Voluptate pariatur dolore laborum eu",
        },
        {
          content: "cybersecurity",
          timestamp: Date.parse("2022-04-03T21:38:06.551Z"),
          title: "Cybersecurity 02",
        },
        {
          content: "phishing",
          timestamp: Date.parse("2021-03-08T10:44:11.066Z"),
          title: "Phishing training",
        },
        {
          content: "cybersecurity",
          timestamp: Date.parse("2021-11-08T01:30:19.334Z"),
          title: "Cybersecurity 01",
        },
      ],
    };
  },

  mounted() {
    if (!this.$store.state.profile) this.getProfile();
  },

  computed: {
    /**
     * Obtiene la informacion del usuario almacenada en Vuex
     * @returns { object }
     */
    profile() {
      return this.$store.state.profile;
    },

    graphLabels() {
      return this.profile.evolution.map((evolutionItem) => evolutionItem.date);
    },
    graphValues() {
      return this.profile.evolution.map((evolutionItem) => evolutionItem.value);
    },
  },

  methods: {
    /**
     * Consulta la información del usuario a través de un api
     * @returns { object }
     */
    async getProfile() {
      this.isLoading = true;

      const apiResponse = (
        await this.$http.get(
          "https://618404bd91d76c00172d1d23.mockapi.io/api/profile"
        )
      ).data;

      const profileData = apiResponse[0];
      this.$store.commit("updateProfile", apiResponse[0]);
      this.$store.commit("setNotification", profileData.notifications);
      this.isLoading = false;
    },
  },
};
</script>

<style lang="scss" scoped>
#navbar {
  background-color: #42b983;
}
#label_nombre {
  font-weight: bold;
  color: #2c3e50;
}
</style>

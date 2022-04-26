<template>
  <div>
    <b-button variant="info" @click="getNotificationByRead()">
      <i class="fa-solid fa-bell"></i>
      <b-badge variant="danger">{{ countNotificationByNotRead }}</b-badge>
    </b-button>

    <b-toast
      v-for="(notification, index) in viewNotification"
      :key="index"
      id="my-toast"
      :variant="getColorByPriorityTask(notification.type)"
      solid
    >
      <template #toast-title>
        <div class="d-flex flex-grow-1 align-items-baseline">
          <b-img blank class="mr-2" width="12" height="12"></b-img>
          <strong class="mr-auto">
            {{ notification.type }}
          </strong>
          <small class="text-muted mr-2">{{
            timeEnOf(notification.date)
          }}</small>
        </div>
      </template>
      <b-card-text>
        {{ notification.text }}
      </b-card-text>
    </b-toast>
  </div>
</template>

<script>
export default {
  mounted() {
    if (!this.$store.state.profile) this.getProfile();
    this.initComponent();
  },
  data: () => ({
    colorPriorityTask: {
      "password-renewal": "danger",
      "email-breach": "warning",
      "new-coworker": "success",
    },
    viewNotification: [],
  }),
  computed: {
    countNotificationByNotRead() {
      return this.viewNotification.filter((noti) => !noti.read).length;
    },
  },
  methods: {
    timeEnOf(date) {
      return this.$getColorByPrioryDate(date);
    },
    getColorByPriorityTask(type) {
      const color = this.colorPriorityTask[type];
      if (color != undefined) {
        return color;
      } else {
        throw new Error("No existe el color para la prioridad de la tarea");
      }
    },
    async getNotificationByRead() {
      this.$bvToast.show("my-toast", {
        autoHideDelay: 2000,
      });
      setTimeout(() => {
        this.viewNotification = [];
      }, 2001);
    },
    initComponent() {
      const notification = [...this.$store.state.objectProfile.notification];
      this.viewNotification = [...notification.filter((value) => !value.read)];
    },
  },
};
</script>

<style></style>

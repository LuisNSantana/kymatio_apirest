import moment from "moment";
import Vue from "vue";

Vue.prototype.$getColorByPrioryDate = function (date = "") {
  const getDate = date.split("T")[0];
  return moment(getDate).endOf("day").fromNow();
};

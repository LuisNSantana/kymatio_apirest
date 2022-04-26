<template>
  <div>
    <apexchart
      type="area"
      height="350"
      :options="chartOptions"
      :series="graphData"
    ></apexchart>
  </div>
</template>

<script>
export default {
  props: ["labels", "series"],
  data() {
    return {
      data: [
        {
          name: "Evolution",
          data: this.series,
        },
      ],
      chartOptions: {
        chart: {
          type: "area",
          height: 350,
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
        },

        title: {
          text: "Fundamental Analysis of Stocks",
          align: "left",
        },
        subtitle: {
          text: "Price Movements",
          align: "left",
        },
        labels: this.labels,
        xaxis: {
          type: "datetime",
        },
        yaxis: {
          opposite: true,
        },
        legend: {
          horizontalAlign: "left",
        },
      },
    };
  },

  computed: {
    graphData() {
      return [
        {
          name: "STOCK ABC",
          data: this.series,
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped></style>

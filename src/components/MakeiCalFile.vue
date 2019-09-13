<script>
import moment from "moment-timezone";
moment.tz.setDefault("Europe/Warsaw");
const ical = require("ical-generator");
const cal = ical({ name: "Grafik DM" });

export default {
  name: "MakeiCalFile",
  props: {
    shifts: {
      type: Array
    }
  },
  data() {
    return {
      month: "09",
      day: "01",
      year: "2019"
    };
  },
  methods: {
    prepareiCal() {
      this.shifts.forEach(day => {
        if (day.date.length === 1) day.date = "0" + day.date;
        this.day = day.date;
        //7-19
        day["7-19"].forEach(person => {
          let date = this.calendarDate + " 07:00:00";
          console.log(date);
          cal.createEvent({
            start: moment(date),
            end: moment(date).add(12, "hour"),
            summary: person.toString()
          });
        });
        //19-7
        day["19-7"].forEach(person => {
          let date = this.calendarDate + " 19:00:00";
          cal.createEvent({
            start: moment(date),
            end: moment(date).add(12, "hour"),
            summary: person.toString()
          });
        });
      });
      const blob = new Blob([cal.toString()], {
        type: "text/plain; charset=utf-8"
      });
      const e = document.createEvent("MouseEvents");
      const a = document.createElement("a");
      a.download = "grafik.ical";
      a.href = window.URL.createObjectURL(blob);
      a.dataset.downloadurl = ["text/json", a.download, a.href].join(":");
      e.initEvent(
        "click",
        true,
        false,
        window,
        0,
        0,
        0,
        0,
        0,
        false,
        false,
        false,
        false,
        0,
        null
      );
      a.dispatchEvent(e);
    }
  },
  watch: {
    shifts: function() {
      this.prepareiCal();
    }
  },
  computed: {
    calendarDate: function() {
      return `${this.year}-${this.month}-${this.day}`;
    }
  }
};
</script>

<style scoped></style>


<template>
  <Calendar />
  <DatePicker v-model="date" />
</template>


<script>
import { Calendar } from 'v-calendar';
import 'v-calendar/style.css';

export default {
  components: {
    Calendar,
  },
  data() {
    return {
      date: new Date(),
    };
  },
}
</script>

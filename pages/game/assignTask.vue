<template>
  <div class="assign-task">
    <h2>Assign task</h2>
    <btn @pressed="getPosition">
      Get location
    </btn>
    <section v-if="coords.latitude">
      <p>Latitude: {{ coords.latitude }}</p>
      <p>Longitude: {{ coords.longitude }}</p>
      <form onsubmit="return false">
        <label for="positionName">Position name</label>
        <input v-model="positionName" required type="text" name="positionName" placeholder="Lounge room cupboard">
        <input type="submit" value="Add task" @click="addTask">
      </form>
      <hr>
      <ul v-if="tasks">
        <li v-for="task in tasks" :key="task.id">
          <strong>{{ task.taskName }}</strong> - {{ task.coords.latitude }} / {{ task.coords.longitude }}
        </li>
      </ul>
    </section>
    <btn small send-to="/">
      Go back
    </btn>
  </div>
</template>

<script>
import btn from '@/components/Btn.vue'

export default {
  name: 'AssignTask',
  components: {
    btn
  },
  data () {
    return {
      coords: {
        latitude: null,
        longitude: null
      },
      positionName: '',
      tasks: [],
      positions: []
    }
  },
  methods: {
    getPosition () {
      const storePosition = (position) => {
        this.coords = position.coords
      }
      const error = (err) => {
        alert(
          'You seem to have disabled location services for this site. Please enable them (or remove the block) in your browser\'s settings and make sure you remember the decision to avoid popup spam!'
        )
        console.error(err)
      }
      navigator.geolocation.getCurrentPosition(storePosition, error)
    },
    addTask () {
      const task = {
        taskName: this.positionName,
        coords: this.coords
      }
      if (this.positions.includes(task.coords)) {
        alert('This position has already been saved as a task. Please try another position.')
      } else {
        this.positions.push(task.coords)
        this.tasks.push(task)
      }
    }
  }
}
</script>

<style>
</style>

<template>
  <q-card>
    <modal-header>Add Task</modal-header>

    <q-form @submit.prevent="submitForm">
      <q-card-section>
        <modal-task-name :name.sync="taskToSubmit.name" />

        <!-- Task Due Date -->
        <modal-due-date
          :due-date.sync="taskToSubmit.dueDate"
          @clear="clearDueDate"
        />

        <!-- Task Due Time -->
        <modal-due-time
          v-if="taskToSubmit.dueDate"
          :due-time.sync="taskToSubmit.dueTime"
        />
      </q-card-section>

      <!-- Save Task button -->
      <modal-buttons />
    </q-form>
  </q-card>
</template>

<script>
import { mapActions } from 'vuex';
import mixinAddEditTask from 'src/mixins/mixin-add-edit-task'

export default {
  mixins: [mixinAddEditTask],
  data() {
    return {
      taskToSubmit: {
        name: '',
        dueDate: '',
        dueTime: '',
        completed: false
      }
    };
  },
  methods: {
    ...mapActions('tasks', ['addTask']),
    submitTask() {
      this.addTask(this.taskToSubmit);
      this.$emit('close-add-task');
    },

  }
};
</script>

<style lang="scss" scoped>
</style>

<template>
  <div id="app">
    <!-- TodoHeader -->
    <TodoHeader></TodoHeader>
    <!-- TodoInput -->
    <TodoInput v-on:addTodo="addTodo"></TodoInput>
    <!-- TodoList -->
    <TodoList
      v-bind:todoItems="todoItems"
      v-bind:class="checked"
      v-on:doneToggle="doneToggle"
      v-on:removeTodo="removeTodo"
    >
    </TodoList>
    <!-- TodoFooter -->
    <TodoFooter v-on:click="clearAll"></TodoFooter>
  </div>
</template>
<script>
import TodoHeader from '../components/todo/TodoHeader';
import TodoFooter from '../components/todo/TodoFooter';
import TodoInput from '../components/todo/TodoInput';
import TodoList from '../components/todo/TodoList';
import { mapActions, mapMutations, mapState, mapGetters } from 'vuex';

export default {
  // name: '',
  components: {
    TodoHeader,
    TodoFooter,
    TodoInput,
    TodoList,
  },
  computed: {
    ...mapGetters('todoStore', ['todoItems']),
    ...mapActions('todoStore', {
      dispatchClearAll: 'clearAll',
      dispatchdoneToggle: 'doneToggle',
      dispatchremoveTodo: 'removeTodo',
      dispatchaddTodo: 'addTodo',
      dispatchgetTodo: 'getTodo',
    }),
  },
  data() {
    return {
      // newTodoItem: null,
      // todoItems: [
      //   { id: 1, todo: '영화보기', done: false },
      //   { id: 2, todo: '주말 산책', done: true },
      //   { id: 3, todo: 'ES6 학습', done: false },
      //   { id: 4, todo: '잠실야구장', done: false },
      // ],
    };
  },
  methods: {
    // TodoFooter
    clearAll(e) {
      // console.log(e.target);
      // this.$data.todoItems = [];
      this.dispatchClearAll();
    },
    // TodoList
    checked(done) {
      console.log(done);
    },
    doneToggle(id) {
      console.log('부모 doneToggle ', id);
      // // 불변객체
      // // ==> 복제 후 재할당 방식으로 처리
      // // ==> 1. map, filter, reduce
      // //     2. spread 연산자
      // //     3. 라이브러리 방식: immmer, immutavle
      // const newTodos = this.$data.todoItems.map((item /* , index, array */) => {
      //   if (item.id === id) {
      //     item.done = !item.done;
      //   }
      //   return item;
      // }); // 복제

      // this.$data.todoItems = newTodos; // 재할당
      this.dispatchdoneToggle();
    },
    removeTodo(id) {
      // console.log('부모 removeTodo ', id);
      // const removeTodo = this.$data.todoItems.filter(
      //   (item /* , index, array */) => {
      //     if (item.id === id) {
      //       return false;
      //     }
      //     return true;
      //   },
      // ); // 복제

      // this.$data.todoItems = removeTodo; // 재할당
      this.dispatchremoveTodo();
    },
    // TodoInput
    addTodo(e, newTodoItem) {
      // console.log(e.target);
      console.log(newTodoItem);

      // // newTodoItem 값이 없으면 종료한다. 빈값 호출 방지
      // if (!newTodoItem) {
      //   return;
      // }

      // // max id 구하기 ==> map과 reduce 를 사용하여

      // const ids = this.$data.todoItems.map((item) => {
      //   return item.id;
      // });
      // console.log(ids);

      // const maxid = ids.reduce((pvalue, cvalue) => {
      //   if (pvalue > cvalue) return pvalue;
      //   else return cvalue;
      // }, 0);

      // console.log(maxid);

      // const newid = maxid + 1;

      // // TodoItem 추가할 객체 만들기
      // const newTodo = {
      //   id: newid,
      //   todo: newTodoItem,
      //   done: false,
      // };

      // this.$data.todoItems = [...this.$data.todoItems, newTodo];
      this.dispatchaddTodo();
    },
  },
};
</script>
<style scoped>
body {
  text-align: center;
  background-color: #f6f6f8;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>

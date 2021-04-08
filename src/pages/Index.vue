<template>
    <div>
        <div>My todos</div>
        <div>
            <div>{{ todo.title }}</div>
            <div></div>
            <div></div>
        </div>
    </div>
</template>


<script lang="ts">
    import {ref, reactive, defineComponent} from 'vue'
    import {Todo} from '~/class/todo'

    export default defineComponent({
        name: 'App',
        components: {},
        data() {
        },
        setup:()=> {
            const id: number = 1;
            const title: string = 'Study';
            const deadline: Date = new Date(2022, 1, 1);
            const isFavorite = true;
            const todo: Todo = new Todo(id, title, deadline, isFavorite);
            console.log(todo);
            return todo;
        },
        methods: {},
    })
</script>

<style scoped>

</style>
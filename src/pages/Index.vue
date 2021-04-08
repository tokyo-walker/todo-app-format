<template>
    <div>
        <div>My todos</div>
        <div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</template>


<script lang="ts">
    import { ref, reactive, defineComponent } from 'vue'
    import { Todo } from '~/class/todo'

    export default defineComponent({
        name: 'App',
        components: {},
        data() {},
        setup() {
            const id:number = 1;
            const title:string = 'Study';
            const deadline:Date = new Date(2022,1,1);
            const isFavorite = true;
            const todo: Todo = new Todo(id, title,deadline,isFavorite);
            console.log(todo);
            const a = {name:1};
            const b = {name:1};

            console.log(a == b);
            const a1 = {name:1}
            const b1 = {name:1}

            console.log(a1.name == b1.name)
        },
        methods: {

        },
    })
</script>

<style scoped>

</style>
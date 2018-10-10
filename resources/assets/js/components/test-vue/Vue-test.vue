<template>
    <div class="container">
        <div class="row justify-content-md-center py-4 mb-4">
            <div class="col-10 text-center">
                <h1>Test Vue component</h1>
                <p>{{test}}</p>
                <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="Tooltip on top">Tooltip on top
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Vue-test',
        data(){
            return {
                test: 'Vue data 🍬'
            }
        }
    }
</script>

<style scoped>

</style>
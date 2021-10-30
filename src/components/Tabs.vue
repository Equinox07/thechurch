<template>
  <div class=" flex space-x-8 items-center">
      <div v-for="tab in tabs" :key="tab.id" :class="tab.id===selected ? 'border-b border-gray-400' : ''" @click="changeTab(tab)">
          <div class=" cursor-pointer text-lg font-normal">{{ tab.name }}</div>
      </div>
  </div>
</template>

<script>
export default {
    props : {
        tabs:{
            type:Array,
            default:()=>[]
        },
        selected:{
            type:Number,
            default:1
        }
    },
    methods:{
        changeTab(tab){
            this.$emit('changeTab',tab)
        }
    }
}
</script>

<style>

</style>
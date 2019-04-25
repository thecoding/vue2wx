<template>
  <div class="counter-warp">
    {{msg}}
  </div>
</template>

<script>
export default {
  data(){
    return {
      msg: "资讯"
    }
  }
}
</script>

<style>
.counter-warp {
  text-align: center;
  margin-top: 100px;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>

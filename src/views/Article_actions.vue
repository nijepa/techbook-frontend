<template>
  <div class="">
    <h1>New</h1>
    <form class="go-bottom" action="">
      <div>
        <input id="name" name="name" type="text" required >
        <label for="name">Title</label>
      </div>
      <div>
        <textarea id="desc" name="desc" rows="10"></textarea>
        <label for="desc">Description</label>
      </div>
      <div>
        <textarea class="coding" id="code" name="code" rows="15"></textarea>
        <label for="code">Code</label>
      </div>
      <button type="submit">Save</button>
    </form>
  </div>
  
</template>

<script>
export default {

}
</script>

<style>

</style>
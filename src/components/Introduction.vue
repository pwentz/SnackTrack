<template>
  <div
    class='row'
  >
    <div
      class='small-12
             small-centered
             intro
             columns
             callout'
    >
      <h2
        id='intro-header'
      >
        Welcome to SnackTrack
      </h2>

      <ol
        id='intro-list'
      >
        <p>
          <strong>Getting Started:</strong>
        </p>

        <li>
          Sign in via Google to the top-right
        </li>

        <hr>

        <li>
          Once your signed in, use the search bar to search for foods that you currently have
          in your pantry at home.
        </li>

        <hr>

        <li>
          Click the 'Pantry' option in the nav bar to view all the ingredients you're pantry is holding.
        </li>

        <hr>

        <li>
          Click the 'Get Recipes' button at any time to retrieve an index of recipes that you can make at home.
        </li>

        <hr>

        <li>
          If you decide to make that item, you can click the orange 'Eat' button and
          SnackTrack will remove the necessary items from your pantry.
        </li>

        <hr>

        <li>
          Click the SnackTrack option to the top-left at any point to be taken back to ingredient search page.
        </li>

      </ol>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.intro {
  margin-top: 20px;
}
#intro-header {
  text-align: center;
  font-family: Raleway;
}
#intro-list {
}
#intro-list li {
  font-family: Raleway;
}
</style>

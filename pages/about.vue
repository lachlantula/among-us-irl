<template>
  <div class="create">
    <h2>About</h2>
    <section>
      <p>
        Welcome to among-us-irl! This is a passion project by
        <a target="_blank" href="https://github.com/lachlantula">@lachlantula</a>
        that is (hopefully) fun! This game is heavily influenced by
        <a target="_blank" href="https://innersloth.itch.io/among-us">Among Us</a>
        and other similar murder-mystery games.
      </p>
    </section>
    <section>
      <h3>How does this all work?</h3>
      <p>
        among-us-irl is designed to be played on phones and relies on cooperation.
        Everybody playing should have joined the game via this website and will follow
        the prompts on their phone as they play the game.
      </p>
    </section>
    <section>
      <h3>How do I set up a game?</h3>
      <ol>
        <li>
          Go to the <nuxt-link to="/game/create">
            'create game'</nuxt-link> <!-- eslint-disable-line -->
          page.
        </li>
        <li>Create an account (or don't) and log in.</li>
        <li>Share your game code - which you should have kept saved somewhere if you've played before - to create the game!</li>
      </ol>
    </section>
    <section>
      <h3>How do I join a game?</h3>
      <ol>
        <li>
          Go to the <nuxt-link to="/game/join">
            'join game'</nuxt-link> <!-- eslint-disable-line -->
          page.
        </li>
        <li>Enter a username and your game code - which the host should've told you - to join the game!</li>
      </ol>
    </section>
    <section>
      <h3>I forgot my game code!</h3>
      <p>No problem. Well, it is, but it's not a huge deal. You'll just need to remap your playspace.</p>
      <ol>
        <li>
          Go to the <nuxt-link to="/game/join">
            'create game'</nuxt-link> <!-- eslint-disable-line -->
          page.
        </li>
        <li>Create an account (or don't) and log in.</li>
        <li>Open 'preferences' and select 'clear data'.</li>
        <li>Return to the previous page and follow the prompts to recreate your playspace.</li>
      </ol>
    </section>
    <section>
      <h3>What is a 'playspace'?</h3>
      <p>
        The 'playspace' in among-us-irl is the area in which the game is played.
        This 'area' might be your house, a park, an office... that's up to you!
        You also get to assign exactly where 'tasks' are to be completed. The exact
        location of these 'tasks' is saved to your account and hashed with your unique
        game code.
      </p>
    </section>
    <hr>
    <p>More specific questions about gameplay will tend to be answered as you play. Good luck!</p>
    <btn small send-to="/">
      Go back
    </btn>
  </div>
</template>

<script>
import btn from '@/components/Btn.vue'

export default {
  name: 'About',
  components: {
    btn
  }
}
</script>

<style>
</style>

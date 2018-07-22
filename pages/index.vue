<template>
  <div id="wrapper">

    <section class="panel banner right">
      <div class="content color0 span-3-75">
        <h1 class="major">Прежде чем умру,<br /> 
        я ...</h1>
        <ul class="actions">
          <li><a href="#first" class="button primary color1">Подписаться</a></li>
        </ul>
      </div>
      <div class="image filtered span-1-75" data-position="25% 25%">
        <img src="images/pic01.jpg" alt="" />
      </div>
    </section>

    <section class="panel color4-alt">
      <div class="intro color4">
        <h2 class="major">Рассказать</h2>
        <p>Тут можно анонимно поделиться своими мыслями о смысле жизни.</p>
      </div>
      <div class="inner columns divided">
        <div class="span-3-25">
          <form method="post" action="#">
            <div class="fields">
              <div class="field">
                <label for="message">Прежде чем умру, я ...</label>
                <textarea name="message" id="message" rows="4"></textarea>
              </div>
            </div>
            <ul class="actions">
              <li><input type="submit" value="Опубликовать анонимно" class="button primary" /></li>
            </ul>
          </form>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>


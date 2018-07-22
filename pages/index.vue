<template>
  <div id="wrapper">

    <section class="panel banner right">
      <div class="content color0 span-3-75">
        <h1 class="major">Прежде чем умру,<br /> 
        я {{ message || '...' }}</h1>
        <ul class="actions">
          <li><a href="https://t.me/before_i_die" class="button primary color1">Подписаться</a></li>
        </ul>
      </div>
      <div class="image filtered span-1-75" data-position="25% 25%">
        <img src="images/pic01.jpg" alt="" />
      </div>
    </section>

    <section class="panel spotlight medium right" id="first">
      <div class="content span-7">
        <h2 class="major">Почему?</h2>
        <p>Проект <strong>before I die</strong> зародился в США. Когда художник и архитектор Кэти Чанг потеряла близкого человека, она забила стену одного из заброшенных домов в Новом Орлеане чёрными досками, на которых любой желающий мог продолжить фразу «Before I die I want to...». Уже на следующий день доски были заполнены надписями. Аналогичные сегодня есть в Нидерландах, Новой Зеландии, Мексике, Казахстане, Дании, Парагвае, Китае и многих других странах.</p>
      </div>
      <div class="image filtered tinted" data-position="top left">
        <img src="images/pic02.jpg" alt="" />
      </div>
		</section>

    <section class="panel spotlight large left">
      <div class="content span-5">
        <h2 class="major">Так почему?</h2>
        <p>Мы хотели принести в Россию частичку этого проекта, но в силу специфики территории не могли сделать это на улицах и организовали онлайн-стену, куда любой человек может написать свои мысли. Такой формат легко масташируется и почти не требует обслуживания.</p>
        <ul class="actions">
          <li><a href="https://t.me/bid_poster_bot" class="button primary color1">Поделиться</a></li>
        </ul>
      </div>
      <div class="image filtered tinted" data-position="top right">
        <img src="images/pic03.jpg" alt="" />
      </div>
    </section>

    <!-- <section class="panel color4-alt">
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
              <li><input type="submit" value="Опубликовать анонимно" class="button primary" @click="publish" /></li>
            </ul>
          </form>
        </div>
      </div>
    </section> -->

    <div class="copyright">&copy; before I die. Design: <a href="https://html5up.net">HTML5 UP</a>. Images: <a href="https://unsplash.com/">Unsplash</a>.</div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import { publishPost } from '~/api'

export default {
  // data: () => ({
  //   requestInProgress: false,
  //   newPost: '',
  // }),
  computed: mapGetters([
    'message',
  ]),
  // methods: {
  //   publish: function () {
  //     this.requestInProgress = true

  //     publishPost(this.newPost)
  //       .then(() => {
  //         this.requestInProgress = false
  //         this.newPost = ''
  //       })
  //   }
  // }
}
</script>


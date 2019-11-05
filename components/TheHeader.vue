<template>
    <header class="header">
        <h1 class="header__title">
            <a class="header__link" href="/">Méline Querré</a>
        </h1>

        <nav class="nav header__nav">
            <ul class="nav__list">
                <li class="nav__item"
                    v-for="category in categories">
                    <a :href="'/' + category.id"
                       @click="openSubmenu($event, category)"
                       class="nav__link">{{ category.title }}</a>
                    <ul class="nav__list"
                        v-if="category.subcategories">
                        <li class="nav__item"
                            v-for="subcategory in category.subcategories">
                            <nuxt-link :class="{active: subcategory.id === id}"
                                       :to="'/' + category.id + '/' + subcategory.id"
                                       class="nav__link">{{ subcategory.title }}
                            </nuxt-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
  export default {
    data() {
      return {
        id: 'photo',
        categories: [
          {
            id: 'photo',
            title: 'Photo',
            subcategories: [
              {
                id: 'portait',
                title: 'Portrait'
              },
              {
                id: 'heroes',
                title: 'Heroes'
              },
              {
                id: 'stay-cool',
                title: 'Stay cool'
              },
              {
                id: 'inside',
                title: 'Inside'
              },
              {
                id: 'outside',
                title: 'Outside'
              }
            ]
          },
          {
            id: 'video',
            title: 'Video'
          }
        ]
      }
    },

    methods: {
      openSubmenu(e, category) {
        if (category.subcategories) {
          e.preventDefault()
          e.currentTarget.parentElement.classList.toggle('open')
        }
      }
    }
  }
</script>

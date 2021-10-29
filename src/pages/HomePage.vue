<template>
  <div class="container">
    <HomeSlideSection />
    <SpotLightSection />
    <TrailersSection />
    <NewsFeedVue />
    <TweetsSection />
    <BlogSection />
  </div>
</template>

<script>
import BlogSectionVue from '../sections/BlogSection.vue'
import HomeSlideSectionVue from '../sections/HomeSlideSection.vue'
import NewsFeedVue from '../sections/NewsFeed.vue'
import SpotLightSectionVue from '../sections/SpotLightSection.vue'
import TrailersSectionVue from '../sections/TrailersSection.vue'
import TweetsSectionVue from '../sections/TweetsSection.vue'

export default {
    components:{
      HomeSlideSection: HomeSlideSectionVue,
      SpotLightSection: SpotLightSectionVue,
      TrailersSection: TrailersSectionVue,
      NewsFeedVue,
      TweetsSection: TweetsSectionVue,
      BlogSection: BlogSectionVue
    }
}
</script>

<style>

</style>
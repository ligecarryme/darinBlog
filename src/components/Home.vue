<template>
  <div class="q-pa-md row">
    <!-- 主页 -->
    <div class="col-lg-8 col-md-6 col-sm-12">
      <div class="row justify-center q-gutter-sm">
        <q-intersection v-for="index in 6" :key="index" transition="scale" class="example-item">
          <q-item to="/article" clickable v-ripple class="m-padded-zero">
            <q-card class="q-ma-sm">
              <img src="https://cdn.quasar.dev/img/mountains.jpg" />

              <q-card-section>
                <div class="text-h6">Card #{{ index }}</div>
                <div class="text-subtitle2">by John Doe</div>
              </q-card-section>

              <q-card-section class="q-pt-none">{{ content }}</q-card-section>
            </q-card>
          </q-item>
        </q-intersection>
      </div>
      <div class="q-pa-lg flex flex-center">
        <q-pagination v-model="current" :max="10" :max-pages="6" :direction-links="true"></q-pagination>
      </div>
    </div>
    
    <!-- 右边侧栏 -->
    <div class="col-lg-4 col-md-6 col-sm-12" align="center">
      <div>
        <q-card class="my-card m-margin-top-small">
          <q-card-section class="bg-blue-3 text-white">
            <div class="text-h6">分类</div>
          </q-card-section>
          <div class="q-pa-md" style="max-width: 100%">
            <q-list bordered>
              <q-item clickable v-ripple>
                <q-item-section>Icon as avatar</q-item-section>
                <q-item-section avatar>
                  <q-icon color="primary" name="bluetooth" />
                </q-item-section>
              </q-item>
              <q-separator />

              <q-item clickable v-ripple>
                <q-item-section>Avatar-type icon</q-item-section>
                <q-item-section avatar>
                  <q-avatar color="teal" text-color="white" icon="bluetooth" />
                </q-item-section>
              </q-item>
              <q-separator />

              <q-item clickable v-ripple>
                <q-item-section>Rounded avatar-type icon</q-item-section>
                <q-item-section avatar>
                  <q-avatar rounded color="purple" text-color="white" icon="bluetooth" />
                </q-item-section>
              </q-item>
              <q-separator />

              <q-item clickable v-ripple>
                <q-item-section>Letter avatar-type</q-item-section>
                <q-item-section avatar>
                  <q-avatar color="primary" text-color="white">R</q-avatar>
                </q-item-section>
              </q-item>
            </q-list>
          </div>

          <q-card-actions align="around">
            <div class="q-pa-md q-gutter-md"></div>
          </q-card-actions>
        </q-card>
      </div>
      <div>
        <q-card class="my-card m-margin-top">
          <q-card-section class="bg-indigo-3 text-white">
            <div class="text-h6">标签</div>
          </q-card-section>

          <q-card-actions align="around">
            <div class="q-pa-md q-gutter-md">
              <q-chip square color="primary" text-color="white" icon="event">Add to calendar</q-chip>
              <q-chip class="glossy" square color="teal" text-color="white" icon="bookmark">Bookmark</q-chip>
              <q-chip square color="orange" text-color="white" icon-right="star">Star</q-chip>
              <q-chip square color="red" text-color="white" icon="alarm" label="Set alarm" />
              <q-chip square color="deep-orange" text-color="white" icon="directions">Get directions</q-chip>
              <q-chip square color="primary" text-color="white" icon="event">Add to calendar</q-chip>
              <q-chip class="glossy" square color="teal" text-color="white" icon="bookmark">Bookmark</q-chip>
              <q-chip square color="orange" text-color="white" icon-right="star">Star</q-chip>
              <q-chip square color="red" text-color="white" icon="alarm" label="Set alarm" />
              <q-chip square color="deep-orange" text-color="white" icon="directions">Get directions</q-chip>
            </div>
          </q-card-actions>
        </q-card>
      </div>
      <div>
        <q-card class="my-card m-margin-top">
          <q-card-section class="bg-purple-3 text-white">
            <div class="text-h6">最新推荐</div>
          </q-card-section>

          <q-card-actions align="around">
            <q-item-label header>List Header</q-item-label>

            <q-item>
              <q-item-section avatar></q-item-section>
              <q-item-section>List item</q-item-section>
              <q-item-section side>
                <q-item-label caption>meta</q-item-label>
              </q-item-section>
            </q-item>

            <q-separator spaced inset="item" />

            <q-item>
              <q-item-section top avatar>
                <q-avatar color="primary" text-color="white" icon="bluetooth" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Single line item</q-item-label>
                <q-item-label
                  caption
                  lines="2"
                >Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
              </q-item-section>

              <q-item-section side top>
                <q-item-label caption>5 min ago</q-item-label>
                <q-icon name="star" color="yellow" />
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section top avatar>
                <q-avatar rounded>
                  <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label>Single line item</q-item-label>
                <q-item-label
                  caption
                >Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
              </q-item-section>

              <q-item-section side top>
                <q-item-label caption>meta</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator spaced inset="item" />

            <q-item>
              <q-item-section top avatar>
                <q-avatar color="primary" text-color="white" square icon="bluetooth" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Single line item</q-item-label>
                <q-item-label
                  caption
                >Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
              </q-item-section>

              <q-item-section side top>
                <q-item-label caption>meta</q-item-label>
              </q-item-section>
            </q-item>
          </q-card-actions>
        </q-card>
      </div>
    </div>

    <div></div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      right: false,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      current: 1,
    };
  },
};
</script>

<style lang="sass" scoped>
@import "../assets/css/me.css";

.example-item
  height: 450px
  width: 450px

.my-card
  width: 100%
  max-width: 450px

.row > div
  padding: 5px 10px
  // background: rgba(86,61,124,.15)
  // border: 1px solid rgba(86,61,124,.2)

.row + .row
  margin-top: 1rem

</style>
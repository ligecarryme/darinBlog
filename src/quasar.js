import Vue from 'vue'

import './styles/quasar.sass'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'
import { Quasar, Notify, Ripple, QLayout, QHeader, QToolbar, QAvatar, QTabs, QToolbarTitle, QRouteTab, QForm, QInput, QDrawer, QBtn, QAjaxBar, QPageContainer, QSeparator, QPagination, QCard, QIcon, QImg, QCardSection, QCardActions, QTooltip, QDialog, QIntersection, QItem, QItemSection, QItemLabel, QBadge, QChip, QList, QTimeline, QTimelineEntry, QResizeObserver, QPageScroller, QRating, QParallax, QSpace, QMenu, QScrollArea, QScrollObserver, QChatMessage, QEditor, QSelect } from 'quasar'

Vue.use(Quasar, {
  config: {},
  components: { QLayout, QHeader, QToolbar, QAvatar, QTabs, QToolbarTitle, QRouteTab, QForm, QInput, QDrawer, QBtn, QAjaxBar, QPageContainer, QSeparator, QPagination, QCard, QIcon, QImg, QCardSection, QCardActions, QTooltip, QDialog, QIntersection, QItem, QItemSection, QItemLabel, QBadge, QChip, QList, QTimeline, QTimelineEntry, QResizeObserver, QPageScroller, QRating, QParallax, QSpace, QMenu, QScrollArea, QScrollObserver, QChatMessage, QEditor, QSelect },
  directives: { Ripple },
  plugins: { Notify }
})
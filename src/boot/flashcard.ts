import { boot } from 'quasar/wrappers'
// @ts-ignore
import Plugin from '@quasar/quasar-ui-qflashcard/src/QFlashcard'

export default boot(({ app }) => {
  // @ts-ignore
  app.use(Plugin)
});

import CMS, { init } from 'netlify-cms'
import 'netlify-cms/dist/cms.css'

window.CMS_MANUAL_INIT = true

const config = {
  backend: {
    name: 'test-repo',
    login: false
  },
  media_folder: 'assets',
  collections: [
    {
      name: 'test',
      label: 'test',
      folder: 'test',
      fields: [
        {
          name: 'title',
          label: 'Title',
          widget: 'string'
        }
      ]
    }
  ]
}

init({ config })

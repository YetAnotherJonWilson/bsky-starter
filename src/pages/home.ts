import { html } from '../lib/view'
import { shell } from './shell'

const TODAY = new Date().toDateString()

type Props = {
  profile?: { displayName?: string }
}

export function home(props: Props) {
  return shell({
    title: 'Home',
    content: content(props),
  })
}

function content({ profile }: Props) {
  return html`<div id="root">
    <div class="error"></div>
    <div id="header">
      <h1>TRKR</h1>
      <p>Track all the things.</p>
    </div>
    <div class="container">
      <div class="card">
        ${profile
          ? html`<form action="/logout" method="post" class="session-form">
              <div>
                Hi, <strong>${profile.displayName || 'friend'}</strong>.
              </div>
              <div>
                <button type="submit">Log out</button>
              </div>
            </form>`
          : html`<div class="session-form">
              <a href="/login">Log in</a>
              <div>
                <a href="/login" class="button">Log in</a>
              </div>
            </div>`}
      </div>
    </div>
  </div>`
}

function toBskyLink(did: string) {
  return `https://bsky.app/profile/${did}`
}

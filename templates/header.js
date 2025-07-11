import { html } from "lighterhtml";
import settings from "../settings.json";

export const renderHeader = () => html`<div>
  <div class='avatar-container'>
    <img src='${settings.avatarImage}' class='avatar' alt='${settings.name}' />
  </div>
  <h1>${settings.name}</h1>
  <h2>${settings.metaDescription}</h2>
</div>`;

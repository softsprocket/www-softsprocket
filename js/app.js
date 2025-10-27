import { Header } from "./modules/header.mjs";
import { SoftSprocket } from "./softsprocket.mjs";
import { Div } from "./modules/div.mjs";
import { Footer } from "./modules/footer.mjs";
import { H1 } from "./modules/headings.mjs";
import { P } from "./modules/p.mjs";
import { Button } from "./modules/button.mjs";

onload = () => {
    console.log("Softsprocket is loading...");
    const softsprocket = new SoftSprocket("app");

    let headerImage = `<a href="/" aria-label="SoftSprocket Homepage">
            <!-- Paste the SVG code here -->
            <svg class="logo-banner" width="450" height="100" viewBox="0 0 450 100" xmlns="http://www.w3.org/2000/svg" aria-labelledby="title desc" role="img">
              <title id="title">SoftSprocket Logo Banner</title>
              <desc id="desc">A stylized cascade of stars next to the word SoftSprocket.</desc>
              <style>
                .bg         { fill: #F7FAFC; }
                .text-dark  { fill: #2D3748; }
                .accent-pri { fill: #00A9E0; }
                .accent-sec { fill: #76D7C4; }
                .accent-ter { fill: #F5A623; }
              </style>
              <defs>
                <symbol id="star-shape" viewBox="-10 -10 20 20">
                  <path d="M 0 -10 L 2.5 -2.5 L 10 0 L 2.5 2.5 L 0 10 L -2.5 2.5 L -10 0 L -2.5 -2.5 Z" />
                </symbol>
              </defs>
              <rect width="100%" height="100%" class="bg" />
              <g id="star-cascade">
                <use href="#star-shape" x="50" y="50" width="30" height="30" class="accent-pri" opacity="1" transform="rotate(15 50 50)"/>
                <use href="#star-shape" x="85" y="35" width="22" height="22" class="accent-sec" opacity="0.9" transform="rotate(-10 85 35)"/>
                <use href="#star-shape" x="25" y="28" width="18" height="18" class="accent-ter" opacity="0.95" transform="rotate(25 25 28)"/>
                <use href="#star-shape" x="100" y="70" width="15" height="15" class="accent-pri" opacity="0.7"/>
                <use href="#star-shape" x="20" y="75" width="12" height="12" class="accent-sec" opacity="0.8"/>
              </g>
              <text x="135" y="55" font-family="'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif" font-size="36" dominant-baseline="middle">
                <tspan class="text-dark" font-weight="300">Soft</tspan>
                <tspan class="accent-pri" font-weight="700">Sprocket</tspan>
              </text>
            </svg>
        </a>`;

    softsprocket.headerElement.innerHTML = headerImage;
    // Populate the Aside with a card
    let div = new Div();
    div.classList.add("card");
    softsprocket.asideElement.appendChild(div);

    // Aside header
    let divHeader = new Header();
    div.appendChild(divHeader);
    let h1 = new H1();
    h1.textContent = "Midnight Slate & Ochre";
    divHeader.appendChild(h1);
    let subtitle = new P();
    subtitle.classList.add("subtitle");
    subtitle.textContent = "A palette for focus and clarity.";
    divHeader.appendChild(subtitle);

    // Aside content
    let divContent = new Div();
    divContent.classList.add("content");
    div.appendChild(divContent);
    let p1 = new P();
    p1.innerHTML = `This color scheme uses a soft <span class="highlight-parchment">parchment background</span> and a high-contrast <span class="highlight-slate">slate text</span> for effortless reading. It avoids the harshness of pure white and pure black.`;
    divContent.appendChild(p1);
    let p2 = new P();
    p2.innerHTML = `The primary action color is a <span class="highlight-deep-sea">calm, deep blue</span>, perfect for links and buttons. For a touch of warmth and visual interest, a secondary <span class="highlight-ochre">ochre accent</span> is used for highlights or special elements.`;
    divContent.appendChild(p2);

    // Aside footer with buttons
    let divFooter = new Footer();
    div.appendChild(divFooter);
    let btnPrimary = new Button();
    btnPrimary.classList.add("btn-primary");
    btnPrimary.textContent = "Primary Action";
    divFooter.appendChild(btnPrimary);
    let btnSecondary = new Button();
    btnSecondary.classList.add("btn-secondary");
    btnSecondary.textContent = "Learn More";
    divFooter.appendChild(btnSecondary);
};
/*
<div class="card">
  <header>
    <h1>Midnight Slate & Ochre</h1>
    <p class="subtitle">A palette for focus and clarity.</p>
  </header>
  <div class="content">
    <p>This color scheme uses a soft <span class="highlight-parchment">parchment background</span> and a high-contrast <span class="highlight-slate">slate text</span> for effortless reading. It avoids the harshness of pure white and pure black.</p>
    <p>The primary action color is a <span class="highlight-deep-sea">calm, deep blue</span>, perfect for links and buttons. For a touch of warmth and visual interest, a secondary <span class="highlight-ochre">ochre accent</span> is used for highlights or special elements.</p>
  </div>
  <footer>
    <button class="btn-primary">Primary Action</button>
    <button class="btn-secondary">Learn More</button>
  </footer>
</div>
*/
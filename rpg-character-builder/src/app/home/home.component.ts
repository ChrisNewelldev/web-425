import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <section class="hero">
      <div class="hero-text">
        <h2>Welcome, Adventurer.</h2>

        <p class="lead">
          RPG Character Builder is a simple web application designed to help
          players create, organize, and manage characters for role-playing
          games. Instead of scattered notes and forgotten details, this tool
          keeps everything in one place.
        </p>

        <p>
          Role-playing campaigns evolve quickly. Characters level up, change
          equipment, gain new abilities, and develop meaningful relationships
          with the world around them. Over time, those details become difficult
          to track. This application exists to reduce that friction and make
          long-running campaigns easier to manage.
        </p>

        <p>
          The goal of this project is not to replace imagination, but to support
          it. By giving players a clean and focused interface, RPG Character
          Builder allows more time to be spent telling stories and less time
          searching through notebooks, screenshots, or chat logs.
        </p>
      </div>

      <div class="hero-image">
        <img
          src="assets/images/hero.jpg"
          alt="Fantasy landscape representing an adventure setting"
        />
      </div>
    </section>
    <section class="features">
      <div class="feature-card">
        <img
          src="assets/images/dice.jpg"
          alt="Tabletop dice used in role-playing games"
        />
        <h3>Build Characters with Intention</h3>
        <p>
          Creating a character is one of the most important parts of any
          role-playing game. RPG Character Builder helps players think through
          class choices, abilities, equipment, and background details in a
          structured way. Instead of rushing through character creation, this
          tool encourages intentional decisions that lead to more interesting
          and believable heroes.
        </p>
        <p>
          By keeping character information organized and easy to revisit,
          players can maintain consistency across long campaigns. This is
          especially helpful when returning to a game after weeks or months
          away.
        </p>
      </div>

      <div class="feature-card">
        <img
          src="assets/images/map.jpg"
          alt="Fantasy map representing a campaign world"
        />
        <h3>Track Stories Across Campaigns</h3>
        <p>
          Role-playing games are collaborative stories that unfold over time.
          Important events, locations, and character relationships can be easy
          to forget as a campaign grows. RPG Character Builder provides a
          central place to track the evolving story connected to each character.
        </p>
        <p>
          Whether exploring new regions, uncovering hidden lore, or forming
          alliances with non-player characters, having a clear record helps
          players stay immersed in the world and make choices that reflect their
          character’s history.
        </p>
      </div>
    </section>
  `,
  styles: [
    `
      /* Make content fit the screen nicely */
      :host {
        display: block;
        width: 100%;
        max-width: 100%;
      }

      .hero {
        width: 100%;
        max-width: 100%;
        display: grid;
        grid-template-columns: 1fr;
        gap: 16px;
        padding: 16px;
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 16px;
        box-sizing: border-box;
      }

      .hero-text h2 {
        margin: 0 0 10px;
        font-size: 2rem;
      }

      .lead {
        font-size: 1.05rem;
        opacity: 0.92;
      }

      .hero-image img {
        width: 100%;
        max-height: 240px;
        object-fit: cover;
        border-radius: 14px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        display: block;
      }

      /* On wider screens, use 2 columns but keep it contained */
      @media (min-width: 900px) {
        .hero {
          grid-template-columns: 1.2fr 0.8fr;
          align-items: start;
        }
      }
      .features {
        display: grid;
        grid-template-columns: 1fr;
        gap: 20px;
        margin-top: 24px;
      }

      .feature-card {
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 16px;
        padding: 16px;
      }

      .feature-card img {
        width: 100%;
        max-height: 200px;
        object-fit: cover;
        border-radius: 12px;
        margin-bottom: 12px;
      }

      .feature-card h3 {
        margin-top: 0;
      }

      @media (min-width: 900px) {
        .features {
          grid-template-columns: 1fr 1fr;
        }
      }
    `,
  ],
})
export class HomeComponent {}

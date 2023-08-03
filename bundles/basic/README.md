[![banner](https://particles.js.org/images/banner2.png)](https://particles.js.org)

# tsParticles Basic Bundle

[![jsDelivr](https://data.jsdelivr.com/v1/package/npm/tsparticles-basic/badge)](https://www.jsdelivr.com/package/npm/tsparticles-basic) [![npmjs](https://badge.fury.io/js/tsparticles-basic.svg)](https://www.npmjs.com/package/tsparticles-basic) [![npmjs](https://img.shields.io/npm/dt/tsparticles-basic)](https://www.npmjs.com/package/tsparticles-basic) [![GitHub Sponsors](https://img.shields.io/github/sponsors/matteobruni)](https://github.com/sponsors/matteobruni)

[tsParticles](https://github.com/matteobruni/tsparticles) basic bundle loads some of the most used features to
a `tsparticles-engine` instance.

**Included Packages**

- [tsparticles-engine](https://github.com/matteobruni/tsparticles/tree/main/engine)
- [tsparticles-interaction-external-attract](https://github.com/matteobruni/tsparticles/tree/main/interactions/external/attract)
- [tsparticles-interaction-external-bounce](https://github.com/matteobruni/tsparticles/tree/main/interactions/external/bounce)
- [tsparticles-interaction-external-bubble](https://github.com/matteobruni/tsparticles/tree/main/interactions/external/bubble)
- [tsparticles-interaction-external-connect](https://github.com/matteobruni/tsparticles/tree/main/interactions/external/connect)
- [tsparticles-interaction-external-grab](https://github.com/matteobruni/tsparticles/tree/main/interactions/external/grab)
- [tsparticles-interaction-external-pause](https://github.com/matteobruni/tsparticles/tree/main/interactions/external/pause)
- [tsparticles-interaction-external-push](https://github.com/matteobruni/tsparticles/tree/main/interactions/external/push)
- [tsparticles-interaction-external-remove](https://github.com/matteobruni/tsparticles/tree/main/interactions/external/remove)
- [tsparticles-interaction-external-repulse](https://github.com/matteobruni/tsparticles/tree/main/interactions/external/repulse)
- [tsparticles-interaction-external-slow](https://github.com/matteobruni/tsparticles/tree/main/interactions/external/slow)
- [tsparticles-interaction-particles-attract](https://github.com/matteobruni/tsparticles/tree/main/interactions/particles/attract)
- [tsparticles-interaction-particles-collisions](https://github.com/matteobruni/tsparticles/tree/main/interactions/particles/collisions)
- [tsparticles-interaction-particles-links](https://github.com/matteobruni/tsparticles/tree/main/interactions/particles/links)
- [tsparticles-move-base](https://github.com/matteobruni/tsparticles/tree/main/move/base)
- [tsparticles-move-parallax](https://github.com/matteobruni/tsparticles/tree/main/move/parallax)
- [tsparticles-particles.js](https://github.com/matteobruni/tsparticles/tree/main/bundles/pjs)
- [tsparticles-plugin-easing-quad](https://github.com/matteobruni/tsparticles/tree/main/plugins/easings/quad)
- [tsparticles-shape-circle](https://github.com/matteobruni/tsparticles/tree/main/shapes/circle)
- [tsparticles-shape-image](https://github.com/matteobruni/tsparticles/tree/main/shapes/image)
- [tsparticles-shape-line](https://github.com/matteobruni/tsparticles/tree/main/shapes/line)
- [tsparticles-shape-polygon](https://github.com/matteobruni/tsparticles/tree/main/shapes/polygon)
- [tsparticles-shape-square](https://github.com/matteobruni/tsparticles/tree/main/shapes/square)
- [tsparticles-shape-star](https://github.com/matteobruni/tsparticles/tree/main/shapes/star)
- [tsparticles-shape-text](https://github.com/matteobruni/tsparticles/tree/main/shapes/text)
- [tsparticles-updater-color](https://github.com/matteobruni/tsparticles/tree/main/updaters/color)
- [tsparticles-updater-life](https://github.com/matteobruni/tsparticles/tree/main/updaters/life)
- [tsparticles-updater-opacity](https://github.com/matteobruni/tsparticles/tree/main/updaters/opacity)
- [tsparticles-updater-out-modes](https://github.com/matteobruni/tsparticles/tree/main/updaters/outModes)
- [tsparticles-updater-rotate](https://github.com/matteobruni/tsparticles/tree/main/updaters/rotate)
- [tsparticles-updater-size](https://github.com/matteobruni/tsparticles/tree/main/updaters/size)
- [tsparticles-updater-stroke-color](https://github.com/matteobruni/tsparticles/tree/main/updaters/strokeColor)

## How to use it

### CDN / Vanilla JS / jQuery

The CDN/Vanilla version JS has two different files:

- One is a bundle file with all the scripts included in a single file
- One is a file including just the `loadBasic` function to load the tsParticles basic preset, all dependencies must be
  included manually

#### Bundle

Including the `tsparticles.basic.bundle.min.js` file will work exactly like `v1`, you can start using the `tsParticles`
instance in the same way.

This is the easiest usage, since it's a single file with the some of the `v1` features.

All new features will be added as external packages, this bundle is recommended for migrating from `v1` easily.

#### Not Bundle

This installation requires more work since all dependencies must be included in the page. Some lines above are all
specified in the **Included Packages** section.

### Usage

Once the scripts are loaded you can set up `tsParticles` like this:

```javascript
(async () => {
  await loadBasic(tsParticles); // not needed if using the bundle script, required for any other installation

  await tsParticles.load({
    id: "tsparticles",
    options: {
      /* options */
    },
  });
})();
```

### React.js / Preact / Inferno

_The syntax for `React.js`, `Preact` and `Inferno` is the same_.

This sample uses the class component syntax, but you can use hooks as well (if the library supports it).

_Class Components_

```typescript jsx
import React from "react";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadBasic } from "tsparticles-basic";

export class ParticlesContainer extends PureComponent<unknown> {
  // this customizes the component tsParticles installation
  async customInit(engine: Engine) {
    // this adds the bundle to tsParticles
    await loadBasic(engine);
  }

  render() {
    const options = {
      /* custom options */
    };

    return <Particles options={options} init={this.customInit} />;
  }
}
```

_Hooks / Functional Components_

```typescript jsx
import React, { useCallback } from "react";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadBasic } from "tsparticles-basic";

export function ParticlesContainer(props: unknown) {
  // this customizes the component tsParticles installation
  const customInit = useCallback(async (engine: Engine) => {
    // this adds the bundle to tsParticles
    await loadBasic(engine);
  });

  const options = {
    /* custom options */
  };

  return <Particles options={options} init={this.customInit} />;
}
```

### Vue (2.x and 3.x)

_The syntax for `Vue.js 2.x` and `3.x` is the same_

```vue
<Particles id="tsparticles" :particlesInit="particlesInit" :options="options" />
```

```js
const options = {
  /* custom options */
};

async function particlesInit(engine: Engine) {
  await loadBasic(engine);
}
```

### Angular

```html
<ng-particles [id]="id" [options]="options" [particlesInit]="particlesInit"></ng-particles>
```

```ts
const options = {
  /* custom options */
};

async function particlesInit(engine: Engine): void {
  await loadBasic(engine);
}
```

### Svelte

```sveltehtml

<Particles
    id="tsparticles"
    options={options}
    particlesInit="{particlesInit}"
/>
```

```js
let options = {
  /* custom options */
};

let particlesInit = async (engine) => {
  await loadBasic(engine);
};
```
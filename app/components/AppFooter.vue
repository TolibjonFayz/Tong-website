<script setup lang="ts">
import { SITE } from '~/utils/site'

const content = useSiteContent()
const localePath = useLocalePath()
const year = new Date().getFullYear()
</script>

<template>
  <footer
    class="mt-24 border-t border-border bg-bg/60 backdrop-blur-sm"
  >
    <div class="mx-auto max-w-6xl px-5 py-14 sm:px-8">
      <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <!-- Brend -->
        <div class="lg:col-span-2">
          <div class="flex items-center gap-2.5">
            <img
              src="/images/mark-96.webp"
              alt=""
              width="36"
              height="36"
              class="h-9 w-9 rounded-lg"
              loading="lazy"
              decoding="async"
            >
            <span class="font-display text-lg font-bold text-fg">
              TONG<span class="text-fg-muted"> INC</span>
            </span>
          </div>
          <p class="mt-4 max-w-sm text-sm leading-relaxed text-fg-muted">
            {{ content.footer.tagline }}
          </p>
          <p class="mt-4 flex items-center gap-1.5 text-sm text-fg0">
            <AppIcon name="pin" :size="15" />
            {{ content.contact.locationBody }}
          </p>
        </div>

        <!-- Studiya -->
        <nav :aria-label="content.footer.studioHeading">
          <h2
            class="font-display text-xs font-bold uppercase tracking-[0.14em]
                   text-fg0"
          >
            {{ content.footer.studioHeading }}
          </h2>
          <ul class="mt-4 space-y-2.5 text-sm">
            <li>
              <NuxtLink
                :to="localePath('/work')"
                class="text-fg-muted transition-colors hover:text-accent"
              >{{ content.nav.work }}</NuxtLink>
            </li>
            <li>
              <NuxtLink
                :to="localePath('/work/tashkent-city')"
                class="text-fg-muted transition-colors hover:text-accent"
              >{{ content.products['tashkent-city']?.name }}</NuxtLink>
            </li>
            <li>
              <NuxtLink
                :to="localePath('/work/sozbog')"
                class="text-fg-muted transition-colors hover:text-accent"
              >{{ content.products.sozbog?.name }}</NuxtLink>
            </li>
            <li>
              <NuxtLink
                :to="localePath('/about')"
                class="text-fg-muted transition-colors hover:text-accent"
              >{{ content.nav.about }}</NuxtLink>
            </li>
            <li>
              <NuxtLink
                :to="localePath('/contact')"
                class="text-fg-muted transition-colors hover:text-accent"
              >{{ content.nav.contact }}</NuxtLink>
            </li>
          </ul>
        </nav>

        <!-- Huquqiy + aloqa -->
        <nav :aria-label="content.footer.legalHeading">
          <h2
            class="font-display text-xs font-bold uppercase tracking-[0.14em]
                   text-fg0"
          >
            {{ content.footer.legalHeading }}
          </h2>
          <ul class="mt-4 space-y-2.5 text-sm">
            <li>
              <NuxtLink
                :to="localePath('/privacy')"
                class="text-fg-muted transition-colors hover:text-accent"
              >{{ content.footer.privacy }}</NuxtLink>
            </li>
            <li>
              <NuxtLink
                :to="localePath('/terms')"
                class="text-fg-muted transition-colors hover:text-accent"
              >{{ content.footer.terms }}</NuxtLink>
            </li>
            <li>
              <NuxtLink
                :to="localePath('/support')"
                class="text-fg-muted transition-colors hover:text-accent"
              >{{ content.footer.support }}</NuxtLink>
            </li>
            <li>
              <a
                :href="`mailto:${SITE.email}`"
                class="break-all text-fg-muted transition-colors
                       hover:text-accent"
              >{{ SITE.email }}</a>
            </li>
            <li>
              <a
                :href="SITE.telegramUrl"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center gap-1.5 text-fg-muted
                       transition-colors hover:text-accent"
              >
                <AppIcon name="telegram" :size="14" />
                &commat;{{ SITE.telegram }}
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div
        class="mt-12 flex flex-col gap-3 border-t border-border pt-6
               text-xs text-fg0 sm:flex-row sm:items-center
               sm:justify-between"
      >
        <p>&copy; {{ year }} {{ SITE.company }}. {{ content.footer.rights }}</p>
        <p class="flex items-center gap-1.5">
          <span class="text-accent">&#9788;</span>
          {{ content.footer.builtIn }}
        </p>
      </div>
    </div>
  </footer>
</template>

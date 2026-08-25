<script setup lang="ts">
import { SITE, mailto } from '~/utils/site'

const content = useSiteContent()
const localePath = useLocalePath()

usePageSeo('contact', { ogTitle: content.value.contact.heading })

useSchemaOrg([
  defineBreadcrumb({
    itemListElement: [
      { name: content.value.nav.home, item: localePath('/') },
      { name: content.value.nav.contact, item: localePath('/contact') },
    ],
  }),
  {
    '@type': 'ContactPage',
    'name': content.value.meta.contact.title,
  },
])

// --- Forma -------------------------------------------------------------
const form = reactive({ name: '', email: '', subject: '', message: '' })

/**
 * `company` — bot tuzogʻi (honeypot). Odam buni koʻrmaydi, chunki u
 * ekrandan tashqarida turadi. Robotlar esa hamma maydonni toʻldiradi —
 * shu maydon toʻlgan boʻlsa, server xabarni jimgina tashlab yuboradi.
 */
const honeypot = ref('')

type State = 'idle' | 'sending' | 'sent' | 'error'
const state = ref<State>('idle')

/** Server ishlamasa shu havola koʻrsatiladi — xabar yoʻqolmasin */
const mailHref = computed(() => {
  const subject = form.subject.trim() || `${SITE.company} — website enquiry`
  const lines = [
    form.message.trim(),
    '',
    '—',
    form.name.trim() ? `${content.value.contact.fields.name}: ${form.name.trim()}` : '',
    form.email.trim() ? `${content.value.contact.fields.email}: ${form.email.trim()}` : '',
  ].filter(Boolean)
  return mailto(subject, lines.join('\n'))
})

async function submit() {
  if (state.value === 'sending') return
  state.value = 'sending'

  try {
    const res = await $fetch<{ ok: boolean }>('/api/contact', {
      method: 'POST',
      body: { ...form, company: honeypot.value },
    })
    if (!res?.ok) throw new Error('not ok')

    state.value = 'sent'
    Object.assign(form, { name: '', email: '', subject: '', message: '' })
  }
  catch {
    // Server yoʻq yoki sozlanmagan — foydalanuvchiga eski yoʻlni beramiz
    state.value = 'error'
  }
}

function reset() {
  state.value = 'idle'
}

// --- Emailni nusxalash ------------------------------------------------
const copied = ref(false)
let timer: ReturnType<typeof setTimeout> | undefined

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(SITE.email)
    copied.value = true
    clearTimeout(timer)
    timer = setTimeout(() => (copied.value = false), 2000)
  }
  catch {
    // Clipboard yopiq boʻlsa jim qolamiz — email baribir havola sifatida turibdi
  }
}

onBeforeUnmount(() => clearTimeout(timer))

const inputClass = `w-full rounded-xl border border-border-strong bg-surface
  px-4 py-3 text-sm text-fg placeholder:text-fg-subtle
  transition-colors focus:border-accent focus:outline-none`
</script>

<template>
  <div>
    <PageHero
      :title="content.contact.heading"
      :lead="content.contact.lead"
    />

    <section class="mx-auto max-w-6xl px-5 py-12 sm:px-8">
      <div class="grid gap-8 lg:grid-cols-[1fr_1.15fr]">
        <!-- ============ CHAP: toʻgʻridan-toʻgʻri aloqa ============ -->
        <div class="space-y-6">
          <!-- Telegram -->
          <div class="card-edge rounded-3xl p-8 backdrop-blur-sm">
            <span
              class="inline-flex h-11 w-11 items-center justify-center
                     rounded-xl bg-dawn text-on-accent"
            >
              <AppIcon name="telegram" :size="21" />
            </span>

            <h2 class="mt-5 text-xl font-bold">
              {{ content.contact.telegramHeading }}
            </h2>
            <p class="mt-2 text-sm leading-relaxed text-fg-muted">
              {{ content.contact.telegramNote }}
            </p>

            <a
              :href="SITE.telegramUrl"
              target="_blank"
              rel="noopener"
              class="group mt-5 inline-flex items-center gap-2 font-display
                     text-lg font-semibold text-accent transition-opacity
                     hover:opacity-80"
            >
              &commat;{{ SITE.telegram }}
              <AppIcon
                name="arrow"
                :size="16"
                class="transition-transform duration-200
                       group-hover:translate-x-1"
              />
            </a>
          </div>

          <!-- Email -->
          <div class="card-edge rounded-3xl p-8 backdrop-blur-sm">
            <span
              class="inline-flex h-11 w-11 items-center justify-center
                     rounded-xl bg-dawn text-on-accent"
            >
              <AppIcon name="mail" :size="21" />
            </span>

            <h2 class="mt-5 text-xl font-bold">
              {{ content.contact.emailHeading }}
            </h2>
            <p class="mt-2 text-sm leading-relaxed text-fg-muted">
              {{ content.contact.emailNote }}
            </p>

            <a
              :href="`mailto:${SITE.email}`"
              class="mt-5 block break-all font-display text-lg font-semibold
                     text-accent transition-opacity hover:opacity-80"
            >{{ SITE.email }}</a>

            <button
              type="button"
              class="mt-4 inline-flex items-center gap-2 rounded-xl border
                     border-border-strong px-4 py-2 text-xs font-semibold
                     text-fg-body transition-colors hover:border-accent
                     hover:text-fg"
              @click="copyEmail"
            >
              <AppIcon :name="copied ? 'check' : 'copy'" :size="15" />
              {{ copied ? content.cta.copied : content.cta.copyEmail }}
            </button>
          </div>

          <div class="card-edge rounded-3xl p-8 backdrop-blur-sm">
            <h2 class="flex items-center gap-2.5 text-base font-bold">
              <AppIcon name="pin" :size="18" class="text-accent" />
              {{ content.contact.locationHeading }}
            </h2>
            <p class="mt-3 text-sm text-fg-muted">
              {{ content.contact.locationBody }}
            </p>

            <h2 class="mt-7 flex items-center gap-2.5 text-base font-bold">
              <AppIcon name="clock" :size="18" class="text-accent" />
              {{ content.contact.responseHeading }}
            </h2>
            <p class="mt-3 text-sm leading-relaxed text-fg-muted">
              {{ content.contact.responseBody }}
            </p>
          </div>
        </div>

        <!-- ============ OʻNG: forma ============ -->
        <div class="card-edge rounded-3xl p-8 backdrop-blur-sm sm:p-10">
          <!-- Yuborilgandan keyingi holat -->
          <div v-if="state === 'sent'" class="py-6 text-center">
            <span
              class="inline-flex h-14 w-14 items-center justify-center
                     rounded-2xl bg-dawn text-on-accent"
            >
              <AppIcon name="check" :size="26" />
            </span>
            <h2 class="mt-6 text-2xl font-bold">
              {{ content.contact.sentHeading }}
            </h2>
            <p class="mx-auto mt-4 max-w-sm leading-relaxed text-fg-muted">
              {{ content.contact.sentBody }}
            </p>
            <button
              type="button"
              class="mt-8 inline-flex items-center gap-2 rounded-xl border
                     border-border-strong px-5 py-2.5 text-sm font-semibold
                     text-fg-body transition-colors hover:border-accent"
              @click="reset"
            >
              {{ content.contact.sendAnother }}
            </button>
          </div>

          <!-- Forma -->
          <template v-else>
            <h2 class="text-xl font-bold">
              {{ content.contact.formHeading }}
            </h2>
            <p class="mt-2 text-sm leading-relaxed text-fg-subtle">
              {{ content.contact.formNote }}
            </p>

            <form class="relative mt-7 space-y-5" @submit.prevent="submit">
              <div class="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    for="f-name"
                    class="mb-2 block text-xs font-semibold text-fg-muted"
                  >{{ content.contact.fields.name }}</label>
                  <input
                    id="f-name"
                    v-model="form.name"
                    type="text"
                    name="name"
                    autocomplete="name"
                    :placeholder="content.contact.placeholders.name"
                    :class="inputClass"
                  >
                </div>

                <div>
                  <label
                    for="f-email"
                    class="mb-2 block text-xs font-semibold text-fg-muted"
                  >{{ content.contact.fields.email }}</label>
                  <input
                    id="f-email"
                    v-model="form.email"
                    type="email"
                    name="email"
                    autocomplete="email"
                    :placeholder="content.contact.placeholders.email"
                    :class="inputClass"
                  >
                </div>
              </div>

              <div>
                <label
                  for="f-subject"
                  class="mb-2 block text-xs font-semibold text-fg-muted"
                >{{ content.contact.fields.subject }}</label>
                <input
                  id="f-subject"
                  v-model="form.subject"
                  type="text"
                  name="subject"
                  :placeholder="content.contact.placeholders.subject"
                  :class="inputClass"
                >
              </div>

              <div>
                <label
                  for="f-message"
                  class="mb-2 block text-xs font-semibold text-fg-muted"
                >{{ content.contact.fields.message }}</label>
                <textarea
                  id="f-message"
                  v-model="form.message"
                  name="message"
                  rows="6"
                  required
                  :placeholder="content.contact.placeholders.message"
                  :class="inputClass"
                />
              </div>

              <!-- Bot tuzogʻi: odam koʻrmaydi, robot toʻldiradi -->
              <div class="absolute left-[-9999px] top-0" aria-hidden="true">
                <label for="f-company">Company</label>
                <input
                  id="f-company"
                  v-model="honeypot"
                  type="text"
                  name="company"
                  tabindex="-1"
                  autocomplete="off"
                >
              </div>

              <button
                type="submit"
                :disabled="state === 'sending'"
                class="group inline-flex w-full items-center justify-center
                       gap-2.5 rounded-xl2 bg-dawn px-6 py-3.5 font-semibold
                       text-on-accent shadow-dawn transition-transform
                       duration-200 hover:-translate-y-0.5
                       disabled:cursor-wait disabled:opacity-70
                       disabled:hover:translate-y-0 sm:w-auto"
              >
                <AppIcon
                  :name="state === 'sending' ? 'clock' : 'send'"
                  :size="18"
                />
                {{ state === 'sending'
                  ? content.contact.sending
                  : content.contact.send }}
              </button>

              <!-- Xatolik: xabar yoʻqolmasin, eski yoʻlni beramiz -->
              <div
                v-if="state === 'error'"
                class="rounded-2xl border border-accent-soft/40
                       bg-accent-soft/10 p-5"
                role="alert"
              >
                <p class="font-semibold text-accent-soft">
                  {{ content.contact.errorHeading }}
                </p>
                <p class="mt-2 text-sm leading-relaxed text-fg-body">
                  {{ content.contact.errorBody }}
                </p>
                <div
                  class="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold"
                >
                  <a :href="mailHref" class="text-accent">
                    {{ content.contact.fallbackCta }}
                  </a>
                  <a
                    :href="SITE.telegramUrl"
                    target="_blank"
                    rel="noopener"
                    class="text-accent"
                  >&commat;{{ SITE.telegram }}</a>
                </div>
              </div>
            </form>
          </template>
        </div>
      </div>
    </section>
  </div>
</template>

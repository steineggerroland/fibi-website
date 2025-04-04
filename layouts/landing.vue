<template>
  <Navbar expand="md" background-color="light" background-opacity="50" sticky="top" class="flex-wrap navbar top-of-site"
    ref="navbar">
    <Container>
      <NavbarToggler target="#navbar-collapse" margin="s-auto" />
      <NavbarCollapse id="navbar-collapse">
        <NavbarBrand :to="localePath('/')" class="navbar-brand">
          <b-img src="/logo.png" alt="Logo" height="40px" ref="logo" />
          <b-span small margin="x-2">{{ $t('navbar.brand.name') }}</b-span>
        </NavbarBrand>
        <NavbarNavList margin="s-auto">
          <NavItem>
            <NavLink :to="localePath('/#features')">
              {{ $t('navbar.link.features') }}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink :to="localePath('/#earlyAccess')">
              {{ $t('navbar.link.early-access') }}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink :to="localePath('/#contactForm')">
              {{ $t('navbar.link.contact') }}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink :to="localePath('/#about')">
              {{ $t('navbar.link.about') }}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink :to="localePath('/#legalNotice')">
              {{ $t('navbar.link.privacy') }}
            </NavLink>
          </NavItem>
          <ColorModeNavItemDropdown style="cursor: pointer;" toggle="tooltip" placement="bottom"
          :title="$t('navbar.toggle-color-mode')" />
          <NavItemDropdown>
            <NavItemDropdownToggle style="cursor: pointer;"><span toggle="tooltip"
                :title="$t('navbar.language')">🌐</span></NavItemDropdownToggle>
            <DropdownMenu>
              <DropdownItem>
                <NuxtLink :to="switchLocalePath('de')">Deutsch 🇩🇪</NuxtLink>
              </DropdownItem>
              <DropdownItem>
                <NuxtLink :to="switchLocalePath('en')">English 🇺🇸</NuxtLink>
              </DropdownItem>
            </DropdownMenu>
          </NavItemDropdown>
          <NavItem toggle="tooltip" placement="bottom" :title="$t('navbar.toggle-privacy-settings')">
            <NavLink margin="x-1" color="light" size="sm" toggle="collapse" href="#privacy-acceptance"
              :aria-label="$t('navbar.toggle-privacy-settings')" aria-controls="privacy-acceptance">
              🔐
            </NavLink>
          </NavItem>
        </NavbarNavList>
      </NavbarCollapse>
      <Collapse id="privacy-acceptance" ref="privacyAcceptance" margin="x-auto y-2" class="clear-float">
        <Container background-color="body" padding="2">
          <PrivacyAcceptance @privacy-accepted="handlePrivacyAccepted" />
        </Container>
      </Collapse>
    </Container>
    <Teleport to="body">
      <div id="top-of-site-indicator-pixel" ref="topOfSiteIndicatorPixel"></div>
    </Teleport>
  </Navbar>

  <slot />
</template>
<script lang="ts" setup>
import { NavItem } from '#components';
import { useSwitchLocalePath, useLocalePath } from '#i18n'

const switchLocalePath = useSwitchLocalePath()
const localePath = useLocalePath()
const privacyAcceptance = ref<{ hide: () => void; show: () => void } | null>(null)
const { updatePrivacySettings } = usePrivacy()

const handlePrivacyAccepted = (settings: { analytics: boolean; tracking: boolean }) => {
  privacyAcceptance.value?.hide()
  updatePrivacySettings(settings)
}

const topOfSiteIndicatorPixel = useTemplateRef('topOfSiteIndicatorPixel')
const navbar = useTemplateRef('navbar')
onMounted(() => {
  if (localStorage.getItem('privacyAccepted') !== 'true') {
    privacyAcceptance.value?.show()
  }

  // Check if IntersectionObserver is supported
  if (
    "IntersectionObserver" in window &&
    "IntersectionObserverEntry" in window &&
    "intersectionRatio" in window.IntersectionObserverEntry.prototype
  ) {
    // If the logo is not visible, it means the user is at the top of the page
    let observer = new IntersectionObserver(entries => {
      if (entries[0].boundingClientRect.y < 0) {
        navbar.value?.$el.classList.remove("top-of-site");
        navbar.value!.$el.classList.add("bg-opacity-25");
        navbar.value!.$el.classList.remove("bg-opacity-50");
      } else {
        navbar.value?.$el.classList.add("top-of-site");
        navbar.value!.$el.classList.remove("bg-opacity-25");
        navbar.value!.$el.classList.add("bg-opacity-50");
      }
    });
    observer.observe(topOfSiteIndicatorPixel.value!);
  }
})
</script>

<style scoped>
.navbar {
  transition: all 500ms ease-in;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.25);
}

.navbar-brand {
  text-decoration: none;
  transition: opacity 500ms ease-in;
  opacity: 1;
}

.navbar.top-of-site .navbar-brand:hover {
  opacity: 0.8;
}

.navbar.top-of-site .navbar-brand {
  opacity: 0;
}


#top-of-site-indicator-pixel {
  position: absolute;
  width: 1px;
  height: 1px;
  top: 90vh;
  left: 0;
  background-color: transparent;
  z-index: -1;
}
</style>
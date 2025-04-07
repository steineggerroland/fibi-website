<template>
    <Navbar expand="md" background-color="body" :background-opacity="highlightNavbar ? 1 : 0.5" sticky="top"
        class="flex-wrap navbar" ref="navbar" @mouseenter="isHovered = true" @mouseleave="isHovered = false"
        style="overflow-y: auto; max-height: 100vh;" shadow>
        <Container>
            <NavbarBrand :to="localePath('/')" class="navbar-brand"
                :style="{ opacity: highlightNavbar ? 1 : showBrand ? 1 : 0 }">
                <b-img src="/logo.png" alt="Logo" height="40px" ref="logo" />
                <b-span small margin="x-2">{{ $t('navbar.brand.name') }}</b-span>
            </NavbarBrand>
            <NavbarToggler target="#navbar-collapse" margin="s-auto" style="cursor: pointer;" ref="navbarToggler" />
            <NavbarCollapse id="navbar-collapse" ref="navbarCollapse">
                <NavbarNavList margin="s-auto" text-alignment="center">
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
                        <NavLink :to="localePath('/blog')">
                            {{ $t('navbar.link.blog') }}
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
                    <NavItem toggle="tooltip" placement="bottom" :title="$t('navbar.toggle-color-mode')">
                        <NavLink padding="2" @click="toggleDarkMode()" @keydown.enter="toggleDarkMode()"
                            style="cursor: pointer" tabindex="0" :aria-label="$t('navbar.toggle-color-mode')"
                            aria-controls="privacy-acceptance">
                            <span v-if="isDark">☀️</span>
                            <span v-else>🌙</span>
                            <b-span margin="s-2" display="inline-block md-none">{{ $t('navbar.toggle-color-mode')
                                }}</b-span>
                        </NavLink>
                    </NavItem>
                    <NavItemDropdown>
                        <NavItemDropdownToggle style="cursor: pointer;">
                            <b-span toggle="tooltip" :title="$t('navbar.language')">🌐</b-span>
                            <b-span margin="s-2" display="inline-block md-none">{{ $t('navbar.language') }}</b-span>
                        </NavItemDropdownToggle>
                        <Teleport to="body">
                            <DropdownMenu style="z-index: 2000;">
                                <DropdownItem>
                                    <NuxtLink :to="switchLocalePath('de')">Deutsch 🇩🇪</NuxtLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NuxtLink :to="switchLocalePath('en')">English 🇺🇸</NuxtLink>
                                </DropdownItem>
                            </DropdownMenu>
                        </Teleport>
                    </NavItemDropdown>
                    <NavItem toggle="tooltip" placement="bottom" :title="$t('navbar.toggle-privacy-settings')">
                        <NavLink margin="x-1" size="sm" toggle="collapse" href="#privacy-acceptance"
                            :aria-label="$t('navbar.toggle-privacy-settings')" aria-controls="privacy-acceptance">
                            🔐
                            <b-span margin="s-2" display="inline-block md-none">{{ $t('navbar.privacy-settings')
                                }}</b-span>
                        </NavLink>
                    </NavItem>
                </NavbarNavList>
            </NavbarCollapse>
            <Collapse id="privacy-acceptance" ref="privacyAcceptance" margin="x-auto y-2" class="clear-float">
                <Container padding="2" ref="privacyAcceptanceContainer">
                    <PrivacyAcceptance @privacy-accepted="handlePrivacyAccepted" />
                </Container>
            </Collapse>
        </Container>
    </Navbar>
    <Teleport to="body">
        <div id="top-of-site-indicator-pixel"></div>
    </Teleport>
</template>

<script lang="ts" setup>
const { t } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const localePath = useLocalePath()
const privacyAcceptance = ref<{ hide: () => void; show: () => void } | null>(null)
const { updatePrivacySettings } = usePrivacy()
const navbarCollapse = templateRef('navbarCollapse')
const isCollapsed = useElementVisibility(navbarCollapse)
const navbarToggler = templateRef('navbarToggler')
const isTogglerVisible = useElementVisibility(navbarToggler)
const privacyAcceptanceContainer = templateRef('privacyAcceptanceContainer')
const isPrivacyAcceptanceContainerVisible = useElementVisibility(privacyAcceptanceContainer)
const isDark = useDark()
const toggleDarkMode = useToggle(isDark)
const isHovered = ref(false)
const isTopOfSite = ref(false)

watch(isDark, () => {
    if (isDark.value) {
        document.querySelector('html')?.setAttribute('data-bs-theme', 'dark')
    } else {
        document.querySelector('html')?.removeAttribute('data-bs-theme')
    }
})
const { height: windowHeight, width: windowWidth } = useWindowSize()

const props = defineProps<{
    contentHeight: number
}>()

const handlePrivacyAccepted = (settings: { analytics: boolean; tracking: boolean }) => {
    privacyAcceptance.value?.hide()
    updatePrivacySettings(settings)
}

let observer: IntersectionObserver | null = null
onMounted(() => {
    if (localStorage.getItem('privacyAccepted') !== 'true') {
        privacyAcceptance.value?.show()
    }

    if (
        "IntersectionObserver" in window &&
        "IntersectionObserverEntry" in window &&
        "intersectionRatio" in window.IntersectionObserverEntry.prototype
    ) {
        observer = new IntersectionObserver(entries => {
            if (entries[0].boundingClientRect.y > 0) {
                isTopOfSite.value = true;
            } else {
                isTopOfSite.value = false;
            }
        });
        observer.observe(document.getElementById('top-of-site-indicator-pixel')!);
    } else {
        isTopOfSite.value = false;
    }
})
const isSpaceForScrolling = computed(() => {
    return props.contentHeight / windowHeight.value > 1.5
})
const showBrand = computed(() => {
    if (!isSpaceForScrolling.value) {
        observer?.disconnect()
        return true;
    } else {
        observer?.observe(document.getElementById('top-of-site-indicator-pixel')!);
        return !isTopOfSite.value
    }
})
const highlightNavbar = computed(() => {
    if (isHovered.value || isPrivacyAcceptanceContainerVisible.value || (isTogglerVisible.value && isCollapsed.value)) {
        return true
    } else {
        return false
    }
})
</script>

<style scoped lang="scss">
.navbar-brand {
    transition: opacity 500ms ease-in;

    img {
        transition: transform 250ms ease-in;
    }

    &:hover img,
    &:focus img {
        transform: scale(1.1);
    }
}

.navbar {
    transition: all 250ms ease-out;
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
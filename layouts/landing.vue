<template>
    <Navbar
  expand="lg"
  background-color="white"
  background-opacity="25"
  sticky="top"
 >
  <Container justify-content="end">
 <NavbarNavList>
  <ColorModeNavItemDropdown style="cursor: pointer;" />
 </NavbarNavList>

   <Dropdown>
  <DropdownToggle color="light">Language 🌐</DropdownToggle>
  <DropdownMenu>
    <DropdownItem><NuxtLink :to="switchLocalePath('de')">Deutsch 🇩🇪</NuxtLink></DropdownItem>
    <DropdownItem><NuxtLink :to="switchLocalePath('en')">English 🇺🇸</NuxtLink></DropdownItem>
</DropdownMenu>
   </Dropdown>
  </Container>
 </Navbar>
        <slot />
</template>
<script lang="ts" setup>
    const switchLocalePath = useSwitchLocalePath()
</script>

<style></style>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <BackToTop color="primary-subtle" :offset-top="500" style="box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.25); cursor: pointer;"
      toggle="tooltip" :title="$t('back-to-top')" />
  </div>
</template>
<template>
  <section class="sidebar-panel" aria-labelledby="shimasu-title">
    <div class="sidebar-panel-header">
      <h2 id="shimasu-title" class="text-sm font-medium">{{ $t('shimasu.title') }}</h2>
    </div>
    <div class="flex flex-col items-start gap-3 p-3 text-sm">
      <IconTerminal class="h-8 w-8 text-primary" aria-hidden="true" />
      <p class="font-medium">{{ $t('shimasu.subtitle') }}</p>
      <span class="badge badge-sm badge-neutral">{{ $t('shimasu.status') }}</span>
      <p class="text-base-content/60 leading-relaxed">{{ $t('shimasu.description') }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { IconTerminal } from '@/common/icons';
</script>

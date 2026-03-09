<template>
  <div id="game">
    <canvas ref="canvasRef"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import kaplay from 'kaplay'

const canvasRef = ref<HTMLCanvasElement | null>(null)
let k: ReturnType<typeof kaplay> | null = null

onMounted(() => {
  if (!canvasRef.value) return

  k = kaplay({
    canvas: canvasRef.value,
    width: 800,
    height: 600,
    background: [13, 13, 13],
  })

  k.add([
    k.text('PLACEHOLDER', { size: 32 }),
    k.pos(k.center()),
    k.anchor('center'),
    k.color(255, 255, 255),
  ])
})

onUnmounted(() => {
  if (k) {
    k.quit()
    k = null
  }
})
</script>

<style scoped lang="scss">
#game {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}

canvas {
  max-width: 100%;
  height: auto;
}
</style>

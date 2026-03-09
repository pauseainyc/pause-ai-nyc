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

  k.loadFont('press-start-2p', 'https://fonts.gstatic.com/s/pressstart2p/v15/e3t4euO8T-267oIAQAu6jDQyK3nVivM.woff2')

  k.onLoad(() => {
    k!.add([
      k!.text('PLACEHOLDER', { size: 32, font: 'press-start-2p' }),
      k!.pos(k!.center()),
      k!.anchor('center'),
      k!.color(255, 255, 255),
    ])
  })
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

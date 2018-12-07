<template>
  <div>
     <flexbox>
      <flexbox-item><div class="flex-demo">1</div></flexbox-item>
      <flexbox-item><div class="flex-demo">2</div></flexbox-item>
      <flexbox-item><div class="flex-demo">3</div></flexbox-item>
    </flexbox>
  </div>
</template>


<script>
import { Flexbox, FlexboxItem } from 'vux'

export default {
  components: {
    Flexbox,
    FlexboxItem
  },
}
</script>

<style lang="less">
@import '~vux/src/styles/1px.less';

.flex-demo {
  text-align: center;
  color: #fff;
  background-color: #20b907;
  border-radius: 4px;
  background-clip: padding-box;
}
</style>
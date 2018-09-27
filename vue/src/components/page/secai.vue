<template>
    <div>
        <p class="tt-item">Color 色彩</p>
        <p>为了避免视觉传达差异，使用一套特定的调色板来规定颜色，为你所搭建的产品提供一致的外观视觉感受。</p>
        <p class="tt-item">主色</p>
        <div>
             <div class="color-box bg-blue">
                 Blue <br>
                 #409EFF
             </div>
        </div>
        <p class="tt-item">辅助色</p>
        <div>
            <div class="color-box bg-blue">Success<br>#67C23A</div>
            <div class="color-box bg-warning">Warning<br>#E6A23C</div>
            <div class="color-box bg-danger">Danger<br>#F56C6C</div>
            <div class="color-box bg-info">Info<br>#909399</div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "secai"
    }
</script>

<style scoped>

    .color-box {
        border-radius: 4px;
        padding: 20px;
        display: inline-block;
        width: 200px;
        margin: 5px 0;
        height: 74px;
        box-sizing: border-box;
        color: #fff;
        font-size: 14px;
    }
</style>

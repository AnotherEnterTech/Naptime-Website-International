<template>
    <section class="home">
        <div style="height: 1px;"></div>
        <div class="main">
            <p class="title">
                The first smart eyeshade with <span class="text-highlight reverse">EEG</span> technology <br>
                for the <span class="text-highlight"> Best Naps </span> ever.
            </p>
        </div>
    </section>
</template>

<style lang="less">
@import "../common/less/color.less";

.home {
    background-color: @color-bg-dark;
}
.main {
    margin: 0 auto;
    width: 800px;
    .title {
        margin-top: 200px;
        color: white;
        font-size: 24px;
        font-weight: bold;
        text-align: left;
    }
}
</style>
<template>
    <section class="home">
        <div style="height: 1px;"></div>
        <div class="main">
            <div class="title">
                The first smart eyeshade with <span class="text-highlight reverse">EEG</span> technology <br>
                for the <span class="text-highlight"> Best Naps </span> ever.
            </div>
            <div class="sign">
                ENTERTECH.
            </div>
            <div class="description">
                Dark environment anywhere<br/>
                Music and sleep tracks<br/>
                Wake up at the optimal time in your sleep cycle
            </div>
        </div>
    </section>
</template>

<style lang="less">
@import "../common/less/color.less";

.home {
    background-color: @color-bg-dark;
    background: url(static/assets/home_bg.png) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}
.main {
    margin: 0 auto;
    width: 800px;
    text-align: left;
    color: @color-text-white;
    .title {
        margin-top: 200px;
        font-size: 24px;
        font-weight: bold;
        text-shadow: 2px 2px 2px #555;
        .text-highlight {
          text-shadow: none;
        }
    }
    .sign {
        margin-top: 40px;
        line-height: 32px;
        &:before {
            display: block;
            width: 50px;
            height: 2px;
            content: "";
            border-top: 2px solid @color-text-highlight;
        }
    }
    .description {
        margin-top: 80px;
        font-size: 14px;
        line-height: 24px;
    }
}
</style>

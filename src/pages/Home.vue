<template>
    <section class="home">
        <div class="gap black"></div>
        <div class="image mobile">
            <img src="static/assets/home-show-m.png" width="280"/>
        </div>
        <div class="main">
            <div class="title f-title">
                The first smart eyeshade with <span class="text-highlight reverse">EEG</span> technology <br>
                for the <span class="text-highlight"> Best Naps </span> ever.
            </div>
            <div class="sign f-sign">
                ENTERTECH.
            </div>
            <div class="description f-desc">
                Dark environment anywhere<br/>
                Music and sleep tracks<br/>
                Wake up at the optimal time in your sleep cycle
            </div>
        </div>
    </section>
</template>

<style lang="less">
@import "../common/less/color.less";
@import "../common/less/layout.less";

.home {
    background-color: @color-bg-dark;
    .cover-bg(url(static/assets/home_bg.png));
    .main {
        margin: 0 auto;
        max-width: 800px;
        padding-left: 10px;
        text-align: left;
        color: @color-text-white;
        .title {
            margin-top: 200px;
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
            line-height: 24px;
        }
    }
}

// 显示器
@media only screen and (min-width: @screen-desktop) {

}

// 笔记本
@media only screen and (min-width: @screen-pad) and (max-width: @screen-desktop) {

}

// 平板
@media only screen and (min-width: @screen-mobile) and (max-width: @screen-pad) {

}

// 手机
@media only screen and (max-width: @screen-mobile) {
    .home {
        .cover-bg(url(static/assets/product-1-bg.png));
        .image {
            margin-top: 80px;
            text-align: right;
        }
        .main {
            margin: 20px auto;
            .title {
                margin-top: 20px;
            }
        }
    }
}
</style>

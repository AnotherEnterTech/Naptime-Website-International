<template>
    <section class="app">
        <div class="inner">
            <div class="gap black"></div>
            <div class="content">
                <div class="image">
                    <img src="/static/assets/app-show.png"/>
                </div>
                <div class="title f-title">
                    <span class="text-highlight">Naptime</span> + Companion <span class="text-highlight">App</span><br/>
                    = Best Nap Trackker
                </div>
                <div class="download">
                    <a href="javascript:void(0);" v-on:click="downloadApp">
                        <img src="/static/assets/app-download.png" />
                    </a>
                </div>
                <div class="qrcode pc-pad">
                    <img src="/static/assets/app-qrcode.png" width="180"/>
                </div>
            </div>
        </div>
        <NapFooter></NapFooter>
    </section>
</template>

<script>
import NapFooter from '../components/Footer.vue'
export default {
    methods: {
        downloadApp: function () {
            window.location = '/naptime-enterprise.plist';
            setTimeout(function () {
				window.location.href = "/tip";
			}, 3000);
        }
    },
    components: { NapFooter }
}
</script>

<style lang="less">
@import "../common/less/color.less";
@import "../common/less/layout.less";

.app {
    background-color: @color-bg-dark;
    .cover-bg(url(/static/assets/app-bg.png));
    .inner {
        max-width: 1440px;
        height: 100%;
        margin: 0 auto;
    }
    .content {
        color: @color-text-white;
        text-align: left;
        margin: 170px 200px;
        .relative;
    }
    .title {
        line-height: 1.6;
        margin: 40px 0;
    }
    .download {
        margin: 20px 0;
    }
    .qrcode {

    }
    .image {
        .absolute;
        left: 200px;
        top: 20px;
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
    .app {
        .content {
            margin: 40px 0;
            padding: 20px;
        }
        .image {
            position: static;
            img {
                width: 100%;
            }
        }
    }
}
</style>

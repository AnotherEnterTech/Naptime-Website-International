<template>
    <div id="app">
        <nav>
            <div class="inner">
                <div class="logo">
                    <img src="/static/assets/logo_yellow.png">
                </div>
                <ul class="menus">
                    <li>
                        <router-link to="/home/"> HOME </router-link>
                    </li>
                    <li>
                        <router-link to="/product/"> PRODUCT </router-link>
                    </li>
                    <li>
                        <router-link to="/app/"> APP </router-link>
                    </li>
                    <li>
                        <router-link to="/about/"> ABOUT </router-link>
                    </li>
                </ul>
                <div class="actions">
                    <a href="https://www.indiegogo.com/project/preview/a3a5d0cc#/" class="buy left" target="_blank">
                        <img src="/static/assets/buy_now.png" width="100">
                    </a>
                    <div class="share left">
                        <span><a href="https://twitter.com/entertechchina" target="_blank"><img src="/static/assets/share_twitter.png"></a></span>
                        <span><a href="https://www.facebook.com/Naptime-by-Entertech-1728156884115311" target="_blank"><img src="/static/assets/share_facebook.png"></a></span>
                    </div>
                </div>
            </div>
        </nav>

        <transition name="fade" mode="out-in">
            <router-view class="page"></router-view>
        </transition>
    </div>
</template>

<style lang='less'>
@import "common/less/color";
@import "common/less/layout";
html,body {
    width: 100%;
    height: 100%;
    background-color: @color-bg-dark;
}
#app {
    font-family: HanHei SC,PingHei,PingFang SC,STHeitiSC-Light,Helvetica Neue,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin: 0 auto;
    height: 100%;
    a {
        text-decoration: none;
    }
    nav {
        position: absolute;
        top: 0;
        width: 100%;
        z-index: 1000;
        .inner {
            height: @nav-height;
            max-width: 100%;
            position: relative;
            padding: 0 240px 0 100px;
        }
        ul {
            -webkit-padding-start: 0;
        }
        a {
            color: @color-text-white;
            &:hover {
                color: #DDDDDD;
            }
        }
        .logo {
            width: @nav-height;
            height: @nav-height;
            position: absolute;
            left: 10px;
            top: 50%;
            margin-top: -33px;
            img {
                width: 60px;
                height: 60px;
            }
        }
        .menus {
            height: 100%;
            margin: 0;
            li {
                float: left;
                width: 108px;
                height: 100%;
                list-style: none;
                a {
                    height: 100%;
                    line-height: @nav-height;
                    display: block;
                }
                .active {
                    color: @color-text-highlight;
                }
            }
        }
        .actions {
            position: absolute;
            right: 20px;
            width: 240px;
            top: 50%;
            margin-top: -10px;
            .buy {
                margin: 0 20px;
            }
        }
    }
    .page {
        width: 100%;
        height: 100%;
    }
}

// 显示器
@media only screen and (min-width: @screen-desktop) {

}

// 笔记本
@media only screen and (min-width: @screen-pad) and (max-width: @screen-desktop) {

}

// 平板
// @media only screen and (min-width: @screen-mobile) and (max-width: @screen-pad) {
//
// }

// 手机
@media only screen and (max-width: @screen-mobile) {
    @nav-height: 60px;
    #app {
        nav {
            .inner {
                padding: 0 0 0 40px;
                height: @nav-height;
            }
            .logo {
                width: @nav-height/2;
                height: @nav-height/2;
                margin-top: -15px;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .menus {
                li {
                    margin: 0 6px;
                    width: inherit;
                    a {
                        line-height: @nav-height;
                        font-size: 12px;
                    }
                }
            }
            .actions {
                width: inherit;
                right: 0;
                .buy {
                    margin: 0;
                    img {
                        width: 80px;
                    }
                }
                .share {
                    display: none;
                }
            }
        }
    }
}
</style>

<script>

</script>

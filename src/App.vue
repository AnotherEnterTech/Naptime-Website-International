<template>
    <div id="app">
        <nav>
            <div class="inner">
                <div class="logo">
                    <img src="/static/assets/logo_yellow.png">
                </div>
                <ul class="menus">
                    <li>
                        <router-link to="/">Home</router-link>
                    </li>
                    <li>
                        <router-link to="/product"> Product </router-link>
                    </li>
                    <li>
                        <router-link to="/app"> App </router-link>
                    </li>
                    <li>
                        <router-link to="/about"> About </router-link>
                    </li>
                </ul>
                <div class="actions">
                    <a href="" class="buy left">
                        <img src="/static/assets/buy_now.png">
                    </a>
                    <div class="share left">
                    <span><img src="/static/assets/share_twitter.png"></span>
                    <span><img src="/static/assets/share_facebook.png"></span>
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
        .inner {
            height: @nav-height;
            max-width: 100%;
            position: relative;
            padding: 0 240px 0 120px;
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
            left: 20px;
            top: 50%;
            margin-top: -33px;
        }
        .menus {
            height: 100%;
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
</style>

<script>

</script>